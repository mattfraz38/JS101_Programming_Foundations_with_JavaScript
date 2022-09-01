/*
  Reverse It (Part 2)

  QUESTIONS:
    - how to handle invalid or missing arguments?
  INPUT:
    - one string
  OUTPUT:
    - one string
  RULES:
    - given a string argument, determine the size of each word in the string, if the word 
    is 5 characters or longer reverse the word, return the new string result
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the string into an array of words
    - iterate over each word
      - if the current iteration word is 5 characters or longer reverse the word
    - return the new string
*/

const reverseWords = str => {
  return str.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }
    return word;
  }).join(' ');
};

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"