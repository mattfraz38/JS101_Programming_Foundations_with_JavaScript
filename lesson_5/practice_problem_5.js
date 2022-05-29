/*
Practice Problem 5
Consider the following nested object:
Compute and display the total age of the male members of the family.
*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female' }
};

/*
  INPUT:
    - one object of many objects
  OUTPUT:
    - one number
  RULES:
    - Explicit:
      - must compute the total age of all male family members
    - Implicit:
      - return value is not an object
  DATA STRUCTURES:
    - number
  ALGORITHM:
    - set a variable called 'familyMembers' equal to all the names of the family members
    - set a variable called 'maleMembers' and iterate over 'familyMembers to get all the male family members
    - iterate over the 'maleMembers' and get the ages from 'munsters' and assign this to the variable 'maleMemberAges'
    - calculate the sum of all the male ages and put it in a variable called 'sumMaleAges'
*/

let familyMembers = Object.keys(munsters);

let maleMembers = familyMembers.filter(member => {
  return munsters[member].gender === 'male';
});

let maleMemberAges = maleMembers.map(member => {
  return munsters[member].age;
});

let sumMaleAges = maleMemberAges.reduce((accu, cur) => {
  return accu + cur;
}, 0);

console.log(sumMaleAges);

// Optional solution 2:
//  - Use for/in loop
// let totalMaleAge = 0;

// for (let member in munsters) {
//   if (munsters[member]['gender'] === 'male') {
//     totalMaleAge += munsters[member].age;
//   }
// }

// console.log(totalMaleAge); // => 444

// Optional solution 3:
//  - Create an array of the munsters object values and iterate
//    with foreach
// let memberDetails = Object.values(munsters);
// let totalMaleAge = 0;

// memberDetails.forEach(member => {
//   if (member.gender === 'male') {
//     totalMaleAge += member.age;
//   }
// });
