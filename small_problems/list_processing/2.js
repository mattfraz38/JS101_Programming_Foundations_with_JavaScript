/*
  Alphabetical Numbers
  
  QUESTIONS:
    - how to handle invalid (string) or empty arguments?
  INPUT:
    - one array of numbers
  OUTPUT:
    - one array of number
  RULES:
    - given an array of numbers, sort and return the numbers based on their English spelling
  DATA STRUCTURES:
    - array and/or object
  ALGORITHM:
    - declare an object 'numsObj' and initialize it with an object where the key the 
      English spelling of the value (a number)
    - sort the numbers array based on the key of numsObj
*/

// const NUMS_OBJ = {
//   0: 'zero',
//   1: 'one',
//   2: 'two',
//   3: 'three',
//   4: 'four',
//   5: 'five',
//   6: 'six',
//   7: 'seven',
//   8: 'eight',
//   9: 'nine',
//   10: 'ten',
//   11: 'eleven',
//   12: 'twelve',
//   13: 'thirteen',
//   14: 'fourteen',
//   15: 'fifteen',
//   16: 'sixteen',
//   17: 'seventeen',
//   18: 'eighteen',
//   19: 'nineteen'
// };

// const alphabeticNumberSort = nums => {
//   const numWords = nums.map(num => NUMS_OBJ[num]);
//   numWords.sort();
//   result = numWords.map(word => {
//     return Object.keys(NUMS_OBJ).find(key => NUMS_OBJ[key] === word);
//   });
//   return result.map(el => Number(el));
// };

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
  'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const alphabeticNumberSort = arr => {
  const sortedNumWords = [...NUMBER_WORDS].sort();
  return sortedNumWords.map(word => NUMBER_WORDS.indexOf(word));
};

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]