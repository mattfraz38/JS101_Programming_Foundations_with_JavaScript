let greeting = "Hello";

const test = str => {
  str = str.concat(" World!");
  return str;
}

console.log(test(greeting)); // "Hello World!"
console.log(greeting); // "Hello"