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

// Alyssa was asked to write an implementation of a rolling buffer.
// You can add and remove elements from a rolling buffer. However,
// once the buffer becomes full, any new elements will displace the
// oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to
// the buffer. In presenting the code to her team leader, she said
// "Take your pick. Do you prefer push() or concat() for modifying
// the buffer?".

// Is there a difference between these implementations, other than
// the method she used to add an element to the buffer?

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// The first implementation will simply replace add/shift
// elements to the bubber in place not creating a new array.
// However the second implementation using concat() will merge
// the newElement into buffer creating a new object in the process

// Yes, there is a difference. While both methods have the same
// return value, the first implementation mutates the argument
// represented by buffer. That is, the caller will see that the
// array is different when the function returns. The rollingBuffer2
// implementation doesn't mutate the argument specified by the value
// of buffer.

// What will the following two lines of code output?

console.log(0.3 + 0.6);           // 0.9 <-- INCORRECT
console.log(0.3 + 0.6 === 0.9);   // false

// JavaScript uses floating point numbers for all numeric
// operations. Most floating point representations used on
// computers lack a certain amount of precision, and that
// can yield unexpected results like these.

// In this case, the output was:
// 0.8999999999999999

// What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);   // false
// Bonus:
// How can you reliably test if a value is NaN?
// Number.isNaN(nanArray);

// The output is false. NaN -- not a number -- is a special
// numeric value that indicates that an operation that was
// intended to return a number failed. JavaScript doesn't
// let you use == and === to determine whether a value is NaN.

// What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);    // 34