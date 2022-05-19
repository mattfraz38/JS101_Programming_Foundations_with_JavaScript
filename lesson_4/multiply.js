/*
Continuing with the idea of building generic functions, let's replace our doubleNumbers function with a multiply function that can multiply the elements of the array by an arbitrary number. For instance:
*/

let myNumbers = [1, 4, 3, 7, 2, 6];
// multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]

/*
Try coding a function that lets you multiply every array item by a specified value. As with doubleNumbers, don't mutate the array, but return a new array instead.

INPUT:
  - two input values
  - one array of numbers, one number
OUTPUT:
  - one array of numbers
RULES:
  - Explicit:
    - return an array of numbers where each value from the input array is multiplies by the second argument value
    - do not mutate the input array (return a new array)
DATA STRUCTURES:
  - array
ALGORITHM:
  - set an empty array variable called 'result'
  - loop over each element of the input array 
    - multiply each element by the second argument number value and push to 'result'
  - return 'result'
*/

function multiply(numsArr, multiplier) {
  let result = [];

  for (let i = 0; i < numsArr.length; ++i) {
    result.push(numsArr[i] * multiplier);
  }

  return result;
}

console.log(multiply(myNumbers, 3));
console.log(myNumbers);