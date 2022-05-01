const rlSync = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

// Prompt function to show distinctive separations in output
function prompt(message) {
  console.log(`=> ${message}`);
}

// Validate number input
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

let newCalculation = true;

prompt(MESSAGES['welcome']);

// Do the calculations then ask user if want to do another
do {
  // Ask the user for the first number.
  prompt(MESSAGES['firstNum']);
  let num1 = rlSync.question();

  while (invalidNumber(num1)) {
    prompt(MESSAGES['invalidNum']);
    num1 = rlSync.question();
  }

  // Ask the user for the second number.
  prompt(MESSAGES['secondNum']);
  let num2 = rlSync.question();

  while (invalidNumber(num2)) {
    prompt(MESSAGES['invalidNum']);
    num2 = rlSync.question();
  }

  // Ask the user for an operation to perform.
  prompt(MESSAGES['operation']);
  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['invalidOperation']);
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
  prompt(`You typed ${num1} and ${num2}`);
  prompt(`The result is: ${result}`);

  prompt(MESSAGES['newCalculation']);
  let response = rlSync.question();

  if (response[0].toLowerCase() === 'y') {
    console.log('-'.repeat(50));
    continue;
  } else {
    prompt(MESSAGES['goodbye']);
    newCalculation = false;
  }

} while (newCalculation);