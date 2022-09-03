/*
  Delete Vowels

  QUESTIONS:
    - how to handle invalid or missing arguments?
    - returning a new array or mutating the caller?
  INPUT:
    - one array of strings
  OUTPUT:
    - one array of strings
  RULES:
    - given an array of strings, return an array of the same strings with the vowels
      (aeiou) removed
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - iterate over the argument array
    - for each iteration filter out the vowels
    - return a new array of strings
*/

// const removeVowels = arr => {
//   return arr.map(str => filterVowels(str));
// };

// const filterVowels = arr => {
//   return arr.split('').filter(char => {
//     return !['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
//   }).join('');
// };

const removeVowels = arr => {
  return arr.map(str => str.replace(/[aeiou]/gi, ''));
};

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
console.log(removeVowels(['GRAEIOUAEIOUN']));                      // ["GRN"]