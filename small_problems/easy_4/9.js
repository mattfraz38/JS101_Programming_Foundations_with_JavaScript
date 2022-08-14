/*
  Letter Counter (Part 2)

    QUESTIONS:
      - How to handle hyphens?

    RULES:
      - Modify the previous problem to not include special characters (only accept alphabetical)
    ALGORITHM:
      - split the sentence into words
      - iterate over each word
      - for each iteration set a variable equal to an array of each character
      - iterate over each character
      - if the character is a valid character append it to a new variable
      - return the new word
      - append the length of the new word to the count object
*/

const wordSizes = sentence => {
  // this is called a guard clause
  if (sentence.length === 0) return {};

  const words = sentence.split(' ');
  const count = {};

  words.map(word => {
    let chars = word.split('');
    let newWord = '';

    chars.forEach(char => {
      if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
        newWord += char;
      }
    });

    if (!count[newWord.length]) {
      count[newWord.length] = 0;
    }

    count[newWord.length] += 1;
  });

  return count;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}