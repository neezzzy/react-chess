import React from 'react';

function Row({ rowNumber, white, width, height }) {
  const offset = white ? 0 : 1;
  const backgroundColor = (i) => ((i + offset) % 2 === 1 ? 'white' : 'black');
  return (
    <div style={{ display: 'flex' }}>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: backgroundColor(i),
            width: width,
            height: height,
            color: 'red',
          }}
        >
          {String.fromCharCode(i + 65)} {rowNumber}
        </div>
      ))}
    </div>
  );
}

export default function Board({ children }) {
  const height = 800;
  const width = 800;
  return (
    <div style={{position: 'relative'}}>
      {[...Array(8)].map((_, i) => (
        <Row
          height={height / 8}
          width={width / 8}
          white={i % 2 === 0}
          key={i}
          rowNumber={8 - i}
        ></Row>
      ))}
      {children}
    </div>
  );
}
