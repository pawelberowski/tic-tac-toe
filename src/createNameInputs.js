const nameInputsContainer = document.querySelector('.name-inputs-container');
const circleNameInput = document.createElement('input');
const crossNameInput = document.createElement('input');
function createNameInputs() {
  circleNameInput.id = 'circle-input';
  circleNameInput.placeholder = 'Circle Player...';

  crossNameInput.id = 'cross-input';
  crossNameInput.placeholder = 'Cross Player...';

  nameInputsContainer.prepend(circleNameInput, crossNameInput);
}
export {
  createNameInputs,
  nameInputsContainer,
  circleNameInput,
  crossNameInput,
};
