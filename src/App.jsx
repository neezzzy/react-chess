import React, { useCallback, useRef, useState } from 'react';
import { Chess } from 'chess.js';
import './App.css';
import BoardSquare from './components/BoardSquare';

export default function App() {
  const chess = useConst(() => new Chess());

  const [state, setState] = useState({
    player: 'w',
    board: chess.board(),
  });

  const onTurn = useCallback(() => {
    setState({
      player: state.player === 'w' ? 'b' : 'w',
      board: chess.board(),
    });
  }, [chess, state.player]);

  function useConst(initialValue) {
    const ref = useRef();
    if (ref.current === undefined) {
      ref.current = {
        value:
          typeof initialValue === 'function' ? initialValue() : initialValue,
      };
    }
    return ref.current.value;
  }

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
    <div className="container">
      <div className="board-container">
        <div className="board">
          {state.board.flat().map((piece, index) => (
            <div key={index} className="square">
              <BoardSquare
                piece={piece}
                black={isBlack(index)}
                position={getPosition(index)}
                chess={chess}
                onTurn={onTurn}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
