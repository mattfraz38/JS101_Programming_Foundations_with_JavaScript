/*
  Double Char (Part 2)

  QUESTIONS:
  INPUT:
    - one string
  OUTPUT:
    - one string
  RULES:
    - given a string argument, write a function that doubles every consonant character
      in the string argument and returns the value as a new string
    - the function should not double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the string argument into chars
    - iterate over each char
      - if the char is between 'a' and 'z', 'A' and 'Z' and not a vowel,
        return the char times two in a new string
*/

const doubleConsonants = str => {
  const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
    'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  const chars = str.split('');

  return chars.map(char => {
    if (CONSONANTS.includes(char.toLowerCase())) {
      return char + char;
    }
    return char;
  }).join('');
};

console.log(doubleConsonants('StriIng'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""