/*
  Reverse It (Part 1)

  QUESTION:
    - how to handle invalid arguments?
  INPUT:
    - one string
  OUTPUT:
    - one string
  RULES:
     - given a string argument, return the string in reverse order
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the string into an array of words
    - reverse the array, join at a space, and return the result
*/

const reverseSentence = sent => {
  return sent.split(' ').reverse().join(' ');
};

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"