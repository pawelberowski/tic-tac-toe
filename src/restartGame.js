import {
  infoDisplay,
  nameInputsContainer,
  board,
  restartButton,
} from './index';
import { currentShape } from './fillCell';

export function restartGame() {
  board.classList.add('hidden');
  board.innerHTML = '';
  currentShape.innerHTML = 'circle';
  restartButton.classList.add('hidden');
  infoDisplay.classList.add('hidden');
  nameInputsContainer.classList.remove('hidden');
}
