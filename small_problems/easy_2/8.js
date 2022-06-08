/*
Odd Lists
Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.
*/

/*
  INPUT:
    - one array
  OUTPUT:
    - one array
  RULES:
    - EXPLICIT:
      - should return an array of every other element of the passed array starting with the first element
    - IMPLICIT:
      - the the passed array is empty should return an empty array
      - if an array of one element or two elements is passed, should return the first element
      - the passed array can contain any type of data
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - declare a function called 'oddities' which taked one 'arr' argument (an array)
    - if 'arr' length is 0 return an empty array
    - if 'arr' length is 1 or 2 return the first ellement
    - filter through the passed array and return even digit indices (because arrays are indexed at 0)
*/

function oddities(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1 || arr.length === 2) return [arr[0]];

  return arr.filter((el, idx) => {
    if (idx % 2 === 0) return el;
  });
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []