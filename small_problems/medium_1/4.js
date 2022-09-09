/*
  Stack Machine Interpretation

  QUESTIONS:
  INPUT:
    - one string of commands
  OUTPUT:
    - one number
  RULES:
    - see problem
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - declare a variable 'commands' and initialize it with an array
      that is the result of splitting the argument at a space 
    - declare a variable 'register' and 'stack' and initialize them with the 
      values of 0 and [] respectively
    - write separate helper functions for each of the operations to perform
    - loop through each 'command' and depending on the command perform (call)
      the correct helper function
      - declare a new function 'n' which takes 2 arguments, a number and the 
        register. the side affect results in reassigning the register with the
        the value of the first number argument
      - declare a new function 'push' that takes two arguments, the register and 
        the stack
        the side affect of calling 'push' is pushing the register onto the stack
      - declare a new function 'add' which takes one arguments, the stack
        the side affect of 'add' will pop the last element off the stack add it to the
        it to the register

*/

const minilang = opperations => {
  const stack = [];
  let register = 0;
  opperations.split(' ').forEach(command => {
    if (Number(command)) register = Number(command);
    else if (command === 'PUSH') stack.push(register);
    else if (command === 'ADD') register += stack.pop();
    else if (command === 'SUB') register -= stack.pop();
    else if (command === 'MULT') register *= stack.pop();
    else if (command === 'DIV') register = Math.trunc(register / stack.pop());
    else if (command === 'REMAINDER') register = register % stack.pop();
    else if (command === 'POP') register = stack.pop();
    else if (command === 'PRINT') console.log(register);
  });
};

console.log(minilang('PRINT'));
// 0

console.log(minilang('5 PUSH 3 MULT PRINT'));
// 15

console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
// 5
// 3
// 8

console.log(minilang('5 PUSH POP PRINT'));
// 5

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// 6

console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
// 12

console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

console.log(minilang('6 PUSH'));
// (nothing is printed because the `program` argument has no `PRINT` commands)