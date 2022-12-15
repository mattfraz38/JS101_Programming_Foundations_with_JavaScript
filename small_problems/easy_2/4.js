function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}

// Functional expression
// const square = num => multiply(num, num);

// Functional Declaration
function square(num) {
  let squaredNum = multiply(num, num);
  return squaredNum;
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

/*
  On line 10 a function 'square' is declared that takes one number argument through it's 'num' parameter.
  Within the function block, on line 11, a local variable 'squaredNum' is declared and initialized with the 
  resulting value of calling the 'multiply' function with 'num' passed in as the two arguments.
  On line 12 the value of 'squaredNum' is returned.
*/