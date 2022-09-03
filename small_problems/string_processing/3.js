/*
  Lettercase Counter

  QUESTIONS:
    - how to handle invalid arguments?
  INPUT:
    - one string
  OUTPUT:
    one object
  RULES:
    - given a string argument, return an object containing three properties
      1. a count of the number of lowercase letters in the string
      2. a count of the number of uppercase letters in the string
      3. a count of the number of neither upper nor lowercase characters in the string
  DATA STRUCTURES:
    - array and object
  ALGORITHM:
    - declare a variable 'strObj'
    - split the string into an array of 'chars'
    - iterate over each char in 'chars'
      - if the current iteration char is equal to the same lowercase char 
      and the property does not exist, add a property 'lowercase' to 'strObj'
      and increase it's value by 1, else if it does exist increase it's value by 1
      - do the same for uppercase chars
      - else if the current iteration is not uppercase or lowercase add a new property 
        if it does not exits 'neither' and increase it's value by 1, else if it does
        exist increase it's value by 1
*/

const letterCaseCount = str => {
  let lowercaseChars = str.match(/[a-z]/g) || [];
  let uppercaseChars = str.match(/[A-Z]/g) || [];
  let neither = str.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neither.length
  };
};

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }