/*
Practice Problem 15
Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.
*/

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] }
];

/*
  INPUT:
    - one array of objects
  OUTPUT:
    - one array of objects
  RULES:
    - Explicit:
      - the return array should contain only objects where all property values are even
  DATA STRUCTURES:
    - one array containing many objects
  ALGORITHM:
    - iterate over the outer 'arr'
    - assign the object values of the current iteration to a variable called 'objVals'
    - iterate over the 'objVals' array and check if all values are even, if they are then return the object
*/

// let allEvenObjects = [];

// arr.forEach(obj => {
//   let objVals = Object.values(obj).flat();
//   if (objVals.every(el => el % 2 === 0)) {
//     allEvenObjects.push(obj);
//   }
// });

// console.log(allEvenObjects);

// Optimal Solution:
let allEvenObjects = arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

console.log(allEvenObjects);
