/*
Practice Problem 8
Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.
*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

/*
  Questions: 
    1. What is the return value? Object, array, string?
    2. How do I handle duplicates?

  INPUT:
    - one object where the value of each property is an array of words
  OUTPUT:
    - the vowels in each string
  RULES:
    - Explicit:
      - use forEach (NOT for or while loops)
      - should return the vowels in each string
    - Implicit:
      - 
  DATA STRUCTURES:
    - 
  ALGORITHM:
    - set 'objValues' values equal to the values of object and flatten the nested array and join all words
    - split the joined words into individual characters
    - using forEach iterate over each character and add it to a 'vowels string'
*/

let joinedWords = Object.values(obj).flat().join('');
let chars = joinedWords.split('');
let vowels = '';

chars.forEach(char => {
  if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
    vowels += char;
  }
});

console.log(vowels);

// Optional solution 2:
// let vowels = 'aeiou';

// Object.values(obj).forEach(arr => {
//   arr.forEach(word => {
//     word.split('').forEach(char => {
//       if (vowels.includes(char)) {
//         console.log(char);
//       }
//     });
//   });
// });