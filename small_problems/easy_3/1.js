function crunch(str) {
  let result = '';

  for (let char of str) {
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

/*
  On line 1 we declare a function 'crunch' that takes one string argument through it's 'str' parameter.
  Within the function block, on line 2 we declare and initialize a local variable 'result' to the value of
  and empty string (''). On line 4, a for...of loop with a 'char' local variable to iterate over 'str' begins.
  Within the for block, on line 5, an if-statement checks if the value of 'char' is strictly equal to the
  reference to the value of the last character in 'result'. If this evaluates to true, the for...of loop continues on to the next iteration, otherwise on line 8 the value of 'char' is appended to 'result'. After the for...of
  loop on line 12 the string value of 'result' is returned.
*/