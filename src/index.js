import './styles.css';
import {
  createNameInputs,
  nameInputsContainer,
  circleNameInput,
  crossNameInput,
} from './createNameInputs';
import { createBoard } from './createBoard';

const startButton = document.querySelector('#start-button');
const board = document.querySelector('.board-container');
const infoDisplay = document.querySelector('.info-display');

if (startButton && board) {
  createNameInputs();
  startButton.addEventListener('click', function () {
    if (!circleNameInput.value || !crossNameInput.value) {
      return;
    }
    nameInputsContainer.classList.add('hidden');
    createBoard();
    board.classList.remove('hidden');
    const circlePlayerName = document.querySelector('#circle-input').value;
    infoDisplay.textContent = circlePlayerName + ' goes first';
    infoDisplay.classList.remove('hidden');
  });
}

export { board, infoDisplay };
