function isLeapYear(year) {
  if (year < 1752) {
    return console.log(year % 4 === 0);
  } else if (year % 400 === 0) {
    return console.log(true);
  } else if (year % 100 === 0) {
    return console.log(false);
  } else {
    return console.log(year % 4 === 0);
  }
}

// Examples:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

/*
  On line 1 a function isLeapYear is declared that takes one argument through it's year parameter.
  Within the function block, on line 2, an if statement checks if year is less than 1752. If this evaluates
  to true, on line 3 the result of the expression year % 4 is strictly equal to 0 is logged to the console
  and returned from the function. Else if line 2 evaluates to false, if on line 4, year % 400 is strictly equal
  to 0 evaluates to true, true is logged to the console and returned from the function on line 5. Else if line 4
  evaluates to false, on line 6, if year % 100 is strictly equal to zero evaluates to 0, false is logged to the 
  console and returned from the function on line 7. Otherwise on line 9, the evaluation of year % 4 is strictly 
  equal to 0 is logged to the console and returned from the function.
*/