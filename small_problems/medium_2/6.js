/*
  Sum Square - Square Sum

  QUESTIONS:
    - how to handle invalid or missing arguments?
  INPUT:
    - one number
  OUPUT:
    - one number
  RULES:
    - given a number argument, sum all numbers from 1 up to and including the argument, then
      square the sum
    - for all numbers from 1 up to and including the argument, get the square of each number and
      sum the squares
    - return the difference of the squared sum and the summed squares
    - only do this for positive numbers
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - declare a function 'sumDigits' which takes one argument 'num'
      - declare a variable 'sum' and initialize it to 0
      - for counter 'i' and initialize it to 1, while 'i' is less than or equal to 'num'
        re-assign 'sum' to include 'i'
    - declare a function 'squareAndSumDigits' which takes one argument 'num'
      - declare a variable 'summedSquares' and initialize it to 0
      - for counter 'i' and initialize it to 1, while 'i' is less than or equal to 'num'
        re-assign 'summedSquares' to include 'i'^2
    - declare a function 'sumSquareDifference' which takes one argument 'num'
    - return the value of calling 'sumDigits' passing in 'num' and squaring the result minus
      the result of calling 'squareAndSumDigits' passing in 'num
*/

// function squaredSumOfDigits(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; ++i) {
//     sum += i;
//   }
//   return sum ** 2;
// }

// function squareAndSumDigits(num) {
//   let summedSquares = 0;
//   for (let i = 1; i <= num; ++i) {
//     summedSquares += i ** 2;
//   }
//   return summedSquares
// }

function sumSquareDifference(num) {
  let sum = 0;
  let summedSquares = 0;
  for (let i = 1; i <= num; ++i) {
    sum += i;
    summedSquares += Math.pow(i, 2);
  }
  return Math.pow(sum, 2) - summedSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150