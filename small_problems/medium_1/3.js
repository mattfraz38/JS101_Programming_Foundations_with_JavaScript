/*
  Rotation (Part 3)

  QUESTIONS:
    how to handle invalid or missing arguments?
  INPUT:
    - one number
  OUTPUT:
    - one number
  RULES:
    - given a number argument return the maximum rotation of the number
    - the maximum rotation is first, taking the left most digit and rotating it one
      to the left and shifting everything over. then, keeping the first (new left most
      digit) in place rotate again to the left. continue doing this until you reach the
      right most digit and return the result
    - you can and should use the rotateRightmostDigits function from problem 2
  DATA STRUCTURES:
    - array, string sliceing
  ALGORITHM:
    - declare a variable 'result' equal to the first 'num' argument conversed to a string
    - beging a for loop with the iterator 'i' equal to the length of the number
      argument and 'j' as another counting variable assigned to the value of 1, 
      continue looping while 'i' is greater than 0 and subtract 1 from 'i' each iteration
    - in each iteration call the rotateRightmostDigits function passing value of
      result argument as the first argument and the value of 'i' as the rotation 
      arguemnt
    - then, still inside the loop (re)assign 'result' with the value of calling 
      slice on the the return value of rotateRightmostDigits, passing the value 
      of 0 as the first argument to slice and the value of 'j' as the second
      argument
    - after the for loop return 'result'


    - declare a variable 'rotatedNum' and initialize it with value of calling rotateRightmostDigits
      with value of 'num' and length of 'rotation' passed
    - declare a variable 'result' and initialize it with the value of 'rotatedNum' as a string's
      first, left most digit
    - begin a for loop with an iterator 'i' equal to the length of num minus 1
      continue looping while i > 0 and subtract 1 from 'i' each iteration
    - for each iteration call 'rotateRightmostDigits' passing in 'rotatedNum' with the left most
      digit sliced off as the first argument and string length of 'rotatedNum' minus 1 as the 
      second argument
    - concatonate this to result
*/

const rotateRightmostDigits = (num, rotation) => {
  const strNum = String(num);
  const firstHalf = strNum.slice(0, strNum.length - rotation);
  const secondHalf = strNum.slice(strNum.length - rotation);
  const rotatedSecondHalf = secondHalf.slice(1).concat(secondHalf[0]);
  return Number(firstHalf.concat(rotatedSecondHalf));
};

const maxRotation = num => {
  let numDigits = String(num).length;
  for (let count = numDigits; count >= 2; --count) {
    num = rotateRightmostDigits(num, count);
  }
  return num;
};

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845