/*
  Letter Counter (Part 1)

  QUESTIONS:
    - How to handle invalid input?
  INPUT:
    - One string (a sentence)
  OUTPUT:
    - one object
  RULES:
    - given a string argument (a sentence) calculate the length of each word (any character not separated 
      by a space is considered a word) in the sentence and return an object containng the size of the word 
      as the key and the number of occurance of words that size as the value
  DATA STRUCTURES:
    - array, object
  ALGORITHM:
    - split the string argument into an array of words
    - declare a variable equal to an empty object
    - iterate over the words array and get the length of the current iteration word
      - if the current length as a key is not included in the object variable
        add the length as a key and set the value equal to one
      - if the current length as a key is already included in the object variable
        add one to the value
    - return the object variable
*/

const wordSizes = sentence => {
  // this is called a guard clause
  if (sentence.length === 0) return {};

  let words = sentence.split(' ');
  let wordSizesObj = {};

  words.forEach(word => {
    let wordLength = word.length;

    // Both lines 38 and 39 work
    // if (wordSizesObj.hasOwnProperty(wordLength)) {
    if (!wordSizesObj[wordLength]) {
      wordSizesObj[wordLength] = 0;
    }

    wordSizesObj[wordLength] += 1;
  });

  return wordSizesObj;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}