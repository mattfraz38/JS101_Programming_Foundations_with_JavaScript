let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

// selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

/*
INPUT:
  - object
OUTPUT:
  - object
RULES:
  - Explicit:
    - return fruits from the object argument
  - Implicit:
    - the return value is an object
DATA STRUCTURES:
  - an object of strings
ALGORITHM:
  - create a variable 'fruits' containing the keys in produce
  - create a new empty object called 'result'
  - loop over produce
    - if the value associated with the current loop iteration of the object key is a 'Fruit' push the key/value pair to 'result
  - return result
*/

function selectFruit(obj) {
  let fruits = Object.keys(obj);
  let result = {};

  for (let i = 0; i < fruits.length; ++i) {
    currentFruit = fruits[i];

    if (obj[currentFruit] === 'Fruit') {
      result[currentFruit] = 'Fruit';
    }
  }

  return result;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(produce);