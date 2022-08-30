/*
  How Many?

  QUESTIONS:
    - how to handle invalid or empty input?
  INPUT:
    - one array of strings
  OUTPUT:
    - a string?
  RULES:
    - given an array, count the number of (case sensitive) occurances
  DATA STRUCTURES:
    - array, object
  ALGORITHM: 
    - declare a variable 'count' and initialize it with an empty object
    - iterate over each string in the argument
      - if the current iteration string does not exist as a key in 'count'
        add it to 'count' and assign it the value 0
      - increase the key of the current iteration's value in 'count' by 1
    - return a string of 'count' matching the following pattern 'car => 4' with each entry on a new line

*/

const countOccurrences = arr => {
  const count = {};
  arr.forEach(el => {
    count[el] = count[el] || 0;
    count[el] += 1;
  });

  logOccurrences(count);
};

const logOccurrences = objCount => {
  Object.keys(objCount).forEach(key => console.log(`${key} => ${objCount[key]}`));
};

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2