/*
Practice Problem 10
Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.
*/

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

/*
  INPUT:
  OUTPUT:
  RULES:
  DATA STRUCTURES:
  ALGORITHM:
*/

let sortedArr = arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }

    if (a > b) {
      return -1;
    } else if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });
});

console.log(arr);
console.log(sortedArr);