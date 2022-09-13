/*
  Next Featured Number Higher than a Given Value

  QUESTIONS:
    - how to handle invalid or missing arguments?
  INPUT:
    - one number
  OUPUT:
    - one number or string
  RULES:
    - given a number argument, return the next featured number that is greater than the argument
    - a featured number is:
      1. an odd number
      2. is a multiple of 7
      3. all of the digits in the number occure exactly once
    - if there is no next featured number return an error:
      "There is no possible number that fulfills those requirements."
    - Note: The largest possible featured number is 9876543201
  DATA STRUCTURES:
    - array and/or object
  ALGORITHM:
    - declare a function 'isOdd' that returns a boolean if the number argument is odd or not
    - declare a function 'isMultipleOfSeven' that returns a boolean that returns if the number
      argument is a multiple of seven or not
    - declare a function hasUniqueDigits that returns a boolean if the digits of the number
      argument occur only once or not
    - begin a for loop that takes an iterator 'i' initialized with the value of 2 and will 
      continue looping while the itereator 'i' is less than 10, and increments by 1 each loop
        - check if the value of the initial number argument * 'i' 'isOdd', 'isMultipleOfSeven', and 'hasUniqueDigits'
        - if all of these are true return the resulting multiplication
        - else return the error message
*/

function isOdd(num) {
  return num % 2 !== 0;
}

function isMultipleOfSeven(num) {
  return num % 7 === 0;
}

function hasUniqueDigits(num) {
  const digits = {};
  const strNum = String(num).split('');
  strNum.forEach(digit => {
    if (!digits[digit]) {
      digits[digit] = 0;
    }
    digits[digit] += 1;
  })
  return Object.values(digits).every(digit => digit === 1);
}

// || vs. && ?
function nextOddMultipleOfSeven(num) {
  do {
    num += 1;
  } while (!isOdd(num) || !isMultipleOfSeven(num));

  return num;
}

function featured(num) {
  const MAX_FEATURED_NUMBER = 9876543201;
  let nextMultiple = nextOddMultipleOfSeven(num);
  do {
    if (hasUniqueDigits(nextMultiple)) {
      return nextMultiple;
    }
    nextMultiple += 14;
  } while (nextMultiple <= MAX_FEATURED_NUMBER);
  return "There is no possible number that fulfills those requirements.";
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."