/*
  Staggered Caps (Part 1)

  QUESTIONS:
    - how to handle invalid or missing arugment?
  INPUT:
    - one string
  OUTPUT:
    - one string
  RULES:
    - given a string argument, return a new string where all character
      cases alternate (starting form the left) upper -> lower -> upper, etc.
    - ignore non-alphabetic characters
    - non-alphabetic characters still count towards the alternating sequence
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the string argument into an array of chars and assign to a variable 'chars'
    - iterate over each char also tracking the index
      - if the current index is even or zero return the current char capitalized
      - elese if it's odd return the current char as lowercase
    return the resulting array joined at an empty space
*/

const staggeredCase = str => {
  return str
    .split('')
    .map((char, idx) => {
      if (idx % 2 === 0) return char.toUpperCase();
      else return char.toLowerCase();
    })
    .join('');
};

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"