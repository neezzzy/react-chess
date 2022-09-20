import React, { useCallback, useRef, useState } from "react";
import { Chess } from "chess.js";
import Piece from "./Piece";
import Background from "./Background";
import useWindowDimensions from "./useWindowDimensions";

const Board = () => {
  const chess = new Chess();

  const { width } = useWindowDimensions();
  const SIZE = width / 8;

  const [state, setState] = useState({
    player: "w",
    board: chess.board(),
  });

  const onTurn = useCallback(() => {
    setState({
      player: state.player === "w" ? "b" : "w",
      board: chess.board(),
    });
  }, [chess, state.player]);

  return (
    <div style={{ width: width, height: width }}>
      {state.board.map((row, i) =>
        row.map((square, j) => {
          if (square !== null) {
            return (
              <Piece
                key={`${i}-${j}`}
                data-testid={`box`}
                id={`${square.color}${square.type}`}
                position={{ x: j * SIZE, y: i * SIZE }}
                chess={chess}
                onTurn={onTurn}
                enabled={state.player === square.color}
              />
            );
          }
          return null;
        })
      )}
      <Background />
    </div>
  );
};

export default Board;
