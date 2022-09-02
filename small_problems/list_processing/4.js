/*
  Leading Substrings

  QUESTIONS:
    - how to handle missing or invalid arguments?
  INPUT:
    - one string
  OUTPUT:
    - one array of strings
  RULES:
    - given a string argument, return an array that is a list of sub-strings consisting 
      of the first char, then the first two, etc. until th eend of the string
    - the array list should be ordered from shortest to longets
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the string argument into an array of all chars and assign it to a variable 'chars'
    - declare a variable 'subStrs' and initialize it with an empty array
    - iterate over 'chars' and for each iteration push the result of slicing from the zero index
      to the index of the current iteration
    - return 'subStrs' 
 */

const leadingSubstrings = str => {
  const subStrs = new Array(str.length).fill('');
  subStrs.map((_, idx) => {
    subStrs.shift();
    return subStrs.push(str.substring(0, idx + 1));
  });

  return subStrs;
};

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]