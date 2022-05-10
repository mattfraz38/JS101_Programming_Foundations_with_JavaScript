// Write three different ways to remove all of the elements
// from the following array:

let numbers = [1, 2, 3, 4];
console.log(numbers);

// Option 1
// let len = numbers.length;
// for (let i = 0; i < len; ++i) {
//   numbers.shift();
// }

// Option 2
// numbers.splice(0, numbers.length);

// Option 3
// numbers.length = 0;

// Option 4
while (numbers.length) {
  numbers.pop();
}

console.log(numbers);

// What will the following code output?
// console.log([1, 2, 3] + [4, 5]);

// Output will be: [1, 2, 34, 5];

// In some languages you can use + to concatenate two arrays,
// but not in JavaScript. In JavaScript, the + operator first
// converts the arrays to strings, and then concatenates the
// strings, so the output is the string 1,2,34,5.

// What will the following code output?

// let str1 = "hello there";
// let str2 = str1;
// str2 = "goodbye!";
// console.log(str1);

// The output will be: "hello there";

// The output is hello there since we are dealing with strings.
// In JavaScript, strings are primitive values and are immutable;
// they can't be changed. That also means that JavaScript creates
// a new copy of the string when assigning a string to a variable.
// Thus, line 2 assigns str2 a new string that happens to be a copy
// of str1's value. Line 3, in turn, assigns str2 to an entirely new
// string.

// What will the following code output?

// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice();
// arr2[0].first = 42;
// console.log(arr1);

// The output will be: [{ first: 42 }, { second: "value2" }, 3, 4, 5];

// +---------+             +---------------------+
// | pointer | ----------> | { first: "value1" } |
// +---------+             +---------------------+
// | pointer | -----+
// +---------+      |
// |    3    |      |      +----------------------+
// +---------+      +----> | { second: "value2" } |
// |    4    |             +----------------------+
// +---------+
// |    5    |
// +---------+

// arr1                                                       arr2
// +---------+             +---------------------+              +---------+
// | pointer | ----------> | { first: "value1" } | <----------- | pointer |
// +---------+             +---------------------+              +---------+
// | pointer | -----+                                    +----- | pointer |
// +---------+      |                                    |      +---------+
// |    3    |      |      +----------------------+      |      |    3    |
// +---------+      +----> | { second: "value2" } | <----+      +---------+
// |    4    |             +----------------------+             |    4    |
// +---------+                                                  +---------+
// |    5    |                                                  |    5    |
// +---------+                                                  +---------+

// The following function unnecessarily uses two return statements
// to return boolean values. Can you rewrite this function so it
// only has one return statement and does not explicitly use
// either true or false?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }
// Try to come up with at least two different solutions.

// Option 1
// function isColorValid(color) {
//   return (color === 'blue') || (color === 'green');
// }

// Option 2
// const isColorValid = color => color !== 'blue' || color !== 'green';

// Option 3
const isColorValid = color => ['blue', 'green'].includes(color);