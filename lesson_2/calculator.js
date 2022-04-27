const rlSync = require('readline-sync');

console.log('Welcome to Calculator!');

// Ask the user for the first number.
console.log("What's the first number?");

let num1 = rlSync.question();

// Ask the user for the second number.
console.log("What's the second number?");

let num2 = rlSync.question();

// Ask the user for an operation to perform.
console.log('What operation would you liek to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');

let operation = rlSync.question();

// Perform the operation on the two numbers.
let result;
if (operation === '1') {
  result = Number(num1) + Number(num2);
} else if (operation === '2') {
  result = Number(num1) - Number(num2);
} else if (operation === '3') {
  result = Number(num1) * Number(num2);
} else if (operation === '4') {
  result = Number(num1) / Number(num2);
}
// Print the  result to the terminal.
console.log(`You typed ${num1} and ${num2} both of which are type ${typeof num1}`);

console.log(`The result is: ${result}`);