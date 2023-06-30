import {infoDisplay, nameInputsContainer, board, restartButton} from "./index";

export function restartGame() {
  board.classList.add('hidden');
  board.innerHTML = '';
  restartButton.classList.add('hidden');
  infoDisplay.classList.add('hidden');
  nameInputsContainer.classList.remove('hidden');
}


