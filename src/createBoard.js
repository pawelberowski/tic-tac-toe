import { board } from './index';
export function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.id = i.toString();
    board.append(cellElement);
  }
}
