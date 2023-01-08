import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import Board from './components/Board';
import { observe } from './Game';

const root = document.getElementById('root')

const rootContainer = createRoot(root)

observe((knightPosition) =>
  rootContainer.render(createElement(Board, { knightPosition }))
)
