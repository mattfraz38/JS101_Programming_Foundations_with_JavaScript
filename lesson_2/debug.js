// To utilize the node debugger use the inspect command:
// node inspect path/to/file

// Debugger automatically pauses execution at the first
// expression or function call and is denoted with >

// You can access variables by typing:
// exec variableName

// Cycle execution to the next expression or function
// call type: n or next

// Unpause and continue program execution type: c or cont
// Pause execution at a specific location in the program
// code add: debugger; and run the program with inspect

// After the program finished the debugger prompt will remain
// To re-run the program type: run or restart

// Exit the debugger with CTRL+C twice (Mac) or CTRL+D

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  debugger;
  counter += 1;
}