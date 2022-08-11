/*
  Palindromic Strings (Part 2)
  
  QUESTIONS:
    - if even just word is a palindrome returne true?
      !no - remove all empty spaces and words with non-alphanumeric characters
      - after this it should be a palindrome
  RULES:
    - should be case insensitive
    - only alphanumeric characters matter
  Algorithm:
    - split the str argument into an array of words
    - for each word check if non-alphanumeric characters are included
      - if so remove it from the array
    - once all words with non-alphanumeric words are removed join the words at an empty space
    - if this new word is a palindrome return true, else false
*/

const isRealPalindrome = str => {
  str = str.toLowerCase();
  let strWords = str.split(' ');

  let noInvalidChars = strWords.map(word => {
    return word.replace(/[\W]/, '');
  });

  let joinedWords = noInvalidChars.join('');
  let reversedWords = noInvalidChars.join('').split('').reverse().join('');

  return joinedWords === reversedWords;
};

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false