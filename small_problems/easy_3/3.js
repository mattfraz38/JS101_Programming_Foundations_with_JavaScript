function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

/*
  On line 1 we declare a function 'stringy' that takes on number argument through it's 'size' parameter.
  On line 2 we declare a local variable 'result' that is initialized with an empty string. On line 4 a for
  loop begins that with a local variable 'idx' initialized with a number value of 0. The for loop will
  continue while 'idx' is less than 'size'. 'idx' will increment by 1 at the start of each new loop
  Within the for loop on line 4 a local variable 'number' is declared and dependent on the result of
  'idx' % 2 === 0, will be assigned with the number value of 1 or 0. On line 6 the value of 'number'
  is appended to the 'result' string. After the for loop the value of 'result' is returned as a string.
*/

// function stringy(num) {
//   let onesAndZeros = '';

//   while (num > 0) {
//     if (onesAndZeros[onesAndZeros.length - 1] === '1') {
//       onesAndZeros += '0';
//     } else {
//       onesAndZeros += '1';
//     }

//     num -= 1;
//   }

//   return onesAndZeros;
// }