/*
  Transpose 3x3 Matrix

  QUESTIONS:
    1. Should I mutate the origial matrix or return a new matrix?
      - based on the example: return a new matrix
    2. Is the matrix going to have the same number of elements in each sub-array?
    3. Can I expect a valid matrix argument every time?

  INPUT:
    - one matrix represented by a 2D array of numbers
  OUTPUS:
    - a matrix where the rows and coloms are switched (see examples)
  RULES:
    - Given matrix (array of array) of numbers input, return a new matrix where the rows and columns are switched
    - Cannot use external libraries
    - Cannot mutate the original matrix
  DATA STRUCTURES:
    - array
  ALGORITHM:
    1. Define a function called 'transpose' that takes one argument through it's 'matrix' parameter
    2. Within the function define a 'transposedMatrix' varible and initialize it with an empty array
    3. On line 3 declare an 'index' variable and initialize it with the value of 1
    4. Next begin a for loop that will continue for the length of matrix (how many sub-arrays there are)
    5. Inside the loop declare a variable 'transposedSubArray' and initialize it with an empty array
    4. Inside the outer for loop begin an innner loop that will continue for the length of each sub-array in the matrix
    5. Within the inner loop push the value located at 'index' to 'transposedSubArray' then break out of the current iteration and begin the next
    6. After the inner loop, increment 'index' by 1
    7. Outside the outer loop return 'transposedMatrix'
*/

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  let transposedMatrix = [];
  let transposedSubArray = [];
  let index = 0;

  while (true) {
    for (let i = 0; i < matrix.length; i++) {
      transposedSubArray.push(matrix[i][index]);
    }

    if (transposedSubArray.length === matrix.length) {
      transposedMatrix.push(transposedSubArray);
      transposedSubArray = [];
    }

    if (transposedMatrix.length === matrix.length) break;
    index += 1;
  }

  return transposedMatrix;
}

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

/*
  LS Solution

  function transpose(matrix) {
    let transposed = [];

    for (let rowIdx = 0; rowIdx < 3; rowIdx += 1) {
      transposed.push([]);
    }

    for (let rowIdx = 0; rowIdx < 3; rowIdx += 1) {
      for (let colIdx = 0; colIdx < 3; colIdx += 1) {
        transposed[colIdx].push(matrix[rowIdx][colIdx]);
      }
    }

    return transposed;
  }
*/