/*
  Uppercase Check

  QUESTIONS:
    - how to handle invalic arguments
  INPUT:
    - one string
  OUTPUT:
    - one boolean
  RULES:
    - given a string argument, return true or false depending if all alphabetic characters
      are capitalized or not
    - ignore all non-alphabetic characters
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the string into an array of characters
    - filter out non-alphabetic characters
    - join the string back together
    - compare and return the value if the string is equal to 
      String.prototype.toUpperCase() called on the string
*/

const isUppercase = str => {
  return str === str.toUpperCase();
};

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true