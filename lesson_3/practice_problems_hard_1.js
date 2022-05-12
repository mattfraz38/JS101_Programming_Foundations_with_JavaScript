// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// No the will not return the same result.
// The JS engine will automatically place a semicolon at the end
// of the line after the return in second() and thus will only
// return, but without any value. As a result the return value 
// will be undefined

// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// { first; [1, 2] }
// The reason for this is JavaScript objects are pass by reference
// and because arrays are objects, adding a value to numArray, which
// references the array of the 'first' property in object, will also
// add 2 to the 'first' array value

// Since numArray is a reference to the original array, [1],
// numArray.push(2) modifies this array. Thus, the original object
// referenced by object is changed. If, instead of modifying the
// original object, we want to modify numArray but not object, we
// have two options:

// We can declare and initialize numArray with a reference to a copy
// of the original array:

// let object = { first: [1] };
// let numArray = object["first"].slice();
// numArray.push(2);

// We can use Array.prototype.concat(), which returns a new array instead of modifying the original array:

// let object = { first: [1] };
// let numArray = object["first"].concat();
// numArray.push(2);

// Given the following similar sets of code, what will each code
// snippet print?

// A      // one is: ["one"]
// two is: ["two"]
// three is: ["three"]
// ...
// B      // one is: ["one"]
// two is: ["two"]
// three is: ["three"]
// ...
// C      // one is: ["two"]
// two is: ["three"]
// three is: ["one"]

// A and B will return the same values
// C will return a different value because splice mutates the objects

// Ben was tasked to write a simple JavaScript function to determine
// whether an input string is an IP address using 4 dot-separated
// numbers, e.g., 10.4.5.11. He is not familiar with regular
// expressions.

// Alyssa supplied Ben with a function named isAnIpNumber. It
// determines whether a string is a numeric string between 0 and 255 as
// required for IP numbers and asked Ben to use it. Here's the code
// that Ben wrote:

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       break;
//     }
//   }

//   return true;
// }

// Alyssa reviewed Ben's code and said, "It's a good start, but you
// missed a few things. You're not returning a false condition, and
// you're not handling the case when the input string has more or less
// than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values
// should be invalid."

// Help Ben fix his code.

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  let separateChars = inputString.split("");
  let dotCount = 0;

  for (let i = 0; i < separateChars.length; ++i) {
    if (separateChars[i] === ".") {
      dotCount += 1;
    }
  }

  if (dotCount !== 3) return false;

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) return false;
  }

  return true;
}

console.log(isDotSeparatedIpAddress('1.2.3.4'));

// Option 2: (less code)
// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   if (dotSeparatedWords.length !== 4) return false;

//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) return false;
//   }

//   return true;
// }