/**
 * Sorted Matrix Search:
 * Given an M x N matrix in which each row and each column is sorted in ascending order,
 * write a method to find an element.
 * time: O(M log( N))
 */
export function sortedMatrixSearch(matrix: number[][], elem: number): boolean {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false; // empty matrix
  }

  if (matrix.length !== matrix[0].length) {
    throw new Error('Matrix must be square');
  }

  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === elem) {
      return true;
    }

    if (matrix[row][col] > elem) {
      col--;
    } else {
      row++;
    }
  }
  return false;
}
