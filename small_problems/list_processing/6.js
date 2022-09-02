/*
  Palindromic Substrings

  QUESTIONS:
    - how to handle missing or invalid input?
  INPUT:
    - one string (consisting of one or many words separated by various characters)
  OUTPUT:
    - one array of strings (palindromes - a word that reads the same forward as it does backwards)
  RULES:
    - given a string argument, return an array of all palindromes from all substrings
    - you can and should use the substrings function from exercise 5
    - palintromes are case sensitive
    - substrings in the returned list should be sorted by their order of appearance in the input string
    - duplicate substrings should be included multiple times
    - single characters are not considered palindromes
  DATA STRUCTURES:
    - array, substrings function
  ALGORITHM:
    - call substrings, passing in the string argument
    - loop (filter) over the resulting array and if the current iteration string is equal to
      the reverse of the same string return the result in a new array
    - return the new palindromes array
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

const isPalindrome = str => {
  return str.length > 1 && str === str.split('').reverse().join('');
};

const palindromes = str => {
  // const subStrs = substrings(str);
  // const result = subStrs.filter(str => {
  //   if (str.length > 1) {
  //     return str === str.split('').reverse().join('');
  //   }
  // });
  // return result;
  return substrings(str).filter(isPalindrome);
};

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]