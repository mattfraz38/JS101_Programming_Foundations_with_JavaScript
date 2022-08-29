/*
  Multiplicative Average

  QUESTIONS:
    - how to handle missing or invalid arguments?
  INPUT:
    - one array of integers
  OUTPUT:
    - one string (of a number rounded to three decimal places)
  RULES:
    - given an array of integers multiply all numbers together and divide by the length of the array
    - return the result as a string rounded two three decimal places
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - multiply all values of the array together then divide by the length and save to a variable 'multAverage'
    - round 'multAverage' to three decimal places
    - return as a string
*/

const multiplicativeAverage = arr => {
  let multAverage = arr.reduce((preVal, currVal) => preVal * currVal, 1);
  multAverage = (multAverage / arr.length).toFixed(3);
  return multAverage;
};

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"