import React from "react";
import styled from "styled-components";

const WHITE = "rgb(100, 133, 68)";
const BLACK = "rgb(230, 233, 198)";

const Square = ({ white, row, col }) => {
  const backgroundColor = white ? WHITE : BLACK;

  const color = white ? BLACK : WHITE;

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        height: "400px",
        backgroundColor,
      }}
    >
      <p
        style={{
          opacity: col === 0 ? 1 : 0,
          fontWeight: "500",
          fontSize: "5rem",
        }}
      >
        {"" + (8 - row)}
      </p>
      <p
        style={{
          opacity: row === 7 ? 1 : 0,
          alignSelf: "flex-end",
          fontWeight: "500",
          fontSize: "5rem",
        }}
      >
        {String.fromCharCode(97 + col)}
      </p>
    </div>
  );
};

const Row = ({ white, row }) => {
  const offset = white ? 0 : 1;
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
      {new Array(8).fill(0).map((_, i) => (
        <Square row={row} col={i} key={i} white={(i + offset) % 2 === 1} />
      ))}
    </div>
  );
};

const Board = () => {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {new Array(8).fill(0).map((_, i) => (
        <Row key={i} white={i % 2 === 0} row={i} />
      ))}
    </div>
  );
};

export default Board;
