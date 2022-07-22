// Right Triangles

/*
triangle(5);

    *
   **
  ***
 ****
*****

QUESTIONS:
  - What should I log if invalid or negative arguments are passed?

INPUT:
  - one integer
OUTPUT:
  - one or more strings of, '*' on one or more lines creating a right sided triangle
RULES:
  - Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars
DATA STRUCTURES:
  - string
ALGORITHM:
  - declare a function 'triangle' that takes one 'num' argument
    - begin a for loop local variable 'row' set to 0
    - continue the for loop while 'row' is less than 'num'
  - inside the for loop begin another for loop which initialized a local variable 'col' with the value 0 
    - continue the for loop while 'col' is less than 'num'
    - log (without a new line character) a '.' if 'col' is less than 'num' minus ('row' plus 1)
    - else log '*'
  - after the inner for loop, but inside the outer for loop log a new line
*/

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

triangle(3);
triangle(5);
triangle(9);


/* LS Solution
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
*/