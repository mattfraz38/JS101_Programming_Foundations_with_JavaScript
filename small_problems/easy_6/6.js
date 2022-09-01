/*
  Counting Up

  QUESTIONS:
    - how to handle invalid or empty arguments?
  INPUT:
    - one number
  OUTPUT:
    - one array of numbers
  RULES:
    - given a number argument, return an array of all number from 1 to the 
      argument number (inclusive) in ascending order
  DATA STRUCTURES:
    - array, recursion
  ALGORITHM:
    - declare a variable 'nums' and initialize it with an empty array
    - begin a for loop from 1 to the value equal to the input
      - for each iteration add the loop index to 'nums'
    - return 'nums'
*/

const sequence = (num) => {
  const nums = [];
  for (let i = 1; i <= num; ++i) {
    nums.push(i);
  }
  return nums;
};

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]