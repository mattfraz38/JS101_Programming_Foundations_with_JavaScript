/*
Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).
*/

/*
 * INPUT:
 *  - one number
 * OUTPUT:
 *  - one number
 * RULES:
 *  - should use the prior multiply() function
 *  - should return the square of the provided number argument
 * DATA STRUCTURES:
 *  - number
 * ALGORITHM:
 *  - create a function called 'square' which takes one number argument 'num'
 *  - call the function multiply() with 'num' as both arguments
 *    - set the return value of multiply() to a variable 'squaredNum'
 *  - return 'squaredNum'
 */

function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}

// Short Version
// const square = num => multiply(num, num);

// Functional Declaration
function square(num) {
  let squaredNum = multiply(num, num);
  return squaredNum;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true