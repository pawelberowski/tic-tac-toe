// Checks if all cells are occupied
export function isDraw(cells) {
  for (let i = 0; i < 9; i++) {
    const cell = cells[i];
    if (!cell.firstChild) {
      return false;
    }
  }
  return true;
}
