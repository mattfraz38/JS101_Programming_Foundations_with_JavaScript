/*
  Lettercase Percentage Ratio

  QUESTIONS:
    - how to handle invalid or missing arguments?
  INPUT:
    - one string
  OUTPUT:
    - one object
  RULES:
    - given a string argument, return an object containg three properties
      1. the percentage of characters in the string that are lowercase letters
      2. the percentage of characters that are uppercase letters
      3. the percentage of characters that are neither
  DATA STRUCTURES:
    - array and/or object
  ALGORITHM:
    - initialize a constant variable 'charPercents' and initialize it with the three properties
      all of which are initialized with an initial value of 0
    - using regex get an array of chars that are lowercase and reassign charPercents['lowercase']
      to the length of the resulting regex array divided by the length of the initial string argument
      (set the value two decimal places and convert to a string)
      - using regex get an array of chars that are uppercase and reassign charPercents['uppercase']
      to the length of the resulting regex array divided by the length of the initial string argument
      (set the value two decimal places and convert to a string)
    - assign the reference to the property values of lowercase plus uppercase subtracted from the 
      length of then divide by the length of the initial string argument
      (set the value two decimal places and convert to a string)
    - return 'charPercents' object
*/
const charPercents = { lowercase: '', uppercase: '', neither: '' };
const letterPercentages = str => {
  let count = str.length;

  const percentage = regex => {
    let matchingChars = str.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  };

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither: percentage(/[^a-z]/gi)
  };
  // let lower = new RegExp(/[a-z]/, 'g');
  // let lowerMatches = str.match(lower) || [];
  // charPercents['lowercase'] = String((((lowerMatches.length / str.length)) * 100).toFixed(2));
  // let upper = new RegExp(/[A-Z]/, 'g');
  // let upperMatches = str.match(upper) || [];
  // charPercents['uppercase'] = String((((upperMatches.length / str.length)) * 100).toFixed(2));
  // let nonAlpha = new RegExp(/[^a-zA-Z]/, 'g');
  // let nonAlphaMatches = str.match(nonAlpha) || [];
  // charPercents['neither'] = String((((nonAlphaMatches.length / str.length)) * 100).toFixed(2));
  //return charPercents;
};

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
