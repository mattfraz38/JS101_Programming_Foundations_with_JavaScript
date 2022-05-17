/*
Multiplying Two Numbers
Create a function that takes two arguments, multiplies them together, and returns the result.
*/

function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}

// Option 2:
// let multiply = (num1, num2) => num1 * num2;

// Example:
console.log(multiply(5, 3) === 15); // logs true

// PEDAC
/*
INPUT:
  - two integers
OUTPUT:
  - one integer (the two integer arguments multiplied together)
RULES:
  - the two integer arguments are multiplied together
DATA STRUCTURES:
  - number
ALGORITHM:
  - set the first argument to a variable 'num1'
  - set the second argument to a variable 'num2'
  - set the result of multiplying num1 and num2 to a variable 'product'
  return 'product'
*/