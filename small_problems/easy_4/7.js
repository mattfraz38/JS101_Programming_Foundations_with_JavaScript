/*
  Running Totals

    QUESTIONS:
      - How to handle invalid inputs?

    INPUT:
      - one array
    OUTPUT:
      - one array
    RULES:
      - given an array argument, write a function that takes the array, and returns
      a new array consisting of the running total of all the values
      - E.x. array argument = [1, 2, 3 ] will return [1, 3, 6]
    DATA STRUCTURES:
      - array
    ALGORITHM:
      - begin iterating through the argument array
      - set a variable 'currentTotal' equal to the value of the first element of the argument array
      - set a new variable 'result' equal to an empty array
      - if the current iteration is the first index, push the current iteration element to the 'result'array
      - else set the 'currentTotal' equal to 'currentTotal' plus the current iteration value and push to 'result'
      - after iterating the argument array, return the result
*/

const runningTotal = arr => {
  let currentTotal = 0;
  let result = arr.map((el) => {
    currentTotal += el;
    return currentTotal;
  });

  return result;
};

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []