import React from 'react';

export default function Overlay({ color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        display: 'block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    ></div>
  );
}
