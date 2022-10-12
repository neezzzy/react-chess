import React from 'react';

export default function Piece({ id, position }) {
  const SIZE = 100;

  return (
    <img
      style={{
        cursor: 'move',
        width: SIZE,
        height: SIZE,
        position: 'absolute',
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: 1,
        top: 0,
        left: 0,
      }}
      alt="chess piece"
      src={`images/${id}.png`}
    />
  );
}
