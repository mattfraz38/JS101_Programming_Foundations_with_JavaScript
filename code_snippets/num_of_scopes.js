// How many scopes are in the following code? 
// Explain how you came up with your answer.

const arr = [1, 2, 3];
let idx = 0;

while (true) {
  let num = arr[idx];
  logNum(num);

  if (idx >= 2) {
    break;
  }

  idx += 1;
}

function logNum(num) {
  console.log(num);
}

/*
There are three scopes.
First there is the outer most global scope that contains the constant variable `arr` and the let variable `idx`.
Second, inside the while loop on line 5 a new block scope is created which contains the local variable `num` which is storing the value of the global constant `arr` value at the index of the global `idx` value.
Lastly there is a third, local, scope created on line 15 line of the function `logNum`
*/