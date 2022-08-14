/*
  Letter Swap

  QUESTIONS:
  INPUT:
    - one string (a sentence)
  OUTPUT:
    - one string (the same sentence with the first and last letters of each word swapped - maintain casing)
  RULES:
    - Given a string argument, write a function that swaps the first and last letters of every word in the string
    - A word is any set of characters separated by a space
    - Every word will contain at least one character
    - The string arguemnt will contain at least one word
    - The string argument contains only words and spaces
    - There are not leading, trailing, or repeated spaces
    - There are both capital and lowercase characters
  DATA STRUCTURES:
    - an array
  ALGORITHM:
    - split the string argument into an array of words
    - iterate over each word (returning a new array)
      - declare a variable equal to the current iteration word with the first and last chars swapped
      - return the variable
    - join the new array of words together with a space and return the result
*/

const swap = sentence => {
  let words = sentence.split(' ');
  let newWords = words.map(word => {
    return swapFirstAndLast(word);
  });

  return newWords.join(' ');
};

const swapFirstAndLast = word => {
  let chars = word.split('');
  let firstChar = chars[0];
  let lastChar = chars[word.length - 1];
  let newWord = '';

  chars.forEach((char, idx) => {
    if (idx === 0) {
      newWord += lastChar;
    } else if (idx === (word.length - 1)) {
      newWord += firstChar;
    } else {
      newWord += char;
    }
  });

  return newWord;
};

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"