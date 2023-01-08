import React, { useEffect, useState } from 'react';
import { gameSubject } from './Game';
import Board from './components/Board';
import { Chess } from 'chess.js';
import './App.css';

export default function App() {
  const chess = new Chess();
  const [board, setBoard] = useState(chess.board());

  useEffect(() => {
    const subscribe = gameSubject.subscribe((game) => setBoard(game.board));
    return () => subscribe.unsubscribe();
  }, []);

  return (
    <div className='App'>
      <div className='container'>
      <Board board={board} />
      </div>

    </div>
  );
}
