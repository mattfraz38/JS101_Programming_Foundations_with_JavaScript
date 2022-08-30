/*
  Double Char (Part 1)

  QUESTIONS:
  INPUT:
    - one string
  OUTPUT:
    - one string
  RULES:
    - given a string argument, write a function that doubles every character
      in the string argument and returns the value as a new string
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the string argument into chars
    - iterate over each char and return the char times two in a new string
    - return the result
*/

const repeater = str => {
  return str.split('').map(char => char + char).join('');
};

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""