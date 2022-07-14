// When run, the following code throws an error. 
// Explain why it throws an error, and identify the underlying principle involved.
const myArr = ['A', 'B', 'C'];

function logElem(myArr) {
  console.log(myArr[3]);
}

logElem();

// When run a there is a TypeError exception
/*
On line 1 we see the declaration and instanciation of a constant variable called `myArr` with an array containing three string values.
On line five the function `logElem` is defined which takes one argument `myArr` - this is an example of shadowing.
Inside the `logElem()` function we call `console.log()` with the `myArr` argument in combination with the bracket operator to access the 3rd value of this argument.
Finally on line 9 `logElem()` is invoked - with no argument.
The invocation of `logElem()` means the `console.log(myArr[3])` on line 6 is trying to log a nonexistent property 3 of an undefined local variable resulting in this `TypeError`.
*/