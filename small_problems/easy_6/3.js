/*
  Reverse Number

  QUESTIONS:
  INPUT:
    - one integer
  OUTPUT:
    - one number
  RULES:
    - given a number argument, return the number reversed
    - the number argument will be positive
    - any leading zeros should be removed from the reversed number
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - converse the number arg to a string, split the string into digits 
    - reverse and join the digits and return the result
*/

const reverseNumber = num => {
  return Number(String(num).split('').reverse().join(''));
};

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1