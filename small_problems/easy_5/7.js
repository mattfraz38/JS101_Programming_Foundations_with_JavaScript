/*
  Multiply Lists

  QUESTIONS:
    - how to handle empty or invalid arguments?
  INPUT:
    - two arrays of numbers
  OUTPUT:
    - one array of numbers
  RULES:
    - given two arrays of numbers, multiply the numbers that share the same index
    - return the products in a new array
    - it can be assumed both argument arrays will be the same length
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - get the length of one of the arguments and save to a variable 'len'
    - declare a variable 'products' and initialize it with an empty array
    - begin a for loop, continuing while the iteration count is less than 'len'
    - take the reference to the value at the current iteration index of arg1 and multiply it by the reference
      to the value at the current iteration index of arg2
    - store this product in 'products'
    return 'products
*/

// const multiplyList = (arr1, arr2) => {
//   const len = arr1.length;
//   const products = [];
//   for (let i = 0; i < len; ++i) {
//     products.push(arr1[i] * arr2[i]);
//   }

//   return products;
// };

const multiplyList = (arr1, arr2) => {
  return arr1.map((el, idx) => el * arr2[idx]);
};

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]