/*
  Halvsies

  QUESTIONS:
  INPUT:
    - one array of numbers
  OUTPUT:
    - one 2D array of numbers
  RULES:
    - given an array of numbers return a new array where the first element is an array containing the first half of all the elements from the array argument, and the second element is the second half of all the elements from the array argument
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - make two variable 'firstHalf' and 'secondHalf' which will contain the first half of the numbers from the array argument and the second half of the array argumennt respectively
    - if the array length is not even 'firstHalf' gets the extra element
    - return a new array containing the nested arrays, 'firstHalf' and 'secondHalf'
*/

const halvsies = arr => {
  let firstHalf;
  let secondHalf;
  const arrLen = arr.length / 2;

  if (arrLen === 0) {
    return [[], []];
  } else if (arrLen % 2 === 0) {
    firstHalf = arr.slice(0, (arr.length / 2));
    secondHalf = arr.slice(arr.length / 2);
  } else {
    firstHalf = arr.slice(0, (Math.ceil(arr.length / 2)));
    secondHalf = arr.slice(Math.ceil(arr.length / 2));
  }

  return [firstHalf, secondHalf];
};

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]


/*
  Optional solution using slice

  function halvsies(array) {
    let half = Math.ceil(array.length / 2);
    let firstHalf = array.slice(0, half);
    let secondHalf = array.slice(half);
    return [firstHalf, secondHalf];
  }
*/