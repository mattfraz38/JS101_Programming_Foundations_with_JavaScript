function triangle(height) {
  let spaces = height - 1;
  let stars = 1;

  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}

triangle(3);
triangle(5);
triangle(9);

/*
  On line 1 we declare a function 'triangle' that takes one number argument through it's 'height' parameter.
  Within the function on line 2 we declare a local variable 'spaces' and initialize it to the value of 
  'height' - 1. On line 3 we declare another local variable 'stars' and initialize it to the number value of 1.
  After this we begin a while loop that will continue until 'height' is less than or equal to 0. Within the
  while loop, on line 6 we log the template string `${" ".repeat(spaces)}${"*".repeat(stars)}` to the console.
  After this on line 7 to 9, 'spaces' is decremented by 1, 'stars' is incremented by 1, and 'height' is
  decremented by 1 respectively. 
*/

/* LS Solution
  function triangle(num) {
    for (let row = 0; row < num; ++row) {
      for (let col = 0; col < num; ++col) {
        if (col < num - (row + 1)) {
          process.stdout.write(' ');
        } else {
          process.stdout.write('*');
        }
      }
      console.log('');
    }
  }
*/