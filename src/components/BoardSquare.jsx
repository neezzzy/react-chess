import React from 'react';
import Square from './Square';
import Piece from './Piece';
import { useDrop } from 'react-dnd';
import { move } from '../Game';

export default function BoardSquare({ piece, black, position, chess, onTurn }) {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'piece',
    drop: (item) => {
      const [fromPosition] = item.id.split('_');
      move(fromPosition, position, chess, onTurn);
    },

    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div className="board-square" ref={drop}>
      <Square black={black}>
        {piece ? <Piece piece={piece} position={position} /> : null}
        {isOver && canDrop && <div className="overlay-valid" />}
        {isOver && !canDrop && <div className="overlay-invalid" />}
      </Square>
    </div>
  );
}
