/*
  Get The Middle Character

  QUESTIONS:
  INPUT:
    - one string
  OUTPUT:
    - one string
  RULES:
    - given a string argument, calculate the middle character if the string length 
      is odd and return the single character
    - if the string argument length is even return the center two characters
    - the argument will never be blank
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the argument into an array of single chars
    - if the length of the array is odd return the middle char
      (the rounded up index of the length / 2)
    - if the length of the array is even return the middle two chars
      (chars from length / 2 to the length / 2 + 1)
    - return the middle char(s)
*/

const centerOf = str => {
  const chars = str.split('');
  const len = chars.length;

  if (len % 2 !== 0) {
    return chars[Math.ceil((len / 2) - 1)];
  }

  return [chars[(len / 2) - 1], chars[len / 2]].join('');
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"