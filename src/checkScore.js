import { infoDisplay, restartButton } from './index';
import { areAllCellsOccupied } from './areAllCellsOccupied';

export function checkScore() {
  const allCells = document.querySelectorAll('.cell');
  const circlePlayerName = document.querySelector('#circle-input').value;
  const crossPlayerName = document.querySelector('#cross-input').value;
  const winningCombos = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
  if (areAllCellsOccupied(allCells)) {
    infoDisplay.textContent = 'Draw!';
    restartButton.classList.remove('hidden');
  }
  winningCombos.forEach(function (array) {
    const circleWins = array.every(function (number) {
      return allCells[number].firstChild?.classList.contains('circle');
    });
    const crossWins = array.every(function (number) {
      return allCells[number].firstChild?.classList.contains('cross');
    });
    if (circleWins) {
      infoDisplay.textContent = circlePlayerName + ' Wins!';
      allCells.forEach(function (cell) {
        cell.replaceWith(cell.cloneNode(true));
      });
      restartButton.classList.remove('hidden');
      return;
    }
    if (crossWins) {
      infoDisplay.textContent = crossPlayerName + ' Wins!';
      allCells.forEach(function (cell) {
        cell.replaceWith(cell.cloneNode(true));
      });
      restartButton.classList.remove('hidden');
      return;
    }
  });
}
