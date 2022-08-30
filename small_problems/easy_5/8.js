/*
  List of Digits

  QUESTIONS:
    - how to handle invalid or empty input?
  INPUT: 
    - one number
  OUTPUT:
    - an array of numbers
  RULES:
    - given a number argument, return an array consisting of all the digits in the argument
  DATA STRUCTURES:
    - array, string
  ALGORITHM:
    - convert the number argument to a string
    - split the string into separate chars
    - convert each char to a number
    - return the result
*/

const digitList = num => {
  return String(num).split('').map(digit => Number(digit));
};

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]