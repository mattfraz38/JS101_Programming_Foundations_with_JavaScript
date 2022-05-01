const rlSync = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

// Set JSON messages with a language key
function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

// Prompt function to show distinctive separations in output
function prompt(message) {
  console.log(`=> ${message}`);
}

// Validate number input
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Prompt user for a language
prompt('1) English 2) 日本語: ');
let lang = rlSync.question();

// Continue asking for input until 1 or 2 selected
while (!['1', '2'].includes(lang)) {
  prompt(messages('invalidNum', LANGUAGE));
  lang = rlSync.question();
}

// Set language
if (lang === '2') {
  lang = 'ja';
} else {
  lang = 'en';
}

prompt(messages('welcome', lang));

let newCalculation = true;

// Do the calculations then ask user if want to do another
do {
  // Ask the user for the first number.
  prompt(messages('firstNum', lang));
  let num1 = rlSync.question();

  while (invalidNumber(num1)) {
    prompt(messages('invalidNum', lang));
    num1 = rlSync.question();
  }

  // Ask the user for the second number.
  prompt(messages('secondNum', lang));
  let num2 = rlSync.question();

  while (invalidNumber(num2)) {
    prompt(messages('invalidNum', lang));
    num2 = rlSync.question();
  }

  // Ask the user for an operation to perform.
  prompt(messages('operation', lang));
  let operation = rlSync.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('invalidOperation', lang));
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

  prompt(messages('newCalculation', lang));
  let response = rlSync.question();

  if (response[0].toLowerCase() === 'y') {
    console.log('-'.repeat(50));
    continue;
  } else {
    prompt(messages('goodbye', lang));
    newCalculation = false;
  }

} while (newCalculation);