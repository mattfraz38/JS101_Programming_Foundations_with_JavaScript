/*
  Rotation (Part 2)

  QUESTIONS:
    - how to handle invalid or missing arguments
  INPUT:
    - two numbers (a number to rotate, and a number representing the count of numbers to rotate)
  OUTPUT:
    - one number (a number to rotate, and a number representing the count of numbers to rotate),
      retun a new number with the correct rotations of the digits
  RULES:
    - given two arguments
      Ex. 735291, 1 (rotate 735291, one digit from the right - no change) 735291
      Ex. 735291, 3 (rotate 735291, three digit from the right - no change) 735912
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the first argument number into an array of digits and assign to a variable 'digits'
    - slice digits of 'digits' from the 0 index to the length of 'digits' minus the second argument 
      and assign to a variable 'firstHalf'
    - slice the digits of 'digits' from the index of the length of 'digits' minus the second 
      argument and assign to a variable 'secondHalf'
    - slice 'secondHalf' from the index of 1 and concatonate index 0 then assign this to a variable 
      'rotatedSecondHalf'
    - return 'firstHalf' concatonated with 'roatatedSecondHalf' joined at a ''
*/

const rotateRightmostDigits = (num, rotation) => {
  const strNum = String(num);
  const firstHalf = strNum.slice(0, strNum.length - rotation);
  const secondHalf = strNum.slice(strNum.length - rotation);
  const rotatedSecondHalf = secondHalf.slice(1).concat(secondHalf[0]);
  return Number(firstHalf.concat(rotatedSecondHalf));
};

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917