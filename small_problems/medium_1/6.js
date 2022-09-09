/*
  Fibonacci Numbers (Recursion)

  QUESTIONS:
    - how to handle invalid or missing arugments?
  INPUT:
    - one number
  OUTPUT:
    - one number
  RULES:
    - write a function that calculates the nth Fibonacci number where n is an argument passed 
      to the function
    - use recurssion
    - mathmatically the Fibonacci sequence can be represented as: F(n) = F(n - 1) + F(n - 2) where n > 2
  DATA STRUCTURES:
    - number
  ALGORITHM:
    - write a guard clause where if 1 or 2 the function returns 1
    - else return the result of calling fibonacci(n - 1) + fibonacci(n - 2)
*/

const fibonacci = num => {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765