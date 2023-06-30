import { infoDisplay } from './index';
import { checkScore } from './checkScore';

let currentShape = 'circle';
export function fillCell(event) {
  const cellContent = document.createElement('div');
  const circlePlayerName = document.querySelector('#circle-input').value;
  const crossPlayerName = document.querySelector('#cross-input').value;
  cellContent.classList.add(currentShape);
  event.target.append(cellContent);
  if (currentShape === 'circle') {
    currentShape = 'cross';
    infoDisplay.textContent = "It's " + crossPlayerName + "'s Turn";
  } else {
    currentShape = 'circle';
    infoDisplay.textContent = "It's " + circlePlayerName + "'s Turn";
  }
  event.target.removeEventListener('click', fillCell);
  checkScore();
}

