/*
  Sum Of Digits

  QUESTIONS:
    - how to handle invalid or missing arguments?
  INPUT:
    - one number
  OUTPUT:
    - one number
  RULES:
    - given a number argument, return the numerical value of all the digits summed
    - do not use for, while, do...while loops
    - use a series of method calls
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the number into an array of digits
    - call reduce on the array adding each digit
    - return the result
*/

const sum = num => {
  return String(num)
    .split('')
    .reduce((preVal, currVal) => preVal + Number(currVal), 0);
};

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45