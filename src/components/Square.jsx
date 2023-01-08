import React from 'react';

export default function Square({ black, children }) {
  const fill = black ? 'black' : '#D3D3D3';
  const stroke = black ? '#D3D3D3' : 'black';

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
}
