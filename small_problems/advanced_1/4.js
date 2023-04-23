/*
Questions:
    - Can I assume I will always have valid input?
    - Will there be 'uneven' arrays?

  Input:
    - one array of arrays (a matrix)
  Output:
    - one array of arrays (a matrix)
  Rules:
    - given an arary of array (matrix) input, rotate the matrix (90 degrees) and return it as a new matrix
    - do not mutate the original matrix
  Data Structures:
    - array
  Algorithm:
    1. declare a function 'rotate90' that takes one argument through it's 'matrix' parameter
    2. within 'rotate90' declare a variable 'rotatedMatrix' and initialize it with an empty array
    3. next begin a loop that will continue for length of each row in 'matrix'
       - for every iteration, push an empty array to 'rotatedMatrix'
    4. after the the loop creating 'rows' of empty arrays (total equal to the number of elements in the first matrix subarray) begin another loop that will continue for the length of 'rotatedMatrix'
      - within the loop begin a nested loop which will continue for the length of the argument 'matrix'
      - on each iteration push to the front of 'rotatedMatrix' (unshift) the reference to the value of the current 'matrix[rotatedMatrix][matrixLengthIteration]' 
    5. return 'rotatedMatrix'

*/

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(matrix) {
  let rotatedMatrix = [];

  for (let row = 0; row < matrix[0].length; row++) {
    rotatedMatrix.push([]);
  }

  for (let row = 0; row < rotatedMatrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      rotatedMatrix[row].unshift(matrix[col][row]);
    }
  }

  return rotatedMatrix;
}

rotate90(matrix1);

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]