function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}

// Functional expression
// let multiply = (num1, num2) => num1 * num2;


console.log(multiply(5, 3) === 15); // logs true

/*
  On line 1 a function 'multiply' is declared that takes two arguments through it's 'num1' and 'num2' parameters.
  Within the function block, on line 2 a local variable 'product' is declared and initialized with the result of
  multiplying 'num1' by 'num2'. Lastly on line 3 the value of 'product' is returned.
*/