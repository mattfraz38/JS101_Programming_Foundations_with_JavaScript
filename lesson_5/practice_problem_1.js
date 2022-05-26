/*
 Practice Problem 1
 How would you order the following array of number strings by descending numeric value (largest number value to smallest)?
 */

let arr = ['10', '11', '9', '7', '8'];

/*
  INPUT:
    - one array of string value numbers
  OUTPUT:
    - one array of string value numbers
  RULES:
    - sort the array in decending numeric value
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - create a shallow copy of arr called 'sortedArr'
    - call the sort method on 'sortedArr' passing in a callback with two arguments 'a' and 'b'
    - return b - a 
*/

// ** sort checks if the return value is -1, 1, or 0
//    -1 if a < b
//    1 if a > b
//    0 if they are the same

let sortedArr = arr.slice();

// This uses implicit coercion of a and b into a Number
// sortedArr.sort((a, b) => b - a);

// For clarity and prevention of bugs explecit coercion is best
sortedArr.sort((a, b) => Number(b) - Number(a));

console.log(sortedArr);