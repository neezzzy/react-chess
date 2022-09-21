import React from "react";
import Square from "../components/Square";
import Knight from "../components/Knight";
import BoardSquare from "../components/BoardSquare";
import { canMoveKnight, moveKnight } from "../components/Game";

function renderSquare(i, knightPosition) {
  const x = i % 8
  const y = Math.floor(i / 8)
  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}


export default function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }

  return <div style={boardStyle}>{squares}</div>;
}

function handleSquareClick(toX, toY) {
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

// styling properties applied to the board element
const boardStyle = {
  margin: "0 auto",
  width: "100vmin",
  height: "100vmin",
  display: "flex",
  flexWrap: "wrap",
  fontSize: "10vmin",
  border: "1px solid black",
};

// styling properties applied to each square element
const squareStyle = {
  width: "12.5%",
  height: "12.5%",
};
