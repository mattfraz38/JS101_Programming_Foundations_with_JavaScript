/*
Convert a String to a Number!
The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) to an integer. The method takes 2 arguments where the first argument is the string we want to convert and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and Number(). Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.
*/

/*
  INPUT:
    - one string of numbers
  OUTPUT:
    - a number
  RULES:
    - without using parseInt() or Number() functions create a function to convert a string of numbers into a number
    - it's assumed all strings can be parsed into valid numbers
    - no need to worry about the + or - signs
  DATA STRUCTURES:
    - number
  ALGORITHM:
      - declare a function called 'stringToInteger' which takes one 'str' argument
      - set the length of the string to a variable called 'strLen'
      - declare a array variable called 'digitPlaces' which is set to the digit places equal to the length of 'strLen' [100, 10, 1]
      - split the 'str' string into an array of characters
      - map over each digit of 'str', take the current iteration element and multiply it by same position element of 'digitPlaces'
*/

function stringToInteger(str) {
  let strLen = str.length;
  let digitPlaces = [];

  for (let i = 0, j = 1; i < strLen; ++i, j *= 10) {
    digitPlaces.unshift(j);
  }

  let num = str.split('').map((el, idx) => {
    return el *= digitPlaces[idx];
  });

  return num.reduce((accu, curr) => {
    return accu + curr;
  }, 0);
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

/*
Optional Solution:

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}
*/