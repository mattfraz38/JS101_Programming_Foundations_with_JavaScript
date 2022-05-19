let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]

/*
INPUT:
  - one array of numbers
OUTPUT:
  - one array of numbers
RULES:
  - Explicit:
    - mutate the numbers in place (do not return a new array)
    - the numbers of the array should be doubled
DATA STRUCTURES:
  - array
ALGORITHM:
  - loop over the numbers array
  - set a variable 'currentNum' equal to the current iteration element
  - reassign the current iteration element to the number times 2
  return the numbers array
*/

function doubleNumbers(numArray) {
  for (let i = 0; i < numArray.length; ++i) {
    let currentNum = numArray[i];
    numArray[i] = currentNum * 2;
  }

  return numArray;
}

console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);
