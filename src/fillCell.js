import { infoDisplay } from './index';
import { checkScore } from './checkScore';

export const currentShape = document.querySelector('.current-shape');
export function fillCell(event) {
  const cellContent = document.createElement('div');
  const circlePlayerName = document.querySelector('#circle-input').value;
  const crossPlayerName = document.querySelector('#cross-input').value;
  cellContent.classList.add(currentShape.innerHTML);
  event.target.append(cellContent);
  if (currentShape.innerHTML === 'circle') {
    currentShape.innerHTML = 'cross';
    infoDisplay.textContent = "It's " + crossPlayerName + "'s Turn";
  } else {
    currentShape.innerHTML = 'circle';
    infoDisplay.textContent = "It's " + circlePlayerName + "'s Turn";
  }
  event.target.removeEventListener('click', fillCell);
  checkScore();
}
