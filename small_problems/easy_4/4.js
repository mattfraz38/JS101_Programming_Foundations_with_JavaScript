/*
  Palindromic Strings (Part 1)

  QUESTIONS:
     - What is a palindrome? (a word that reads the same forwards as it does backwards)
     - How to handle number values?
     - How to handle empty strings or empty arguments?
  INPUT:
    - One string
  OUTPUT:
    - one boolean
  RULES:
    - check if a string reads the same forward as it does backwards (it's a palindrome)
    - the check should be case sensitive
    - all characters matter (im the case of a sentence)
  DATA STRUCTURES:
    - an array
  ALGORITHM:
    - assign the reverse value of the input string to a variable
    - if the reverse value is equal to the value of the string argument return true, else false
*/

const isPalindrome = str => {
  let reversedStr = str.split('').reverse().join('');

  return reversedStr === str;
};

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true