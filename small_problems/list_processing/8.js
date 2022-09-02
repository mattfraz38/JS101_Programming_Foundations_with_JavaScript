/*
  Grocery List

  QUESTIONS:
    - how to handle invalid or missing arguments?
  INPUT:
    - one 2D array (a string and a number)
  OUTPUT:
    - one array of strings
  RULES:
    - given a 2D array of a string and a number (fruit and number), write a function that returns
      an array consisting of strings where the string value is the fruit and it appears in the return 
      array the number amount of times
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - declare a variable 'fruits' and initialize it with an empty array
    - iterate over the array argument
      - for each sub array begin a for loop for the number amount of times
        and for each time push the fruit name to 'fruits'
    - return 'fruits'
*/

const buyFruit = arr => {
  const fruits = [];
  arr.forEach(subArr => {
    for (let i = 0; i < subArr[1]; ++i) {
      fruits.push(subArr[0]);
    }
  });
  return fruits;
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]