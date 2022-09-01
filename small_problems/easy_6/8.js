/*
  Sequence Count

  QUESTIONS:
  INPUT:
    - two arguments (two numbers)
  OUTPUT:
    - one array of numbers
  RULES:
    - given two arguments, the first being a count, the second being a starting value 
      of a sequence that increases or decreases by the same amount, return an array
      of a series of numbers
    - the count argument will always be a number greater or equal to zero
    - if the count is 0 return an empty array
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - if the first argument is 0 retun an empty array
    - declare a variable 'nums' and initialize it with an empty array
    - begin a for loop with a counter variable 'i'. Continue the loop while the 
        'i' is less than or equal to the first function argument. For each 
        iteration push the iteration value to 'num'
    - return nums
*/

const sequence = (count, start) => {
  const nums = [];
  for (let i = 1; i <= count; ++i) {
    nums.push(i * start);
  }
  return nums;
};

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []