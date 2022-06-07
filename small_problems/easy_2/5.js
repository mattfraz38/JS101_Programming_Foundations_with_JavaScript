const rlSync = require('readline-sync');

/*
Arithmetic Integer
Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
*/

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function calculation(n1, n2, operation) {
  switch (operation) {
    case '+':
      return n1 + n1;
      break;
    case '-':
      return n1 - n1;
      break;
    case '*':
      return n1 * n1;
      break;
    case '/':
      return n1 / n1;
      break;
    case '%':
      return n1 % n1;
      break;
    case '**':
      return n1 ** n1;
      break;
  }

  return null
}

prompt('Enter the first number:');
let num1 = Number(rlSync.question());

prompt('Enter the second number:');
let num2 = Number(rlSync.question());

let operators = ['+', '-', '*', '/', '%', '**'];

operators.forEach(operation => {
  prompt(`${num1} ${operation} ${num2} = ${calculation(num1, num2, operation)}`);
});

/*
Launch School Solution:

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);
*/