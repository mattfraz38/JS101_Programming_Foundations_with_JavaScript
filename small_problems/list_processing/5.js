/*
  All Substrings

  QUESTIONS:
    - how to handle missing or invalid arguments?
  INPUT:
    - one string
  OUTPUT:
    - one array of strings
  RULES:
    - given a string argument, return an array of all sugstrings
    - substring combinations include from index 0 to the end of the string, then from index 1 to the end,
      etc, until all combinations are returned
    - you can and should use the leadingSubstrings function from exercise 4
  DATA STRUCTURES:
    - array, leadingSubstrings function
  ALGORITHM:
    - call leadingSubStrings on the string argument
    - call another function that returns the string argument minus the first char
    - continue calling these two functions while there is a string to call
*/

const leadingSubstrings = str => {
  const subStrs = new Array(str.length).fill('');
  subStrs.map((_, idx) => {
    subStrs.shift();
    return subStrs.push(str.substring(0, idx + 1));
  });
  return subStrs;
};

const substrings = str => {
  let result = [];
  while (str) {
    result.push(leadingSubstrings(str));
    str = adjustStr(str);
  }
  return result.flat();
};

const adjustStr = str => {
  return str.substring(1);
};

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]