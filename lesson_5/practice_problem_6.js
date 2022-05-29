/*
Practice Problem 6
One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

Given this previously seen family object, print the name, age, and gender of each family member:
*/

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female' }
};

/*
Each output line should follow this pattern:
(Name) is a (age)-year-old (male or female).
*/

/*
  INPUT:
    - an object of objects
  OUTPUT:
    - multiple strings (one string on a new line totaling to the number of object properties)
  RULES:
    - return the object properties as a string using the following format: (Name) is a (age)-year-old (male or female).
  DATA STRUCTURES:
    - string
  ALGORITHM:
    - iterate over each 'person' in 'munsters'
      - for each 'person' format a string matching the example
      - log the string to the console
*/

for (person in munsters) {
  console.log(`${person} is a ${munsters[person].age}-year-old ${munsters[person].gender}.`);
}

// Optional solution 2
// Object.entries(munsters).forEach(entry => {
//   let name = entry[0];
//   let age = entry[1]['age'];
//   let gender = entry[1].gender;

//   console.log(`${name} is a ${age}-year-old ${gender}.`);
// });