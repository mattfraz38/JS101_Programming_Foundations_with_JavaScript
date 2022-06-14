/*
Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.
*/

/*
  INPUT:
    - one string
  OUTPUT:
    - one string
  RULES:
    - return the string argument will all consecutive duplicate characters collapsed into one character
  DATA STRUCTURES:
    - string
  ALGORITHM:
    - declare a function called 'crunch' which takes one 'str' argument
    - declare a variable called 'result'
    - loop over all characters of 'str' assign the current iteration character to 'result'
    - if the next iteration is the same character as the last character of 'result' continue else add the character to 'result'
    - return result
*/

function crunch(str) {
  let result = '';

  for (char of str) {
    if (char === result[result.length - 1]) {
      continue;
    } else {
      result += char;
    }
  }

  return result;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""