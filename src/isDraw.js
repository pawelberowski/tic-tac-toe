export function isDraw(cells) {
  const indexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return indexArray.every(function (number) {
    return cells[number].firstChild;
  });
}
