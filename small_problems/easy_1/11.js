function utf16Value(str) {
  let result = 0;

  for (let i = 0; i < str.length; ++i) {
    result += str.charCodeAt(i);
  }

  return result;
}

// Examples:
console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811

/*
  On line 1 the function utf16Value is declared that takes one string argument through it's str parameter.
  Within the function, on line 2 a local variable result is declared and initialized with the number 0;
  On line 4 a for loop begins with one local variable i that is initialized with the number 0. The for loop
  will check if the current iteraton value of i is less than the value of the str length property at the start
  of each iteration. Within the for loop block, on line 5 the String.prototype.charCodeAt()
  method with the value of the current i variable passed in as an argument is called on str. The result of this
  evaluation added to result. At the end of each iteration the value of i is incremented by 1. After the for
  loop on oine 8, the result value is returned as a number.
*/