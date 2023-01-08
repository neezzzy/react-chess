import React from 'react';
import { ItemTypes } from '../itemTypes';
import { useDrag } from 'react-dnd';

function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      <img src={'images/bn.png'} style={{ width: '100%' }} />
    </div>
  );
}

export default Knight;
