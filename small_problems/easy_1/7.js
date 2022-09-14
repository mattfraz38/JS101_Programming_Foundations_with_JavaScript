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

/*
  The function shortLongShort is declared on line 1 that accepts two arguments through str1 and str2 parameters. Within the function block on line 2, a local variable str1Len is declared and initialized with the value of str1's length property. On line 3 a local variable str2Len is declared and inialized with the value str2's length property. Continuing on to line 5 an if statement checks if the value of str1Len is less than the value of str2Len. If this evaluates to true, on line 6 the values of str1, str2, and str1 are all appended together respectively and returned. If the value of str1Len is less than the value of str2Len evaluates to false, on line 8 the values of str2, str1, and str2 are all appended together respectively and returned.
*/
