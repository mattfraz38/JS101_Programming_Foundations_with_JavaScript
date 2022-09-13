/*
  Unlucky Days

  QUESTIONS:
    - how to handle invalid or missing argumets?
  INPUT:
    - one number
  OUTPUT:
    - one number
  RULES:
    - given a number year argument, return how many Friday the 13ths fall in that year
    - you can assume all years are greater than 1752 (which is when the United Kingdom adopted the modern Gregorian Calendar)
    - you can also assume the same calandar system will be used in the future
  DATA STRUCTURES:
    - JS Date methods
  ALGORITHM:
    - using JS Date method declare a new const variable 'year' and initialize it to the reference
      to the value of calling new Date() then call .setFullYear(argumentYear) on 'year'
    - declare a const variable 'result' and initalize it with an empty array
    - begin a for loop and loop 12 times (for the 12 months of the year)
      -  for each iteration declare a new variable 'thirteenth' and assign it with the value of
          calling .getMonth(iterator, 13) on the date
      - if the resulting value is equal to the value of 6 push it to 'result'
    - return the length of 'result'
*/

// function fridayThe13ths(year) {
//   let date = new Date()
//   date.setFullYear(year);
//   const result = [];
//   for (let month = 0; month < 12; ++month) {
//     date.setMonth(month, 13);
//     if (date.getDay() === 5) result.push(date);
//   }
//   return result.length;
// }

function fridayThe13ths(year) {
  const thirteenths = [];

  for (let month = 0; month < 12; ++month) {
    thirteenths.push(new Date(year, month, 13));
  }
  const onlyFridays = thirteenths.filter(day => day.getDay() === 5);
  return onlyFridays.length;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2