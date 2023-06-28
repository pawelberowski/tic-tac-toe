import './styles.css';
import { createBoard } from './createBoard';
import { restartGame } from './restartGame';

const startButton = document.querySelector('#start-button');
const board = document.querySelector('.board-container');
const infoDisplay = document.querySelector('.info-display');
const circlePlayerInput = document.querySelector('#circle-input');
const crossPlayerInput = document.querySelector('#cross-input');
const nameInputsContainer = document.querySelector('.name-inputs-container');
const restartButton = document.querySelector('#restart-button');

if (startButton && board && circlePlayerInput && crossPlayerInput) {
  startButton.addEventListener('click', function () {
    if (!circlePlayerInput.value || !crossPlayerInput.value) {
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

if (restartButton) {
  restartButton.addEventListener('click', restartGame);
}

export { board, infoDisplay };
