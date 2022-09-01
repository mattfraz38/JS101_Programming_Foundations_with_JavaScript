/*
  Multiply All Pairs

  QUESTIONS:
    - how to handle invalid arguments?
  INPUT:
    - two arrays of numbers
  OUTPUT:
    - one array of numbers
  RULES:
    - given two array of number arguments, return a new array containing the products of 
      all combinations of pairs between the two arrays
    - the new array should be sorted in numerical ascending order
    - neither argument is expected to be empty
    - based on the test case duplicates are allowed
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - declare a variable 'combinationProducts' and initialize it with an empty array
    - begin a for loop and continue looping while the iterator is less than the length
      of the first array argument
      - begin another (inner) for loop and continue looping while the iterator is less 
        than the length of the second array argument
        - inside the inner for loop push the result of the first array arugument at the 
          reference to the value of the outer iterator multiplied by the reference to the 
          value of the second array at the index of the inner iterator
    - sorted 'combinationProducts' and return the result
*/

const multiplyAllPairs = (arr1, arr2) => {
  const result = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      result.push(num1 * num2);
    });
  });
  return result.sort((a, b) => a - b);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]