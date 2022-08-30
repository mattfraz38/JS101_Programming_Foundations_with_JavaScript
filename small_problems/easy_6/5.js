/*
  Always Return Negative

  QUESTIONS:
    - how to handle invalid or empty arguments?
  INPUT:
    - one number
  OUTPUT:
    - one number
  RULES:
    - given a number argument, if the number is positive, return the number as a negative,
      if the number is negative, return as is
  DATA STRUCTURES:
    Numbers
  ALGORITHM:
    - if the number argument is less than 0 return the number
    - else return a minus sign concatonated to the number conversed back to a number
*/

// const negative = num => {
//   if (num < 0) return num;
//   return Number('-'.concat(num));
// };

const negative = num => {
  return num < 0 ? num : Math.abs(num) * -1;
};

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0