/*
  Triangle Sides

  Equilateral: All three sides are of equal length.
  Isosceles: Two sides are of equal length, while the third is different.
  Scalene: All three sides are of different lengths.

  To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

  QUESTIONS:
    - how to handle invalid or missing arguments?
  INPUT:
    - three numbers
  OUTPUT:
    - one string
  RULES:
    - given three numbe arguments (triangle lengths) calculate if the triangle is a valid triangle
      and if so what type of triangle it s
  DATA STRUCTURES:
    - array and/or object
  ALGORITHM:
    - write a guard clause, if any of the arguments are 0 return 'invalid'
    - write a function 'isValid' which takes same three arguments as 'triangle'
      - put the three arguments into an array
      - get the index of the max value in the array, remove and store in a variable
      - sum the value of the remaining two numbers in the array
      - if the sum is greater than the max value return true;
    - inside 'triangle' if 'isValidTriangle' called with the sides is false return 'invalid'
      else perform the checks to return the type of triangle
*/

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

// function isValidTriangle(s1, s2, s3) {
//   const sides = [...arguments];
//   if (sides.includes(0)) return false;
//   let maxIdx = sides.indexOf(Math.max(...sides));
//   let max = sides[maxIdx];
//   sides.splice(maxIdx, 1);
//   let sidesMinusMaxSum = sides.reduce((preVal, currVal) => preVal + currVal, 0);
//   return sidesMinusMaxSum > max;
// }

function isValidTriangle(shortest, middle, longest) {
  return shortest > 0 && shortest + middle > longest;
}

function getTriangleType(s1, s2, s3) {
  if (s1 === s2 && s2 === s3) {
    return 'equilateral'
  } else if (s1 === s2 || s1 === s3 && s2 === s3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

function triangle(s1, s2, s3) {
  let perimeter = s1 + s2 + s3;
  let longest = Math.max(s1, s2, s3);
  let shortest = Math.min(s1, s2, s3)
  let middle = perimeter - longest - shortest

  if (isValidTriangle(shortest, middle, longest)) {
    return getTriangleType(s1, s2, s3);
  } else
    return 'invalid';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

// console.log(isValidTriangle(3, 3, 3));        // true
// console.log(isValidTriangle(3, 3, 1.5));      // true
// console.log(isValidTriangle(3, 4, 5));        // true
// console.log(isValidTriangle(0, 3, 3));        // false
// console.log(isValidTriangle(3, 1, 1));        // false