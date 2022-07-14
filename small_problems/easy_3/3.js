/*
Stringy Strings
Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.
*/

/*

QUESTIONS:  
 - Will arguments always be positive integers?

INPUT:
  - one positive integer
OUTPUT:
  - one string
RULES:
  - return a string with a length equal to the passed argument (number) value
  - the string should be a sequence of alternating 1's and 0's always starting with 1
DATA STRUCTURES:
  - string
ALGORITHM:
  - define a function called 'stringy` which takes one 'num' argument
  - inside 'stringy set a local variable 'onesAndZeros' equal to an empty string, '';
  - execute a while loop that will contiue to loop forever until the argument 'num' is > 0
    - inside the while block begin an if statement - if the last character of 'onesAndZeros' is '0' add a '1' onto 'onesAndZeros' else add a '0'
    - minus one from 'num'
  - outside of the while loop return 'onesAndZeros'
*/

function stringy(num) {
  let onesAndZeros = '';

  while (num > 0) {
    if (onesAndZeros[onesAndZeros.length - 1] === '1') {
      onesAndZeros += '0';
    } else {
      onesAndZeros += '1';
    }

    num -= 1;
  }

  return onesAndZeros;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

/* 
LS Solution:

function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
};
*/