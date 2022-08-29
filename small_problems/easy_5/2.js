/*
  Combining Arrays

  QUESTIONS:
    - Should I return a new array or mutate one of the arguments?
    - Will both array arguments always have numbers as elements?
    - What should I return if both arguments are empty?

  INPUT:
    - two arrays
  OUTPUT:
    - one array
  RULES:
    - given two array arguments return an array containing elements of both arrays (no duplicates)
  DATA STRUCTURES:
    - array or object
  ALGORITHM:
    - declare an empty array variable 'result'
    - iterate over the first array argument adding elements to the 'result' array (no duplicates)
    - iterate over the second array argument
      - if 'result' includes the current iteration element continuue
      - else add the element to 'result'
    - return result
*/

const union = (arr1, arr2) => {
  const result = [];
  copyNonDups(result, arr1);
  copyNonDups(result, arr2);
  return result;
};

const copyNonDups = (resultArr, arr) => {
  arr.forEach(el => {
    if (!resultArr.includes(el)) {
      resultArr.push(el);
    }
  });
};

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union([1, 1, 2, 3, 5], [2, 3, 6, 9]));    // [1, 2, 3, 5, 6, 9]

/*
  Optional Solution

  This solution provides a more general solution to the problem: it works properly with two array arguments, but also
  works with only one array, or with three or more arrays. To accomplish this, it makes use of the args rest parameter.
  The function simply iterates over the args array, and calls copyNonDupsTo for each element.

  function copyNonDupsTo(resultArray, array) {
    array.forEach(value => {
      if (!resultArray.includes(value)) {
        resultArray.push(value);
      }
    });
  }

  function union(...args) {
    const newArray = [];
  
    args.forEach(value => copyNonDupsTo(newArray, value));
  
    return newArray;
  }
*/