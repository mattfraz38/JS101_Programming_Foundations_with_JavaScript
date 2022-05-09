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