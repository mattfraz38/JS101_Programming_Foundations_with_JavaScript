/*
  Rotation (Part 1)

  QUESTIONS:
  INPUT:
    - one array
  OUTPUT:
    - one array
  RULES
    - given an array of numbers rotate the elements one index to the left and circling the 
      first elemnent to the last index
    - do not modify the original array
    - if the input is not an array return undefined
    - if the input is an empty array return an empty array
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - create a shallow copy of the array argument and assign it to a variable 'arrCopy'
    - declare a variable 'placeholder'
    - begin a for loop with a counter 'i' set to 'arrCopy[arrCopy.length - 1]'
      continue the loop while 'i' is greater or equal to 0 and subtracting 1 each iteration
    - for each iteration
      - if i === 0 reassign arrCopy[i] to the arrCopy[arrCopy.lenght - 1]
      - else assign 'placeholder' = arrCopy[i - 1]
        reassign arrCopy[i - 1] to arrCopy[i]
    - return 'arrCopy'
*/

const rotateArray = arr => {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  return arr.slice(1).concat(arr[0]);
};

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]