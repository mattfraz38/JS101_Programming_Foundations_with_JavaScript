/*
  Array Average

  QUESTIONS:
  INPUT:
    - one array of numbers
  OUTPUT:
    - one number rounded down to the integer component 
  RULES:
    - given an array of number, return the average of all the numbers rounded down to the integer component
    - the array will never be empty
    - numbers will always be positive
  DATA STRUCTURES:
     - array
  ALGORITHM:
     - sum all the numbers in the argument
     - divide the sum by the length of the array
     - remove everything after the decimal
*/

const average = nums => {
  let sum = nums.reduce((preVal, currVal) => preVal + currVal, 0);
  let average = Math.trunc((sum / nums.length));
  return average;
};

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40