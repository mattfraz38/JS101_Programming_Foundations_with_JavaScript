/*
Practice Problem 14
Given the following data structure write some code to return an array containing the colors of the fruits and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
The return value should look like this:
[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
*/

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

/*
  INPUT:
    - one object of many objects
  OUTPUT:
    - one new array of sub-arrays and strings
  RULES:
    - Explicit:
      - colors (of fruits) should be capitalized
      - sizes of (of vegetables) should be uppercase
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - for each  of 'subObj' in 'obj' assigning this to a variable 'sizesAndColors'
    - if the 'subObj' is a fruit capitalize the colors and return the array
    - if the 'subObj' is a vegetable uppercase the size and return it
*/

let objKeys = Object.keys(obj);

let sizesAndColors = objKeys.map(subObj => {
  let fruitColors = [];

  if (obj[subObj].type === 'fruit') {
    obj[subObj].colors.forEach(color => {
      fruitColors.push(color[0].toUpperCase() + color.slice(1));
    });
  } else {
    return obj[subObj].size.toUpperCase();
  }

  return fruitColors;
});

console.log(sizesAndColors);

// Optional solution 2:
// let capitalize = word => word[0].toUpperCase() + word.slice(1);

// Object.values(obj).map(attributes => {
//   if (attributes['type'] === 'fruit') {
//     return attributes['colors'].map(char => capitalize(char));
//   } else {
//     return attributes['size'].toUpperCase();
//   }
// });