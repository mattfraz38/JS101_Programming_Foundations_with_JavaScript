/*
  After Midnight (Part 1)

  QUESTIONS:
    - how to handle empty input
  INPUT:
    - one number
  OUTPUT:
    - one string
  RULES:
    - give the number input (minutes before or after mindnight)
      determine the 24 hour time equivalent
    - if a number is positive, it's after midnight
    - if a number is negative, it's before midnight
    - should work with any integer input
    - cannot use JavaScript's built-in Date class methods
    - Disregard Daylight Savings and Standard Time and other complications.
    - return the string result in 24 hour time format ex. "00:00"
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - declare a variable 'hrsPerMin' and initialize it with the value of the absolute value of the
      number divided by 60
    - declare a variable 'secondsPerMin' and initialize it with 60 minus (the decimal value of 'hrsPerMin' 
      multiplied by 60)
*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(num) {
  return num < 10 ? `0${num}` : String(num);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

console.log(timeOfDay(0) === "00:00"); // true;
console.log(timeOfDay(-3) === "23:57"); // true;
console.log(timeOfDay(35) === "00:35"); // true;
console.log(timeOfDay(-1437) === "00:03");  // true;
console.log(timeOfDay(3000) === "02:00"); // true;
console.log(timeOfDay(800) === "13:20");  // true;
console.log(timeOfDay(-4231) === "01:29");  // true;

console.log(timeOfDay(0)); // 00:00;
console.log(timeOfDay(-3)); // 23:57;
console.log(timeOfDay(35)); // 00:35;
console.log(timeOfDay(-1437));  // 00:03;
console.log(timeOfDay(3000)); // 02:00;
console.log(timeOfDay(800));  // 13:20;
console.log(timeOfDay(-4231));  // 01:29;