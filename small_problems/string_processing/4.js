/*
  Capitalize Words

  QUESTIONS:
    - how to handle empty or invalid arguments?
  INPUT:
    - one string
  OUTPUT:
    - one string
  RULES:
    - given a string argument, return a new string with the first character
      of each word capitalized
    - words are separated by spaces
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the string into an array of words and assign to a variable 'words'
    - loop over each word in 'words' and return the value of each word with the first 
      character capitalized concatonated to the remaining string
    - re-join the newly capitalize words with a space
*/

const wordCap = str => {
  return str.split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'