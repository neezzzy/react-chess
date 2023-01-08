import React from 'react';
import BoardSquare from './BoardSquare';

export default function Board({ board }) {
  function getXYPosition(i) {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7);
    return { x, y };
  }
  function isBlack(i) {
    const { x, y } = getXYPosition(i);
    return (x + y) % 2 === 1;
  }

  function getPosition(i) {
    const { x, y } = getXYPosition(i);
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][x];
    return `${letters}${y + 1}`;
  }

  return (
    <div className="board">
      {board.flat().map((piece, index) => (
        <div key={index} className="square">
          <BoardSquare
            piece={piece}
            black={isBlack(index)}
            position={getPosition(index)}
          />
        </div>
      ))}
    </div>
  );
}
