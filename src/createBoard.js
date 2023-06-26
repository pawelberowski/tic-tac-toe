import { board } from './index';
import { fillCell } from "./fillCell";

export function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.id = i.toString();
    cellElement.addEventListener('click', fillCell);
    board.append(cellElement);
  }
}
