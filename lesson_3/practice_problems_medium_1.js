// Let's do some "ASCII Art": a stone-age form of nerd artwork
// from back in the days before computers had video screens.

// For this practice problem, write a program that outputs
// The Flintstones Rock! 10 times, with each line indented
// 1 space to the right of the line above it. The output should
// start out like this:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    ...

const TEXT = 'The Flinstones Rock!';

for (let i = 0; i < 10; ++i) {
  console.log(`${' '.repeat(i)}${TEXT}`);
}

// Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";
// Return a new string that swaps the case of all of the letters:

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

// split the string into an array of chars
let arr = munstersDescription.split('');
let len = arr.length;
let swappedCaseDescription = '';

// iterate over the array
for (let i = 0; i < len; ++i) {
  // if current arr val is capital make lower and add to new string
  // if current arr val is lower make capital and add to new string
  if (arr[i] === arr[i].toUpperCase()) {
    swappedCaseDescription = swappedCaseDescription + arr[i].toLowerCase();
  } else {
    swappedCaseDescription = swappedCaseDescription + arr[i].toUpperCase();
  }
}

console.log(munstersDescription);
console.log(swappedCaseDescription);

// Option 2: 
// let option2 = munstersDescription.split('').map(char => {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join('');

// console.log(option2);

// Alan wrote the following function, which was intended to return
// all of the factors of number:

// function factors(number) {
//   let divisor = number;
//   let factors = [];
//   do {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
//   } while (divisor !== 0);
//   return factors;
// }
// Alyssa noticed that this code would fail when the input is
// 0 or a negative number, and asked Alan to change the loop.
// How can he make this work without using a do/while loop?
// Note that we're not looking to find the factors for 0 or
// negative numbers, but we want to handle it gracefully instead
// of raising an exception or going into an infinite loop.

// Bonus: What is the purpose of number % divisor === 0 in that code?

// The purpose of number % divisor === 0 is to check if there 
// is a remainder after division or not. If there is no remainder
// then the divisor is a factor of the the number
function factors(number) {
  let factors = [];

  for (let i = number; i > 0; --i) {
    if (number % i === 0) {
      factors.unshift(i);
    }
  }

  return factors;
}

console.log(factors(15));

// Option 2:
// while (divisor > 0) {
//   if (number % divisor === 0) {
//     factors.push(number / divisor);
//   }
//   divisor -= 1;
// }

