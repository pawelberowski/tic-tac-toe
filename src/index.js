import './styles.css';
import {createNameInputs, nameInputsContainer, circleNameInput, crossNameInput} from './create_name_inputs';

const startButton = document.querySelector('#start-button');
const board = document.querySelector('.board-container');

if (startButton && board) {
  createNameInputs();
  startButton.addEventListener('click', function () {
    if (!circleNameInput.value || !crossNameInput.value) {
      return;
    }
    nameInputsContainer.classList.add('hidden');
    board.classList.remove('hidden');
  });
}
