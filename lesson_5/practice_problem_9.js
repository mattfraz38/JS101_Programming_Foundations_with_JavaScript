/*
Practice Problem 9
Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

/*
  INPUT:
    - one array of 3 sub-arrays
  OUTPUT:
    - one array of 3 sub-arrays (new array)
  RULES:
    - the values in the sub-arrays should be sorted alphabetically or numerically depending on the value
    - the result should be a new array
  DATA STRUCTURES:
    - multi-dimentional array
  ALGORITHM:
    - create a new array called 'sortedArr'
    - iterate over each sub-array in 'arr'
    - if the typeof the element is a letter sort alphabetically else sort numerically and assign the resulting array to a new array called 'subArrayCopy'
    - push 'subArrayCopy' to 'sortedArr'
*/

let sortedArray = [];

arr.forEach(subArray => {
  let subArrayCopy = subArray.slice();

  if (typeof subArrayCopy[0] === 'number') {
    subArrayCopy.sort((a, b) => a - b);
    sortedArray.push(subArrayCopy);
  } else {
    subArrayCopy.sort();
    sortedArray.push(subArrayCopy);
  }
});

console.log(sortedArray);
console.log(arr);

// Optional soution 2:
// arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     // we have an array of strings
//     return subArr.slice().sort();
//   } else {
//     // we have an array of numbers
//     return subArr.slice().sort((a, b) => a - b);
//   }
// });