import React from "react";
import useWindowDimensions from "./useWindowDimensions";
import { useDrop } from "react-dnd";
import ItemTypes from "../types/items";

const WHITE = "rgb(100, 133, 68)";
const BLACK = "rgb(230, 233, 198)";

const Square = ({ white, row, col }) => {
  const backgroundColor = white ? WHITE : BLACK;
  // let backgroundColor = "#222";
  const color = white ? BLACK : WHITE;
  const { width, height } = useWindowDimensions();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.Piece,
    drop: () => ({ name: "Cell" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;

  // if (isActive) {
  //   backgroundColor = "darkgreen";
  // } else if (canDrop) {
  //   backgroundColor = "darkkhaki";
  // }
  return (
    <div
      ref={drop}
      data-testid="cell"
      style={{
        display: "flex",
        height: width / 8,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        backgroundColor,
        padding: 4,
        justifyContent: "space-between",
      }}
    >
      <p style={{ opacity: col === 0 ? 1 : 0, color }}>{"" + (8 - row)}</p>

      {row === 7 && (
        <p style={{ alignSelf: "flex-end", color }}>
          {String.fromCharCode(97 + col)}
        </p>
      )}
    </div>
  );
};

const Row = ({ white, row }) => {
  const offset = white ? 0 : 1;
  return (
    <div style={{ display: "flex" }}>
      {new Array(8).fill(0).map((_, i) => (
        <Square row={row} col={i} key={i} white={(i + offset) % 2 === 1} />
      ))}
    </div>
  );
};

const Background = () => {
  return (
    <div>
      {new Array(8).fill(0).map((_, i) => (
        <Row key={i} white={i % 2 === 0} row={i} />
      ))}
    </div>
  );
};

export default Background;
