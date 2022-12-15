function penultimate(sentence) {
  let splitSent = sentence.split(' ');

  return splitSent[splitSent.length - 2]
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

/*
  On line 1 a function 'penultimate' is declared that takes one string argument through it's 'sentence' parameter.
  Within the function body on line 2, a variable 'splitSent' is declared and initialized with the resulting array of
  calling the Array.prototype.split() method on 'sentence' passing in an space character (' ') as the argument.
  On line 4 we access the second to last element of the reference to 'splitSent' and return the string 'result'.
*/