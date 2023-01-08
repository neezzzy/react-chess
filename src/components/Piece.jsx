/* eslint-disable react/prop-types */
import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';

export default function Piece({ piece: { type, color }, position }) {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { id: `${position}_${type}_${color}` },
    type: 'piece',
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });

  return (
    <>
      <DragPreviewImage connect={preview} src={`images/${color}${type}.png`} />
      <div
        ref={drag}
        className="piece-container"
        style={{ opacity: isDragging ? 0 : 1 }}
      >
        <img className="piece" src={`images/${color}${type}.png`} />
      </div>
    </>
  );
}
