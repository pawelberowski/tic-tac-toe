import './styles.css';

console.log("It's Working");

const startButton = document.querySelector('#start-button');
const board = document.querySelector('.board-container');
const nameInputsContainer = document.querySelector('.name-inputs-container');

if (startButton && board && nameInputsContainer) {
  startButton.addEventListener('click', function () {
    nameInputsContainer.classList.add('hidden');
    board.classList.remove('hidden');
  });
}
