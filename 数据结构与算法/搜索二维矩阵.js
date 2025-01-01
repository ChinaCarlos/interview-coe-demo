function searchMatrix(matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let i = 0;
  let j = n - 1;
  while (i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}
