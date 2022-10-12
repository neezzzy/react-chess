import React, { useState } from 'react';
import Board from './components/Board';
import Piece from './components/Piece';
import { Chess } from 'chess.js';

import styled from 'styled-components';

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const chess = new Chess();
  const width = 800;
  const SIZE = width / 8;

  const [state, setState] = useState({
    player: 'w',
    board: chess.board(),
  });

  return (
    <BoardContainer>
      <Board>
        {state.board.map((row, i) =>
          row.map((square, j) => {
            if (square !== null) {
              return (
                <Piece
                  key={`${i}-${j}`}
                  id={`${square.color}${square.type}`}
                  position={{ x: j * SIZE, y: i * SIZE }}
                  chess={chess}
                  enabled={state.player === square.color}
                />
              );
            }
            return null;
          })
        )}
      </Board>
    </BoardContainer>
  );
}

export default App;
