const rlSync = require('readline-sync');

/* 
  Searching 101

  QUESTIONS:
    - Are number arguments always to be expected?
    - Are empty inputs valid?

  INPUT:
    - six number values
  OUTPUT:
    - one string (a sentence)
  RULES:
    - get input a number input from the user six times then return a 
    sentence stating whether the sixth number appeared amont the five 
    previous numbers or not. 
  DATA STRUCTURES:
    - array to store user numbers
  ALGORITHM:
    - declare a function `getUserNums` which takes one no arguments
    - inside the function prompt the user six times for the nth number
    - store the results of the user input in a variable 'userNums'
    - loop through the array checking if any of the first five numbers
      is equal to the value of the last element in 'userNums'
      - if so return a string like 'The number 17 appears in 25,15,20,17,23.'
      - else return a string like '  The number 17 does not appears in 25,15,20,16,23.'
    - import a function to attach the appropriate counting suffix when asking the user to enter the nth number

  EX.
  Enter the 1st number: 25
  Enter the 2nd number: 15
  Enter the 3rd number: 20
  Enter the 4th number: 17
  Enter the 5th number: 23
  Enter the last number: 17

  The number 17 appears in 25,15,20,17,23.
*/

const getUserNums = () => {
  const userNums = [];
  for (let i = 0; i < 6; ++i) {
    let num = rlSync.question(`Enter the ${concatCountSuffix(i + 1)} number: `);
    userNums.push(Number(num));
  }

  return userNums;
};

const targetNum = userNums => {
  return userNums[userNums.length - 1];
};

const concatCountSuffix = num => {
  switch (num) {
    case 1:
      return num + 'st';
    case 2:
      return num + 'nd';
    case 3:
      return num + 'rd';
    default:
      return num + 'th';
  }
};

const lastValueAmongFirstFive = numsArr => {
  let target = targetNum(numsArr);
  let targetIdx = numsArr.findIndex(el => el === target);

  return targetIdx < 5;
};

const printNumAppearsStr = userNums => {
  if (lastValueAmongFirstFive(userNums)) {
    console.log(`The number ${targetNum(userNums)} appears in ${userNums.join(',')}.`);
  } else {
    console.log(`The number ${targetNum(userNums)} does not appear in ${userNums.join(',')}.`);
  }
};

let userNums = getUserNums();
printNumAppearsStr(userNums);
