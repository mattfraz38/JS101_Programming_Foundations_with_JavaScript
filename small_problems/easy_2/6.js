/*
The End Is Near But Not Here
Write a function that returns the next to last word in the String passed to it as an argument.

Words are any sequence of non-blank characters.

You may assume that the input String will always contain at least two words.
*/

/*
  QUESTIONS:
    - how do I handle empty strings?
    - how do I handle single word strings?

  INPUT:
    - one string (a sentence)
  OUTPUT:
    - one string 
  RULES:
    - when a string (sentence) is passed the second to last word in the sentence should be returned (a words are any sequence of non-blank values)
  DATA STRUCTURES:
    - string
  ALGORITHM:
    - declare a function 'penultimate' which takes one argument 'sentence'
    - inside the function declare a variable called 'splitSent' wich is set to an array of all words in 'sentence'
    - return the 'sentence' array value located at the index of the length minus 2
 */

function penultimate(sentence) {
  let splitSent = sentence.split(' ');

  return splitSent[splitSent.length - 2]
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
