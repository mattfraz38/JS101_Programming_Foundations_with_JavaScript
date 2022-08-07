const rlSync = require('readline-sync');

/*
  When Will I Retire?

  QUESTIONS:
    - Are all valid inputs to be expected?
    - How should I handle invalid/absent inputs?

  INPUT:
    - two numbers (a current age and age of retirement)

  OUTPUT:
    - one string
  RULES:
    - Should calculate in what year the user will retire and how many years remain
  DATA STRUCTURES:
    - simple subtraction of numbers and the JS Date function to get the current year
  ALGORITHM:
    - ask the user for their age and store it in a variable
    - ask the user for what age they want to retire and store it in a variable
    - subtract the current age from the age of retirement to get the years remaining and store it in a variable
    - determine the current date (year) and add the remaining years to get the year of retirement
      and print a string like 'It's 2017. You will retire in 2057.'
    - subtract the retirement year from the current year and print a string like 'You have only 40 years of work
      to go!'

  What is your age? 30
  At what age would you like to retire? 70

  It's 2017. You will retire in 2057.
  You have only 40 years of work to go!
*/

let userAge = rlSync.question('What is your age? ');
let retirementAge = rlSync.question('At what age would you like to retire? ');
let remainingWorkingYears = retirementAge - userAge;
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + remainingWorkingYears}.`);
console.log(`You have only ${remainingWorkingYears} years of work to go!`);