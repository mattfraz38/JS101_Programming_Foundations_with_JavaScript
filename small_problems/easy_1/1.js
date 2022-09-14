function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}

// Examples:
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/*
  We declare a function isOdd on line 1 that accepts an argument through it's num parameter. Within that function block there is a return statement that returns true or false as a result of evaluating whether Math.abs(num) % 2 is strickly equal to 1.
*/