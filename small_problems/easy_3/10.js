/*
  What Century is That?

  QUESTIONS:
    - Will input always be a valid [greater than zero] number?
    - What is a century?
      - A span of 100 years

  INPUT:
    - One number (a year)
  OUTPUT:
    - a century name (string)
  RULES:
    - given a number input (a year) calculate and return the century
    - attached to the century should be the appropriate suffix
    ('st', 'nd', 'rd', or 'th')
  DATA STRUCTURES:
   - numbers and the division operator
  ALGORITHM:
    - declare a function called 'century' which takes one argument 'year'
    - declare a variable 'centuryStr' and initialize it with the ceiling of 'year' divided 100, coerced to a string value
    - check the final character of 'centuryStr', attach the appropriate suffix and return the result
*/

function century(year) {
  let centuryStr = String(Math.ceil(year / 100));
  let lastChar = centuryStr[centuryStr.length - 1];
  let last2Chars = centuryStr.slice(centuryStr.length - 2);

  if (['11', '12', '13'].includes(last2Chars)) {
    return centuryStr + 'th';
  } else if (lastChar === '1') {
    return centuryStr + 'st';
  } else if (lastChar === '2') {
    return centuryStr + 'nd';
  } else if (lastChar === '3') {
    return centuryStr + 'rd';
  } else {
    return centuryStr + 'th';
  }
}


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"