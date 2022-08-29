/*
  Combine Two Lists
  
  QUESTIONS:
  INPUT:
    - two arrays
  OUTPUT:
    - one array
  RULES:
    - given two array arguments, combine both array alternating between inputs
      arr1 el, arr2 el, arr1 el, arr2 el, etc.
    - both arrays have valid inputs (not empty)
    - both arrays are the same size
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - create a new array with the size equal to the size of both array inputs
    - iterate over the newly created array
      - if the current iteration index is even
        - reassign the current iteration element with the value of the first array argument 
      - else if the current iteration index is odd
        - reassign the current iteration element with the value of the second array argument
    - return the new array
*/

const interleave = (arr1, arr2) => {
  return result = [...arr1, ...arr2].map((el, idx) => {
    if (idx % 2 === 0) {
      return arr1.shift();
    } else {
      return arr2.shift();
    }
  });
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"])

/*
  Optional Solution
  Achieve the same result without mutating the array arguments

  function interleave(array1, array2) {
    let newArray = [];

    for (let idx = 0; idx < array1.length; idx += 1) {
      newArray.push(array1[idx], array2[idx]);
    }

    return newArray;
  }
*/