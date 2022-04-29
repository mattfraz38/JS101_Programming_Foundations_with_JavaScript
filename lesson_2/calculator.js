const rlSync = require('readline-sync');

// Prompt function to show distinctive separations in output
function prompt(message) {
  console.log(`=> ${message}`);
}

// Validate number input
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

// Ask the user for the first number.
prompt("What's the first number?");
let num1 = rlSync.question();

while (invalidNumber(num1)) {
  prompt("Error! Input must be a number.");
  num1 = rlSync.question();
}

// Ask the user for the second number.
prompt("What's the second number?");
let num2 = rlSync.question();

while (invalidNumber(num2)) {
  prompt("Error! Input must be a number.");
  num2 = rlSync.question();
}

// Ask the user for an operation to perform.
prompt('What operation would you liek to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = rlSync.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Error!: Must choose 1, 2, 3, or 4');
  operation = rlSync.question();
}

// Perform the operation on the two numbers.
let result;
switch (operation) {
  case '1':
    result = Number(num1) + Number(num2);
    break;
  case '2':
    result = Number(num1) - Number(num2);
    break;
  case '3':
    result = Number(num1) * Number(num2);
    break;
  case '4':
    result = Number(num1) / Number(num2);
    break;
}

// Print the  result to the terminal.
console.log(`You typed ${num1} and ${num2}`);
console.log(`The result is: ${result}`);