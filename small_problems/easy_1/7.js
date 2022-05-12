// Short Long Short
// Write a function that takes two strings as arguments, determines
// the length of the two strings, and then returns the result of
// concatenating the shorter string, the longer string, and the
// shorter string once again. You may assume that the strings are
// of different lengths.

function shortLongShort(str1, str2) {
  let str1Len = str1.length;
  let str2Len = str2.length;

  if (str1Len < str2Len) {
    return str1 + str2 + str1;
  } else {
    return str2 + str1 + str2;
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"