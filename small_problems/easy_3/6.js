const rlSync = require('readline-sync');
/*
  Madlibs

  Enter a noun: dog
  Enter a verb: walk
  Enter an adjective: blue
  Enter an adverb: quickly

  // console output
  Do you walk your blue dog quickly? That's hilarious!
  The blue dog walks quickly over the lazy dog.
  The dog quickly walks up blue Joe's turtle.
*/

/*
  QUESTIONS: 
    - What to do if input is blank, a number, or an incorrect part of speech?
  INPUT: 
    - four strings
  OUTPUT:
    - four strings (a story)
  RULES:
    - prompt the user for english parts of speech
    - put these inputs into the story template and return the result
  DATA STRUCTURES:
    - strings
  ALGORITHM:
    - require the appropriate packages
    - declare a function 'madlibs' that takes zero arguments
    - inside the function while there is no input prompt the user for the four parts of speech words and assign these to appropriate variables
    - using a template literal, inject the variables into the story and log the results
*/

function madlibs() {
  let noun = rlSync.question('Enter a noun: ');
  let verb = rlSync.question('Enter a verb: ');
  let adj = rlSync.question('Enter an adjective: ');
  let adverb = rlSync.question('Enter an adverb: ');

  console.log(`Do you ${verb} your ${adj} ${noun} ${adverb}? That's hilarious!`);
  console.log(`The ${adj} ${noun} ${verb}s ${adverb} over the lazy dog.`);
  console.log(`The ${noun} ${adverb} ${verb}s up ${adj} Joe's turtle.`);
}

madlibs();