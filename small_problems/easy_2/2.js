const rlSync = require('readline-sync');

/*
Greeting a user
Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

Examples:

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?
*/

/*
INPUTS:
  - one string
OUTPUTS:
  - one greeting string
RULES:
  - if the user simply imputs their name e.g. Bob a normal greeting is returned
  - if the user adds an ! to their name e.g. Bob! an screaming greeting is returned
DATA STRUCTURES:
  - string
ALGORITHM:
  - ask the user for their name
  - save the input to the variable 'name'
  - if the final characer is '!' log a screaming string greeting
    else if not log a normal string greeting
*/

let name = rlSync.question('What is your name? ');

if (name.endsWith('!')) {
  let sereamingName = name.slice(0, -1).toUpperCase();
  console.log(`HELLO ${sereamingName}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name[0].toUpperCase() + name.slice(1)}.`);
}