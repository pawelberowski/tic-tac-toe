let currentShape = 'circle';
export function fillCell(event) {
  const cellContent = document.createElement('div');
  cellContent.classList.add(currentShape);
  event.target.append(cellContent);
  if (currentShape === 'circle') {
    currentShape = 'cross';
  } else {
    currentShape = 'circle';
  }
  event.target.removeEventListener('click', fillCell);
}