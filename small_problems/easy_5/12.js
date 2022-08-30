/*
  After Midnight (Part 2)

  QUESTIONS:
  INPUT:
    - one string
  OUTPUT:
    - one number 
  RULES:
    - given a string input (a 24 hour time representation), return
      a number representative of the number of minutes before (negative number) or
      the number of minutes after (positive number) midnight
    - should write two functions, each take a time of day in 24 hour time format
    - both functions should return a number in the range of 0..1439
    - do not use JavaScript's Date class methods
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - set constant variables for 'HOURS_PER_MIN', 'MINUTES_PER_HOUR', and 'HOURS_PER_DAY'
    - declare a function 'afterMidnight' which takes the 24 hour time string as an argument
    - split the string into two parts, a left 'hours' and right 'minutes'
    - multiply 'hours' by 'MINUTES_PER_HOUR' and add 'minutes' then return the result

    - declare a function 'beforeMidnight' which takes the 24 hour time string as an argument
    - split the string into two parts, a left 'hours' and right 'minutes'
    - multiply 'hours' by 'MINUTES_PER_HOUR' then subtract the result from 'MINUTES_PER_DAY',
      subtract 'minutes and then return the result
*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeString) {
  let [hours, minutes] = timeString.split(':').map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeString) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeString);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

console.log(afterMidnight("00:00"));
console.log(beforeMidnight("00:00"));
console.log(afterMidnight("12:34"));
console.log(beforeMidnight("12:34"));
console.log(afterMidnight("24:00"));
console.log(beforeMidnight("24:00"));