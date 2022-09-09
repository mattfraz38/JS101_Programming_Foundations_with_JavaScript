/*
  Fibonacci Numbers (Procedural)

  QUESTIONS:
    - how to handle invalid or missing arguments?
  INPUT: 
    - one number
  OUTPUT:
    - one number
  RULES:
    - calculate the nth Fibonacci number using procedural programming
    - mathmatically the Fibonacci sequence can be represented as: F(n) = F(n - 1) + F(n - 2) where n > 2
  DATA STRUCTURES:
    - numbers
  ALGORITHM:
    - declare a variable 'previousTwo' and initialize it with an array of two numbers [1, 1]
    - beign a for loop with an iterator 'i' initialized with the value of 3 that will increment
      once each iteration and will continue while 'i' is less than or equal to the argument num
    - for each iteration re-assign the variable 'previousTwo' with an array with the reference to the 
      values of 'previousTwo' element index 1, 'previousTwo' element index 0 plus 'previousTwo' 
      element index 1
      - then  outside the for loop return the value of 'previousTwo' element index 1

*/

const fibonacci = num => {
  let previousTwo = [1, 1];
  for (let i = 3; i <= num; ++i) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }
  return previousTwo[1];
};

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050