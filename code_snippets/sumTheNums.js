/*
  PEDAC

  Problem
  =======
  Implement a function that calculates the sum of numbers inside of a string.
  Example: "L12aun3ch Sch3oo45l"

  Input:
    - String
  Output:
    - Number
  Rules:
    - Add the sum of numbers
    - 0 and O are not the same
    - The sum of numbers, and not the digits
      - Consecutive numbers count as a number and not individual digits

  Example
  =======

  Data Structure
  ==============
  "HE2LL3O W1OR5LD" => ['2', '3', '1', '5'] => [2, 3, 1, 5] => 11

  Algorithm
  =========

  MATT:
  - separate the input string into an array of individual characters
  - loop through the array of characters
    - if the current iteration can be coerced into a number, push the number to a new array

  - loop again and compare the strChars

  [loop through and add the coerced number else if cannot coerce the number add a ' ' to the new array]
  - join the array at the spaces
  - then sum all numbers in the array

    - declare a variable;
    - begin an inner loop from the outer iteration position which will continue while the current iteration (inner loop) can be coerced into an number
    - if the current iteration (inner loop) can be coerced into a number, add the number to the variable
  - return the variable



  console.log(Number('a')); // NaN
*/

/*
  PEDAC

  =========
  (P)roblem
  =========
  - Understand the problem by clarifying what it's asking.
  - Try not to assume, rather, ask questions to the interviewer (if there is one)
  - Determine what the input, output, and 'rules' are

  Input:
    - String
  Output:
    - Number
  Rules:
    - Add the sum of numbers
    - 0 and O are not the same
    * The sum of numbers, and not the digits
      - Consecutive numbers count as a number and not individual digits

  =========
  (E)xample
  =========
  - Look at test cases / examples provided to further understand problem.
    - Derive implicit requirements / rules
    - Understand certain edge cases

  ================
  (D)ata Structure
  ================
  - Ask yourself: How can we get from the input to the output?
  - Are there any intermediary steps we can take in between to shorten the gap
    between input and output?
  - What type of structure will aid in getting from input to output?

  "HE2LL3O W1OR5LD" => ['2', '3', '1', '5'] => [2, 3, 1, 5] => 11
  
  const DIGITS = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0']

  =========
  Algorithm
  =========
  - 

    MATT:
  - separate the input string into an array of individual characters
  - declare a new variable and initialize it with an empty array;
  - loop through the array of characters
    - if the current iteration (inner loop) can be coerced into a number, add the number (string) to the empty array 
    - else add an space character ' '
  - join the contents of the new array at an empty character ''
  - split the characters at a ' '
  - iterate over the array, coerce the elements to a number and add them
  - return the total
*/

function sumOfNumbers(str) {
  let strChars = str.split('');
  let strNums = [];

  strChars.forEach(char => {
    let num = Number(char);
    if (num == char) {
      strNums.push(char);
    } else {
      strNums.push(' ');
    }
  })

  strNums = strNums.join('').split(' ');

  let sum = strNums.reduce((accu, curr) => {
    return Number(accu) + Number(curr);
  }, 0);

  return sum;
}

// Raddi:
// 2. create an empty array to store characters we found to be numbers
// 3. create a string that contains digits from 0 - 9 and check the initial string's characters against it => 
// const nums = '0123456789'
// 4. initiate a counter starting at 0
// 1. initiate a variable to store the current character
// 5. iterate over string and if current character found is a number, check if the next one is a number as well 
// 6. if the next character is a number as well, add it to the current character, if it is not, add the current character only
// 7. iterate over new array, and turn each character into a number
// 8. sum the numbers in the new array
/*
  5. iterate through the string
  6. if the current chracater is a number, then add it to the array
  7. else if the current character is not a number, then add a space to the array
  8. join the array by space
  9. find the sum of the array
*/

// function sumOfNumbers(str) {
//   let numChars = [];
//   let digits = '0123456789';
//   for (let counter = 0; counter < str.length; counter += 1) {
//     let currentChar = str[counter];
//     if (digits.includes(currentChar)) {
//       numChars.push(currentChar)
//     } else {
//       numChars.push(' ');
//     }
//   }

//   numChars.join('');
// }


console.log(sumOfNumbers("HE2LL3O W1OR5LD") === 11);
console.log(sumOfNumbers("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog") === 3635);

// mahfuz: 
// 1.divide into individual char // as it’s a string

// 2.declare an array. 

// 3.check whether the char can be converted to a number,

// 4.if we can convert then try with the next char of indices also. to see as a whole if it’s possible to coerce to a number.  

// 5.then add those to the array.  
// 6.finally result out the sum of the numbers. 

// Implement a function that calculates the sum of numbers inside of a string.
// Example: "L12aun3ch Sch3oo45l"

//Fariha
//convert the string to an array of string
//save numbers in DIGITS array of numbers to compare
//compare each element  with the DIGITS
//if it is not a delete it 
//if not number delete the string
//combine consecutive numbers to make a number
//specify variable numbersArray;
//push numbers to numbersArray
//specify variable sumNumbers = 0;
//add numbers of the array by iterating through it
//return sumNumbers


// Terry
// Take a string as an input
// Iterate through each character in the string and save to a new array
// Convert each character into a number
// Check if its a number, and if it doesn't return a valid number, split the array at that position
// Save the groupings of numbers together into an array
// Add the numbers in the array together


