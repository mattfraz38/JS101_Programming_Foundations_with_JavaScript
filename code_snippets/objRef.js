let greeting = ["Hello"];

const test = arr => {
  arr = arr.concat(" World!"); // ["Hello", " World!"] - We are creating a new object reference
  arr.push("!!!");
  return arr; // ["Hello", " World!", "!!!"]
}

console.log(test(greeting)); // ["Hello", " World!", "!!!"] - returning the new object reference
console.log(greeting); // ["Hello"] - the original object was not mutated