// Try coding a solution that doubles the numbers that have odd indices:

let myNumbers = [1, 4, 3, 7, 2, 6];
// doubleOddNumbers(myNumbers);  // => [2, 4, 6, 14, 2, 6]


/*
INPUT:
  - one array of numbers
OUTPUT:
  - one array of numbers
RULES:
  - Explicit:
    - the return value has the odd indexed numbers doubled
  - Implicit:
    - return value is an array
    - a new array is returned (do not mutate elements in place)
DATA STRUCTURES:
  - array
ALGORITHM:
  - set a new empty array variable called 'result'
  - loop over the numbers array
    - if the current iteration number is odd double the element value and puts to 'result'
    - if the current iteration number is even push the value as is to the 'result' array
  - return 'result'
*/

function doubleOddNumbers(numsArr) {
  let result = [];

  for (let i = 0; i < numsArr.length; ++i) {
    if (i % 2 === 0) {
      result.push(numsArr[i]);
    } else {
      result.push(numsArr[i] * 2);
    }
  }

  return result;
}

// only odd indexed element numbers
console.log(doubleOddNumbers(myNumbers));
// not mutated
console.log(myNumbers);      