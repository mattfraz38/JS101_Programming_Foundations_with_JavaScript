let randomAge = () => {
  let age = randomNum(20, 120);
  console.log(`Teddy is ${age} years old!`);
};

// add 1 so the max value is inclusive
let randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

randomAge();

/*
  randomAge

  On line 1 we create a functional expression (arrow funcion) called 'randomAge' that does not take any arguments.
  within the function body on line 2 we declare a local variable 'age' and initialize it with the resulting number
  value of calling the 'randomNum' function, passing two numbers as arguments (one minimum and one maximum
  number respectively). On line 3 we log a template string `Teddy is ${age} years old!` to the console.
*/

/*
  randomNum

  On line 7 we create a functional expression (arrow funcion) called 'randomNumn' that takes two number
  arguments through it's 'min' and 'max' parameters. Within the function body on line 8 we return the resulting number value
  of calling Math.floor(Math.random() * (max - min + 1) + min);
*/