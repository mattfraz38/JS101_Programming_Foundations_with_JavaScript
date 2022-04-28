// 1. Pseudocode
// -----------------------------------------------------
// Write a function that returns the sum of two numbers

// Create a function that takes two arguments
//  - Set a variable for the result
//  - Save the value of argument_1 and argument_2 added 
//    together to the the result variable
// Return the result

// -----------------------------------------------------
// 1. Formal Pseudocode
// -----------------------------------------------------
// START

// SET function(num1, num2)
//  - SET result = null;
//  - SET result = num1 + num2
// PRINT result

// END

// -----------------------------------------------------
// 2. Pseudocode
// -----------------------------------------------------
// a function that takes an array of strings, and returns a 
// string that is all those strings concatenated together

// Create a new variable and set to Null
// Iterate through the array one element at a time
//  - Save the current value of the first iteration to
//    the variable
//  - Concatenate the next current element to the variable
//  - Continue until the array iteration is complete
// Return the result of the variable

// -----------------------------------------------------
// 2. Formal Pseudocode
// -----------------------------------------------------
// START

// SET result = null
// SET counter = 0

// WHILE counter < array length
//  - IF result === null 
//    - SET result = array[counter]  
//  - SET result += array[counter]

// SET counter += 1

// PRINT result

// END

// -----------------------------------------------------
// 3. Pseudocode
// -----------------------------------------------------
// a method that takes an array of integers, and returns a new
// array with every other element from the original array,
// starting with the first element. For instance:
// everyOther([1,4,7,2,5]); // => [1,7,5]

// Create a new empty array variable 
// Iterate through the collection one element at a time
//  - Save the value of the first element in the new array
//  - If the index of the curren array iteration is positive
//    do not add the element to the new array
//  - Continue until the end of the collection
// Return the result of the new array

// -----------------------------------------------------
// 3. Formal Pseudocode
// -----------------------------------------------------
// START

// SET result = []
// SET counter = 0

// WHILE counter < array length
// - IF counter % 2 === 0
//   - SET result to include array[counter]

// SET counter += 1

// PRINT result

// END

// -----------------------------------------------------
// 4. Pseudocode
// -----------------------------------------------------
// a function that determines the index of the 3rd occurrence
// of a given character in a string. For instance, if the
// given character is 'x' and the string is 'axbxcdxex', the
// function should return 6 (the index of the 3rd 'x'). If the
// given character does not occur at least 3 times, 
// return null.

// Create an empty counter variable for occurrences
// Create a variable to store the final index

// Split the input string into an array of characters

// Iterate through the array one element at a time
//  - If the current iteration element is equal to the
//    character to search for add one to the counter variable
//  - If the counter variable is set to 2 (the third 
//    occurrence) end the loop
//  - If the loop ends before the counter is set to 2 
//    return null

// Return the final index variable

// -----------------------------------------------------
// 4. Formal Pseudocode
// -----------------------------------------------------
// START

// SET counter = 0
// SET index = 0

// GET string input from user split into individual characters
//  - SET characters = split string array

// WHILE counter < length of characters
//  - IF the current element === character to search for
//    - SET counter += 1
//    - SET index += 1

//  - IF counter === 2 (the third occurrence)
//    - BREAK

// IF counter === 2
//  - PRINT index
// ELSE
//  - PRINT null

// END

// -----------------------------------------------------
// 5. Pseudocode
// -----------------------------------------------------
// a function that takes two arrays of numbers and returns 
// the result of merging the arrays. The elements of the 
// first array should become the elements at the even 
// indexes of the returned array, while the elements of 
// the second array should become the elements at the odd 
// indexes. For instance:

// merge([1, 2, 3], [4, 5, 6]); // => [1, 4, 2, 5, 3, 6]
// You may assume that both array arguments have the 
// same number of elements.

// Create an array called result

// Create a counter variable and set it to zero

// Create a loop while the counter variable is less than
// the length equal of the first array plus the length of
// the second array
//  - If the counter is even destructively push the array
//    element of the first array to the results array
//  - Else destructively push array element of the second
//    array to the results array
//  - Increase the counter by one

//  Return the result array

// -----------------------------------------------------
// 5. Formal Pseudocode
// -----------------------------------------------------
// START
// SET result = []
// SET a counter = 0
// WHILE counter < first array length + second array length
//  - IF counter % 2 === 0
//    - PUSH to result the return value of shifting the 
//      first array value  
//  - ELSE PUSH to result the return value of shifting the 
//    second array value
// PRINT result
//END