function isLeapYear(year) {
  if (year % 400 === 0) {
    return console.log(true);
  } else if (year % 100 === 0) {
    return console.log(false);
  } else {
    return console.log(year % 4 === 0);
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

/*
  A function isLeapYear is declared that takes one argument through it's year parameter. Within the function
  block on line 2 an if statement checks if the resulit of year % 400 is strictly equal to 0. If this 
  result evaluates to true, on line 3 true is logged to the console and returned from the function. Else if,
  on line 4, the result of year % 100 is strictly equal to 0 is evaluated to true, false is logged to the 
  console and returned from the function on line 5. Otherwise, on line 7 the evaluation of year % 4 is
  strictly equal to 0 is logged to the console and returned from the function.
*/