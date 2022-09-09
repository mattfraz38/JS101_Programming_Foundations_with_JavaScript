/*
  Word to Digit

  QUESTIONS:
    - how to handle invalid or missing arguments?
  INPUT:
    - one string
  OUTPUT:
    - one string
  RULES:
    - given a sentence string argument, return the same string but with every number word
      as a digit
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - declare a constant variable 'nums' and initialize it with an array of word numbers 0-9
    - split the string argument into an array of words and initialize it to a variable called 'words'
    - loop over each word in 'words' and if the word is equal is included in 'nums' 
      transform the word to the index of the num
    - return the transformed string
*/

//   const NUMS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

// const wordToDigit = sentence => {
//   NUMS.forEach(word => {
//     sentence = sentence.replaceAll(word, NUMS.indexOf(word));
//   });
//   return sentence;
// };

const NUMS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}

const wordToDigit = sentence => {
  Object.keys(NUMS).forEach(num => {
    let re = new RegExp(`\\b${num}\\b`, 'gi');
    sentence = sentence.replace(re, NUMS[num]);
  });
  return sentence;
};

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('The weight is done.'));      // "The w8 is d1.")