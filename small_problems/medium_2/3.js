/*
  Tri-Angles

  QUESTION:
    - how to handle missing arguments?
  INPUT:
    - three whole numbers (degrees of triangle angles)
  OUPUT:
    - one string
  RULES:
    - given three triangle angles determine what type of triangle it is
      1. 'right': One angle is a right angle (exactly 90 degrees).
      2. 'acute': All three angles are less than 90 degrees.
      3. 'obtuse': One angle is greater than 90 degrees.
      4. 'invalid'
    - To be a valid triangle, the sum of the angles must be exactly 180 degrees, 
      and every angle must be greater than 0. If either of these conditions is not satisfied, 
      the triangle is invalid.
  DATA STRUCTURES:
  ALGORITHM:
    - declare a new function 'isValid' that takes three angle arguments (min, middle, max)
    - if min plus middle plus max is equal to 180 && no angle is equal to 0 return true

    - declare a new function 'getAngleType' that takes three angle arguments (min, middle, max)
      and return the angle type
      1. 'right': One angle is a right angle (exactly 90 degrees).
      2. 'acute': All three angles are less than 90 degrees.
      3. 'obtuse': One angle is greater than 90 degrees.

    - declare a variable 'maxAngle' and initialize it with the result of calling Math.max() with the 
      value of the three angles
    - declare a variable 'minAngle and initialize it with the result of calling Math.min() with the 
      value of the three angles
    - declare a variable 'middleAngle and initialize it with the result of 'angleSum' minus 'maxAngle'
      minus 'minAngle'
    - if calling 'isValid' passing in the three values is true 
      call 'getAngleType' witht he three angles
    - else return 'invalid'
    
*/

function isValid(min, middle, max, sum) {
  return ![min, middle, max].includes(0) && sum === 180;
}

function getTriangleType(angle1, angle2, angle3) {
  if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    return 'right';
  } else if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
    return 'acute';
  } else {
    return 'obtuse';
  }
}

function triangle(angle1, angle2, angle3) {
  let angleSum = angle1 + angle2 + angle3;
  let maxAngle = Math.max(angle1, angle2, angle3);
  let minAngle = Math.min(angle1, angle2, angle3);
  let middleAngle = angleSum - maxAngle - minAngle;

  if (isValid(minAngle, middleAngle, maxAngle, angleSum)) {
    return getTriangleType(angle1, angle2, angle3);
  } else {
    return 'invalid'
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"

// console.log(isValid(60, 70, 50));       // true
// console.log(isValid(30, 90, 60));       // true
// console.log(isValid(120, 50, 10));      // true
// console.log(isValid(0, 90, 90));        // false
// console.log(isValid(50, 50, 50));       // false


/*
  Optional solution
  Note,  we do not use parentheses when passing the functions as arguments -- the some and every function will take care of invoking the functions. We just want to pass the functions in to them.

  function triangle(angle1, angle2, angle3) {
    const angles = [angle1, angle2, angle3];
    if (isValid(angles)) {
      return getTriangleType(angles);
    } else {
      return "invalid";
    }
  }

  function isValid(angles) {
    const totalAngle = angles.reduce((total, angle) => total + angle);

    const allNonZero = angles.every(angle => angle > 0);

    return totalAngle === 180 && allNonZero;
  }

  function getTriangleType(angles) {
    if (angles.some(testRightTriangle)) {
      return "right";
    } else if (angles.every(testAcuteTriangle)) {
      return "acute";
    } else {
      return "obtuse";
    }
  }

  function testRightTriangle(angle) {
    return angle === 90;
  }

  function testAcuteTriangle(angle) {
    return angle 
  }
*/