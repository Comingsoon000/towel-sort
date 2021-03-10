
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  return matrix.reduce((acc, row, index) => ((index % 2 === 1)
    ? [...acc, ...row.reverse()] : [...acc, ...row]), []);
}
