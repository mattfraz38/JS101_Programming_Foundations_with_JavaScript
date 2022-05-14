// Multiples of 3 and 5
// Write a function that computes the sum of all numbers between 1
// and some other number, inclusive, that are multiples of 3 or 5.
// For instance, if the supplied number is 20, the result should be
// 98(3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater
// than 1.

/*
- INPUTS:
  - one positive integer greater than 1

- OUTPUTS:
  - a number value which is the sum of all numbers between 1 and the input number that are multiples 3 and 5

- RULES:
  - input needs to be a number
  - result should be the sum of all multiples
  - assume that the number passed in is an integer greater than 1

- DATA STRUCTURES:
  - number

-ALGORITHM:
  - define a result value and set to 0
  - loop through all values from 1 to and including the input number
    - if the current iteration value is a multiple of 3 or 5 add the value to the result variable
  - return result
  */

function multisum(num) {
  let result = 0;

  for (let i = 1; i <= num; ++i) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

// Examples:
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

/*
Consider writing an additional function to extract thedivisor check

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

This can add readability to the code
*/