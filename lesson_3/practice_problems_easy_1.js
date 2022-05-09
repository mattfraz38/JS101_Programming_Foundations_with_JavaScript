// Determine whether the following object of people and
// their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty('Spot'));

// Using the following string, create a new string that contains all
// lowercase letters except for the first character, which should be
// capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

const capitalizeSentence = sentence => {
  return sentence.charAt(0).toUpperCase() +
    sentence.substring(1).toLowerCase();
};

console.log(capitalizeSentence(munstersDescription));

// What will the following code output?

console.log(false == '0');  // true
console.log(false === '0'); // false

// We have most of the Munster family in our ages object:
// Add entries for Marilyn and Spot to the object:

let ages2 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages2, additionalAges);

console.log(ages2);

// Determine whether the name Dino appears in the
// strings below -- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'));
console.log(str2.includes('Dino'));

console.log(str1.match('Dino') !== null);
console.log(str2.match('Dino') !== null);

console.log(str1.indexOf('Dino') > -1);
console.log(str2.indexOf('Dino') > -1);

//How can we add the family pet, "Dino", to the following array?
// How can we add multiple items to our array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// This does not mutate the original array
// To do so you must reaassign it
flintstones.concat('Dino');
flintstones = flintstones.concat('Dino', 'Hoppy');
console.log(flintstones);

flintstones.push('Dino');
flintstones.push('Dino', 'Hoppy');
console.log(flintstones);

flintstones[flintstones.length] = "Dino";
console.log(flintstones);

// Return a new version of this sentence that ends just before
// the word house. Don't worry about spaces or punctuation:
// remove everything starting from the beginning of house to
// the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

let wordIdx = advice.indexOf('house');
let beginningStr = advice.slice(0, wordIdx);
console.log(beginningStr);