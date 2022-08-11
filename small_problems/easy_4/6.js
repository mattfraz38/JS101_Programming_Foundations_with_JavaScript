/*
  Palindromic Numbers

  QUESTIONS:
  `- How to handle empty or invalid inputs?

  INPUT:
    - One number
  OUTPUT:
    - A boolean
  RULES:
    - Given a number argument passed the the function determine if the number is a palindromic number
      (it reads the same forward as backwards)
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - convert the argument to a string
    - split the string into an individual characters array
    - reverse the array of strings, join at an empty character and convert back to a number
    - if the reversed number is equal to the original argument return true, else false
*/

const isPalindromicNumber = num => {
  let reversedNum = Number(String(num).split('').reverse().join(''));
  return reversedNum === num;
};


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true