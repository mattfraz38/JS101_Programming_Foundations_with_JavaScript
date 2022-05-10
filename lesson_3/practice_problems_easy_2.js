// Given a string, return a new string that replaces every
// occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

// The  original string is left unchanged
advice = advice.replaceAll('important', 'urgent');
console.log(advice);

// The Array.prototype.reverse method reverses the order of elements
// in an array, and Array.prototype.sort can rearrange the elements
// in a variety of ways, including descending. Both of these methods
// mutate the original array as shown below. Write two distinct ways
// of reversing the array without mutating the original array. Use
// reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Bonus Question: Can you do it using the
// Array.prototype.forEach() method?

numbers = [1, 2, 3, 4, 5];
let reversedArr = numbers.slice().reverse();

let spreadSortedArr = [...numbers].sort((n1, n2) => n2 - n1);

// let forEachReversed = [];
// numbers.forEach((_, idx) => {
//   forEachReversed.push(numbers[(numbers.length - 1) - idx]);
// });

// One more style:
let forEachReversed = [];
numbers.forEach(num => {
  forEachReversed.unshift(num);
});

console.log('Original numbers:');
console.log(numbers);

console.log('Slice reverse numbers:');
console.log(reversedArr);

console.log('Spead sorted numbers:');
console.log(spreadSortedArr);

console.log('forEachReversed:');
console.log(forEachReversed);

console.log('Original numbers:');
console.log(numbers);

// Given a number and an array, determine whether the
// number is included in the array.

let nums = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(nums.includes(number1));
console.log(nums.includes(number2));

// Starting with the string:
let famousWords = "seven years ago...";

// Show two different ways to put the expected
// "Four score and " in front of it.

console.log("Four score and " + famousWords);
console.log("Four score and ".concat(famousWords));

// Given an array of numbers [1, 2, 3, 4, 5], mutate the array by
// removing the number at index 2, so that the array becomes
// [1, 2, 4, 5]

let testNums = [1, 2, 3, 4, 5];

testNums.splice(2, 1);
console.log(testNums);

// Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// This code will create a nested array that looks like this:
// ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Nesting data structures like we do here is commonplace in
// JavaScript and programming in general. We'll explore this
// in much greater depth in a future Lesson.

// Create a new array that contains all of the above values, but
// in an un-nested format:
// [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// The flat() function does not mutate the caller
flintstones = flintstones.flat();

console.log(flintstones);

// Other solutions include:
// flinstones = [].concat(...flinstones);

// flinstones = flinstones.reduce((accum, el) +> {
//   return accum.concat(el);
// });

// let newFlinstones = [];
// flinstones.forEach(el => {
//  newFlinstones.concat(el);
// });

// Consider the following object:
let flintstonesObj = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains only two
// elements: Barney's name and Barney's number:

// [ 'Barney', 2 ]

let barney;
for (let [key, val] of Object.entries(flintstonesObj)) {
  if (key === 'Barney') {
    barney = [key, val]
  }
}

console.log(barney);

// Another soluton:
// let barney = Object.entries(flintstonesObj).filter(pair => pair[0] === 'Barney').shift();

// How would you check whether the objects assigned to
// variables vals and table below are arrays?

let vals = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(vals));
console.log(Array.isArray(table));

// Back in the stone age (before CSS), we used spaces to align
// things on the screen. If we have a 40-character wide table
// of Flintstone family members, how can we center the following
// title above the table with spaces?

let title = "Flintstone Family Members";

let titleLength = title.length;
let tableLength = 40;
let averageTitleTableLen = ((titleLength + tableLength) / 2) - titleLength;

console.log(' '.repeat(averageTitleTableLen) + title + ' '.repeat(averageTitleTableLen));

// Another solution:
let padding = Math.floor((40 - title.length) / 2);
console.log(title.padStart(padding + titleLength));

// Write a one-line expression to count the number of
// lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);