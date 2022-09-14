const rlSync = require('readline-sync');

// Calcultate sum
function sum(num) {
  const range = [];

  for (let i = 1; i < num + 1; ++i) {
    range.push(i);
  }

  let result = range.reduce((accum, cur) => {
    return accum + cur;
  }, 0);

  return result;
}

// Calcultate sum
function product(num) {
  const range = [];

  for (let i = 1; i < num + 1; ++i) {
    range.push(i);
  }

  let result = range.reduce((accum, cur) => {
    return accum * cur;
  }, 1);

  return result;
}

// Sum or Product of Consecutive Integers

// Write a program that asks the user to enter an integer greater than
// 0, then asks whether the user wants to determine the sum or the
// product of all numbers between 1 and the entered integer, inclusive.

// Examples:
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

// Ask the user for a number greater than 0
// Assumine user input is always an integer greater than 0
let userNum = Number(rlSync.question('Please enter an integer greater than 0: '));

// Ask the user to type s to calculate the sum
// of all numbers from 1 to the input integer
// OR
// Ask the user to type p to calculate the product
// of all numbers from 1 to the input integer
let calculationType = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

// Return the sum or product
if (calculationType === 's') {
  console.log(`The sum of the integers between 1 and ${userNum} is ${sum(userNum)}.`);
} else {
  console.log(`The product of the integers between 1 and ${userNum} is ${product(userNum)}.`);
}


// Option: 2
// function computeSum(targetNum) {
//   let total = 0;

//   for (let num = 1; num <= targetNum; num += 1) {
//     total += num;
//   }

//   return total;
// }

// function computeProduct(targetNum) {
//   let total = 1;

//   for (let num = 1; num <= targetNum; num += 1) {
//     total *= num;
//   }

//   return total;
// }