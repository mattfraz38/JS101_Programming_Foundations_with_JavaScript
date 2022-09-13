/*
  Bubble Sort

  QUESTIONS:
    - how to handle invalid arguments?
    - what do I do if the array contains a mixture of data types?
  INPUT:
    - one array
  OUPUT:
    - one array
  RULES:
    - using the bubble sort algorithm, write a function that sorts an array
    - the function should sort the array elements in place (mutate the array)
    - the array will contain at least two elements
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - declare a variable 'swappedChars' and set it equal to false
    - declare two variables 'idx1' and 'idx2' and initialize them with numbers 0 and 1 respectively
    - begin a do...while loop that will continue while 'swappedChars' is true and 'idx2' is less
      than or equal to the length of the array argument
    - inside the do...while loop check if 'idx1' is less than 'idx2
      - if it is increment both indices by 1 else swap the two elements and increase the incidies by one
    - return the array

*/

function bubbleSort(arr) {
  while (true) {
    let swappedChars = false;
    for (let idx = 0; idx < arr.length; ++idx) {
      if (arr[idx] > arr[idx + 1]) {
        [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]];
        swappedChars = true;
      }
    }
    if (!swappedChars) break;
  }
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]