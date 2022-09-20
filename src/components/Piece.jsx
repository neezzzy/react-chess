import React from "react";
import useWindowDimensions from "./useWindowDimensions";
import { useDrag } from "react-dnd";
import ItemTypes from "../types/items";
const Piece = ({ id, position }) => {
  const { width } = useWindowDimensions();
  const SIZE = width / 8;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.Piece,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;

  return (
    <img
      ref={drag}
      style={{
        opacity: opacity,
        cursor: "move",
        width: SIZE,
        height: SIZE,
        position: "absolute",
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: 10,
      }}
      alt="chess piece"
      src={`images/${id}.png`}
    />
  );
};

export default Piece;
