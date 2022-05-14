/*
Welcome Stranger
Create a function that takes 2 arguments, an array and an object. The array will contain 2 or more elements that, when combined with adjoining spaces, will produce a person's name. The object will contain two keys, "title" and "occupation", and the appropriate values. Your function should return a greeting that uses the person's full name, and mentions the person's title.
*/

/*
INPUT:
  - 2 arguments
    - 1 argument is an array
    - 1 argument is an object
OUTPUT:
  - 1 string 
RULES:
  - array
    - should join the array elements with a space creating a full name
  - object
    - should mention the title value and occupation value
DATA STRUCTURES:
  - 1 string
ALGORITHM:
  - declare a variable called name and set it equal to the result of joining the array argument values together with a space
  - return the result of joining the name variable and object property values into a greeting string
*/

function greetings(arr, obj) {
  let name = arr.join(' ');

  return `Hello, ${name}! Nice to have a ${obj.title} ${obj.occupation} around.`;
}

// Example:

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.