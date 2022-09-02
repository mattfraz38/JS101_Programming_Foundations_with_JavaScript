/*
  Sum of Sums

  QUESTIONS:
    - how to handle invalid arguments?
  INPUT:
    - one array of numbers
  OUTPUT:
    - one number
  RULES:
    - given an array of numbers (there will always be at least one number),
      return the sum of all numbers where the current sum is the result of summing
      all previously occuring digits ex. [1, 2, 3]: 1 + (1 + 2) + (1 + 2 + 3) = 10
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - declare a variable 'sum'
    - begin a for loop that will continue for the length of the nums argument
    - for the current iteration calculate the sum of numbers from the start to the current iteration
      and add to 'sum'
    - return sum
*/

const sumOfSums = nums => {
  let sum = 0;
  for (let i = 1; i <= nums.length; ++i) {
    sum += nums.slice(0, i).reduce((preVal, currVal) => preVal + currVal, 0);
  }
  return sum;

  // return nums
  //   .map((_, idx) => nums.slice(0, idx + 1).reduce((preVal, currVal) => preVal + currVal, 0))
  //   .reduce((preVal, currVal) => preVal + currVal, 0);
};

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35