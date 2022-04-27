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

// a function that takes an array of strings, and returns a 
// string that is all those strings concatenated together

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

// a method that takes an array of integers, and returns a new
// array with every other element from the original array,
// starting with the first element. For instance:
// everyOther([1,4,7,2,5]); // => [1,7,5]

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

// a function that determines the index of the 3rd occurrence
// of a given character in a string. For instance, if the
// given character is 'x' and the string is 'axbxcdxex', the
// function should return 6 (the index of the 3rd 'x'). If the
// given character does not occur at least 3 times, 
// return null.

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