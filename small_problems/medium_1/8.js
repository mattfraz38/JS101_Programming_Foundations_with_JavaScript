/*
  Fibonacci Numbers (Memoization)

  QUESTIONS:
  INPUT:
  OUTPUT;
  RULES:
    - use memoization to make the recursive Fibonacci function more efficient
  DATA STRUCTURES:
  ALGORITHM:
*/

let memo = {};
const fibonacci = num => {
  if (num <= 2) {
    return 1;
  } else if (memo[num]) {
    return memo[num];
  } else {
    memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return memo[num];
  }
};

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(150));      // 6765
