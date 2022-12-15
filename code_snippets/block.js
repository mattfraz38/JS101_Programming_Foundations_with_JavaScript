{
  let foo = 'bar';
}

console.log(foo);

/*
  On line 1 a block is created. Within the block on line 2 a local
  variable with block scope 'foo' is declared and initialized with 
  the string value 'bar'. On line 3 the block ends and on line 5 
  the variable 'foo' is logged to the console, however because 
  'foo' is out of scope a Reference error is returned.
 */