/*
Practice Problem 12
Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.
*/

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

/*
  Questions:
    1. Do I return an empty array if there are not multiples of 3?

  INPUT:
    - one multi-dimensional array
  OUTPUT:
    - one multi-dimensional array
  RULES:
    - Explicit:
      - return a new array
      - the new array should only contain (nested) elements that are multiples of 3
      - use various methods including filter
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - map over each element in 'subArr' and assign it a variable 'multiplesOfThree'
    - for each 'arr' in the map filter the results and return only those that are multiples of 3
*/

let multiplesOfThree = arr.map(subArr => {
  return subArr.filter(num => num % 3 === 0);
});

console.log(arr);
console.log(multiplesOfThree);