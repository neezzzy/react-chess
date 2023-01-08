import React from 'react';

export default function Piece({ piece: { type, color } }) {
  return (
    <div>
      <img className='piece-img' src={`images/${color}${type}.png`} />
    </div>
  );
}
