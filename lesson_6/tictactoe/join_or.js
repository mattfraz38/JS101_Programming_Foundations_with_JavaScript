/*
Write a function named joinOr that produces the following results:
*/

/*
  INPUT:
    - minimum zero arguments
      - one array (1D) of numbers or characters
    - maximum three arguments
      - first the array, second a delimiting character: '-', ';', third an optional word as the final delimiter 'and', 'finally'
  OUTPUT:
    - one string
  RULES:
    - Explicit
      - the string output should be the result of joining the array elements 
      - if no arguments are passed separate elements with a ', ' and a final 'or' word *the default is 'or'
      - if two arguments are passed separate the elements with the the provided string delimiter: '; '
      - if three arguments are passed separate the elements with the
      provided string delimiter and the final word delimiter: 'and', 'finally'
    - Implicit
      - the array input is a 1D array of numbers or characters (the array will contain no objects or array)
  DATA STRUCTURES:
    - arrays and strings
  ALGORITHM:
    - define a function called 'joinOr'
    - the function has three parameters (one array, two optional string parameters)
    - if any combination of arguments and an empty array is passed
      - return an empty string ""
    - if any combination of arguments and a single element array is passed
      - return a string of the single element
    - if any combination of arguments and a two element array is passed
      - return a string of the two elements separated with the word 'or: "1 or 2"

    - if no second arguement is passed (string delimiter) join all elements of the string with ", " and save this to a variable 's'
    - get the index of the final ", " and insert 'or' into this index and return the result
      - else if a second argument is provided use the string as the delimiter and save this to a variable 'joinedElements'
      - get the index of the final delimiter and insert 'or' into this index and return the result

    - if no third arguement is passed (final word delimiter) join all elements of the string with with the provided second argument delimiter and save this to a variable 'joinedElements'
    - get the index of the final delimiter and insert 'or' into this index and return the result   
      - else if a second and third argument are provided use the string as the delimiter and save this to a variable 'joinedElements'
      - get the index of the final delimiter and insert the third argument into this index and return the result
*/

function argumentExists(bool) {
  return bool !== undefined;
}

function basicElementJoin(arr, delimiter = ', ') {
  return arr.join(delimiter);
}

function joinWithWord(joinedString, delimiter = ', ', word = 'or') {
  let lastDelimiterIndex = joinedString.lastIndexOf(delimiter);

  return `${joinedString.substring(0, lastDelimiterIndex + 1)} ${word} ${joinedString.substring(lastDelimiterIndex + 2)}`;
}

function joinOr(arr, delimiter, finalDelimiter = 'or') {
  if (arr.length === 0) {
    return "";
  } else if (arr.length === 1) {
    return String(arr[0]);
  } else if (arr.length === 2) {
    return arr.join(' or ');
  }

  let joinedElements;
  let result;

  if (!argumentExists(delimiter)) {
    joinedElements = basicElementJoin(arr);

    result = joinWithWord(joinedElements);
  } else if (argumentExists(delimiter) &&
    argumentExists(finalDelimiter)) {
    joinedElements = basicElementJoin(arr, delimiter);

    result = joinWithWord(joinedElements, delimiter, finalDelimiter);
  }

  return result;
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"