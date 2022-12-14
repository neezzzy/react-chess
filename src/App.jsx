import React, { useEffect, useState } from 'react';
import { gameSubject } from './Game';
import Board from './components/Board';
import './App.css';

export default function App() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board);
    });
    return () => subscribe.unsubscribe();
  }, []);

  return (
    <div className="container">
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}
