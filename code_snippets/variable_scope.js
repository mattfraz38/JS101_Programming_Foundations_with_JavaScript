function bar() {
  let foo = 'Hello';
  foo = 'Goodbye';
}
bar();
let baz = foo;
console.log(baz);

// What happens when this code is run?
// Explain precisely why this happens.

// A ReferenceError will be thrown 
/* On line one the function 'bar' is declared, then on line 2 inside bar() a local variable is initialized with the string 'Hello' and on line 3 the same variable is reassigned with the string 'Goodbye. On line five bar() is called, but there is not visiable side effect. 
On line 6 a global variable 'baz' is initialized witht he variable foo, however foo is a local variable to bar() and it is not accessable outside of the function. Therefore a ReferenceError to a undefined global variable 'foo' is thrown
*/