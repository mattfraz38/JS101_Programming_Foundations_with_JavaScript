/*
  Clean Up the Words

  QUESTIONS:
    - How do I handle numbers?

  INPUT:
    - one string
  OUTPUT:
    - one string
  RULES:
    - given a string, check if there are any non-alphabetic characters, and replace them with a space
    - if there are multiple non-alphabetic characters in a row, only replace with a single space (not multiple)
  DATA STRUCTURES:
    - an array of words (separated with a space)
  ALGORITHM:
    - return the string if there are no non-alphabetic characters
    - declare a function called 'cleanUp' which take one string argument 'str'
    - declare a variable 'strWords' and initialize it with an array of all the individual words (characters separated with a space)

    - after splitting the words replace all occurances of all non-alphabetic characters of the string with a space
    -------
    - loop through 'strWords' and for each for, create (and reassign) an array of the current iteration words characters called 'strChars'
    - loop through each character of 'strChars' if the character is not an alphabetic character replace it with a space (there should not be consecutive space characters)
    -------
    - check there are not consecutive spaces, if so delete down to only one
    - join 'strChars, join strWords, and return the new string 
*/

// function cleanUp(str) {
//   let strChars = str.split('');
//   let strCopy = str.slice();

//   for (let idx = 0; idx < strChars.length; ++idx) {
//     let char = strChars[idx];

//     if (((char.charCodeAt(idx) <= 122 && char.charCodeAt(idx) >= 97) &&
//       (char.charCodeAt(idx) >= 65 && char.charCodeAt(idx) <= 90)) ||
//       char.charCodeAt(idx) === 32) {
//       return str;
//     } else {
//       strCopy = strCopy.replaceAll(char, ' ');
//     }
//   }

//   return strCopy;
// }


function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

console.log(cleanUp("hello"));                     // "hello"
console.log(cleanUp("Greetings All"));             // "Greetings All"
console.log(cleanUp("    this is a test   "));              // "    this is a test   "
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "