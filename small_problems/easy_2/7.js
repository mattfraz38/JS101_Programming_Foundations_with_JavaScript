/*
Exclusive Or
The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one, but not both, of two conditions to be truthy: the so-called exclusive or.

In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise. Note that we are looking for a boolean result instead of a truthy/falsy value as returned by || and &&.
*/

/*
  INPUT:
    - two arguments
      - two numbers
      - two boolean values
      - any combination of a boolean and a number
  OUTPUT:
    - one boolean
  RULES:
    - should return a boolean
    - should return true if exactly one of the values is truthy, else return false
  DATA STRUCTURES:
    - boolean
  ALGORITHM:
    - define a function called 'xor' which takes two arguments 'val1' and 'val2'
    - if 'val1' is true and 'val2' is false return true
    - if 'val1' is false and 'val2' is true return true
    - otherwise return fasle
*/

function xor(val1, val2) {
  let valsAsBooleans = [Boolean(val1), Boolean(val2)];
  valsAsBooleans.every(el => {
    el === true || el === false;
    return false;
  });
  return true;
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

/*
Optional Solution:

function xor(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}
*/

/*
Optional Solution:

function xor(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}
*/