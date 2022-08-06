/*
  How Old is Teddy?

  QUESTIONS:

  INPUT:
    - None
  OUTPUT:
    - A string
  RULES:
    - Write a function that randomly generates an age between 20 and 120 (inclusive)
    - The function should log 'Teddy is 69 years old!' - where 69 is the random age that is generated
  DATA STRUCTURES:
    - Numbers, variables, Math object
  ALGORITHM:
    - Declare a function 'randomeAge' which doesn't take any arguments
    - Inside the function declare a variable 'age' and initialize it with a random number between 20 and 120 inclusively
      - continually calculate a random age until it is greater than or equal to 20 and less than or equal to 120
      ** Alternatively (return Math.random() * (max - min) + min; - where max and min are argument functions)
    - Log a string equal to: 'Teddy is AGE years old!' - AGE is the 'age' variable
*/

let randomeAge = () => {
  let age = randomNum(20, 120);
  console.log(`Teddy is ${age} years old!`);
};

// add 1 so the max value is inclusive
let randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

randomeAge();