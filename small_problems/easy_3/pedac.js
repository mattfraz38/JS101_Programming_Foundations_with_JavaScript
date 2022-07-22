// Anagram difference
// Given two words, how many letters do you have to remove from them to make them anagrams?
// Example
// First word: codewars (4 letters removed)
// Second word: hackerrank (6 letters removed)
// Result: 10

// A word is an anagram of another word if they have the same letters.
// Do not worry about case. All inputs will be lowercase.

/*
Input: two strings
Output: number (integer)
Rules:
  -all inputs will be lowercase
  -all input strings will be comprised of letters (lowercase)
  -a word is an anagram of another word if they have the same letters, the same number of times
  -two empty strings are considered anagrams
  -we want to remove as few characters as possible from each string
Data structure:
  -Array of characters from the input strings
  -Array of the non-common characters
*/

function anagramDifference(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');

  if (arr1.length === 0 && arr2.length === 0) {
    return 0;
  } else if (arr1.length === 0 && arr2.length > 0) {
    return arr2.length;
  } else if (arr1.length > 0 && arr2.length === 0) {
    return arr1.length;
  }

  for (let i = 0; i < arr1.length; ++i) {
    let el = arr1[i];
    let arr2CharIdx = arr2.findIndex(char => char === el);

    if (arr2CharIdx >= 0) {
      arr2.splice(arr2CharIdx, 1);
      arr1.splice(el, 1);
      --i;
    }
  }

  return arr1.length + arr2.length;
}

console.log(anagramDifference("", ""));      // 0
console.log(anagramDifference("a", ""));     // 1
console.log(anagramDifference("", "a"));    // 1
console.log(anagramDifference("ab", "a"));   // 1
console.log(anagramDifference("ab", "cd"));  // 4
console.log(anagramDifference("aab", "a"));  // 2
console.log(anagramDifference("a", "aab"));  // 2
console.log(anagramDifference("codewars", "hackerrank")); // 10

//Raddi: 
// - split strings inputs into two arrays of separate characters
// - create an empty array where the non-common characters will be pushed to
// - loop over each array of string characters and compare them, pushing non common characters to the empty array
// - when the loop is over and the non-common characters are gathered in their own array, display the length of that array

// Ambarish
// Step 1: create an empty array and store the first word split into letters.
// step 2: create another array for the second word.
// step 3: iterate the first array to find a match with the second array
// step 3.1: if a match is found more than once, add the second, third match
// and so on.
// step 4: store the non-matching characters and the multiple match chars
//into a new array.
// step 5: find the length of the new array and display it


// Matt:
// 1. split the two strings into two arrays
// 2. if both array lengths are zero, return zero
// 3. else if one string length is greater than one and the other is zero, return the length of the greater than zero array 
// 4. loop through each character of the first array and check if some of the the current iteration elements are in the second array
//    ** find the first matching char from arr1 in arr2 and remove
//      - if there are maching chars remove both
//    continue until no more matching chars in both strings
//    - return the length of arr1 + arr2;¥
// 5. if not (remove - continue, not remove) the element and add to a counter variable 
// 6. else continue to the next iteration
// 7. return the counter value

// -- NEED TO ACCOUNT FOR SECOND ARRAY






// check if el from arr1 is included in second arr2
// - if so find the first occurance of el
// - remove from both arrays
// - if no occurance move to the next value