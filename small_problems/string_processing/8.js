/*
  How long are you?

  QUESTIONS:
  INPUT:
    - one string
  OUTPUT:
    - one array of strings
  RULES:
    - given a string argument, return an array consisting of strings which consist of 
      each word and it length
    - a word is any set of consecutive characters separated with a space
    - the the string argument is empty return an empty array
    - if no argument is passed return an empty array
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - split the string into an array of words and assign it to a variable 'words'
    - iterate over words, mutating it
      - mutate the current iteration word to be the word + the word length as a string separated
        with a spac
    - if the artument is empty or absent return an empty array
    - return the resulting string
*/

const wordLengths = str => {
  if (!str) return [];
  return str
    .split(' ')
    .map(word => `${word} ${word.length}`);
};

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []