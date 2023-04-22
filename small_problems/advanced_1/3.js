/*
  Modify your transpose function from the previous exercise so that it 
  works with any MxN matrix with at least one row and one column.
*/

function transpose(matrix) {
  let transposedMatrix = [];
  let transposedSubArray = [];
  let index = 0;

  while (true) {
    let subArrayIndex = 0;
    for (let i = 0; i < matrix.length; i++) {
      transposedSubArray.push(matrix[i][index]);

      if (transposedSubArray.length === matrix.length) {
        transposedMatrix.push(transposedSubArray);
        transposedSubArray = [];
      }
    }


    if (transposedMatrix.length === matrix[subArrayIndex].length) break;
    subArrayIndex += 1;
    index += 1;
  }

  return transposedMatrix;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

/*
  LS Solution
  
  function transpose(matrix) {
    let transposed = [];
    let newRowsCount = matrix[0].length;

    for (let rowIdx = 0; rowIdx < newRowsCount; rowIdx += 1) {
      transposed.push([]);
    }

    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx += 1) {
      for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx += 1) {
        transposed[colIdx].push(matrix[rowIdx][colIdx]);
      }
    }

    return transposed;
  }
*/