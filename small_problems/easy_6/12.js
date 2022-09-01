/*
  Matching Parentheses?
  
  QUESTIONS:
    - how to handle invalid or empty arguments?
  INPUT:
    - one string
  OUTPUT:
    - one boolean
  RULES:
    - given a string argument, determine if all parentheses are balances
    - parentheses are balenced if 
        1. they contain the same number of open and closed 
        2. and occur in the proper order ex. )()( is false, but (()) is true
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - declare a variable 'parens' and initialize it with 0
    - split the string argument into an array of chars
    - iterate over each 'paren'
      - if the current 'paren' iteration is '(' add 1 to 'parens'
      - if the current 'paren' iteration is ')' minus 1 from 'parens'
      - if parens is less than 0 return false
    - return parens === 0
*/

const isBalanced = str => {
  let parens = 0;
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === ('(')) {
      parens += 1;
    } else if (str[i] === ')') {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);