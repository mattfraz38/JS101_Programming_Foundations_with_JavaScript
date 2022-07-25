/*
  Grade Book

  QUESTIONS:
    - Will input always be numbers?
    - Is it always the mean of three scores?
    - What if less or more than than three scores are passed?
  INPUT:
    - three numbers
  OUTPUT:
    - one string
  RULES:
    - calculate the mean of three numerical scores and return the associated letter grade 
    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'
  DATA STRUCTURES:
    - an array 
  ALGORITHM:
    - declare a function 'getGrade' which takes three number arguments 'gradeOne', 'gradeTwo', and 'gradeThree'
    - declare a variable 'grades' and initialize it with an array containing the three arguments
    - declare a variable 'gradesSum' which is the sum of all grades in the array
    - declare a variable 'numberScore' initialized with 'gradesSum' divided by the length of 'grades' (the array length)
    - depending on 'numberScore' return the corresponding letter grade
*/

function getGrade(gradeOne, gradeTwo, gradeThree) {
  let grades = [gradeOne, gradeTwo, gradeThree];
  let gradesSum = grades.reduce((accu, curr) => accu + curr, 0);
  let numberScore = gradesSum / grades.length;

  if (numberScore >= 90 && numberScore <= 100) {
    return 'A';
  } else if (numberScore >= 80 && numberScore < 90) {
    return 'B';
  } else if (numberScore >= 70 && numberScore < 80) {
    return 'C';
  } else if (numberScore >= 60 && numberScore < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"