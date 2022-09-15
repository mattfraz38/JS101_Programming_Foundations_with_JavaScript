function greetings(arr, obj) {
  let name = arr.join(' ');

  return `Hello, ${name}! Nice to have a ${obj.title} ${obj.occupation} around.`;
}

// Example:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

/*
  On line 1 the function greetings is declared that takes two arguments (an array and an object), through
  it's arr and obj parameters. Within the function block, on line 2 a local variable name is declared
  and initialized to the Array.prototype.join() method with a space string (' ') passed in as an argument
  and called on arr. On line 4, a template literal string is returned `Hello, ${name}! Nice to have a ${obj.title} ${obj.occupation} around.`, where name is the value stored in the local name variable, obj.title is the 
  reference to the title property of obj, and obj.occupation is the reference to the occupation property of obj.
*/