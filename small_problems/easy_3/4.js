// Fibonacci Number Location By Length

/*
QUESTIONS: 
  - What am I doing? 
    - Continuously loop through the Fibonacci sequence until the LENGTH of the sequence is equal to or greater than the LENGTH the function argument
    - at which time return the length of the sequence

INPUT:
  - one bigInt 
OUTPUT:
  - one bigInt
RULES:
  - can assume all arguments will be an integer greater than or equal to 2
DATA STRUCTURES:
  - bigInt
ALGORITHM:
  - declare a function called 'findFibonacciIndexByLength' which takes one argument 'length'
  - inside 'findFibonacciIndexByLength' define 4 local variables 'first', 'second', 'count', and 'fibonacci'
    - initialize these values with 1n, 1n, and 2n respectively ('fibonacci' is not initialized with a value)
  - begin a do...while loop
    - inside the loop set 'fibonacci' equal to the result of 'first' + 'second'
    - add 1n to 'count'
    - reassign 'first' to the value of 'second'
    - reassign 'secont' to the value of 'fibonacci'
    - continue doing this while 'fibonacci' string value's LENGTH is less than 'length' (the function argument LENGTH as a string)
  - return 'count'
*/

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}

console.log(findFibonacciIndexByLength(2n));// === 7n;    // 1 1 2 3 5 8 13
console.log(74n);