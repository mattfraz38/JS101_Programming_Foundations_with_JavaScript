/*
  Swap Case

  QUESTIONS:
    - how to handle invalid or missing arguments?
  INPUT:
    - one string
  OUTPUT:
    - one string
  RULES:
    - given a string argument, switch all uppercase characters to lowercase 
      and all lowercase characters to uppercase
    - ignore non-alphabetic characters
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the string argument into an array of characters and assign to a variable 'chars'
    - iterate over each char in 'chars'
      - if the current iteration char is equal to the same char uppercased
        return the char in lowercase
      - else do the opposite for lowercase  chars (lowercase -> uppercased)
      - else if the current iteration char is not alphabetical return the same char
    - return the resulting new string joined at an empty character
*/

const swapCase = str => {
  return str.split('').map(char => {
    if (char === char.toUpperCase()) return char.toLowerCase();
    else if (char === char.toLowerCase()) return char.toUpperCase();
    else return char;
  }).join('');
};

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"