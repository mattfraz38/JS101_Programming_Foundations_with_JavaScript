/*
Bannerizer
Write a function that will take a short line of text, and write it to the console log within a box.

logInBox('To boldly go where no one has gone before.');

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window.
*/

/*
INPUT:
  - one string (can me empty string)
OUTPUT:
  - one string surrounded by a box
RULES:
  - should return a banner (a string of text surrounded by a box)
DATA SCRUCTURES:
  - string
ALGORITHM:
  - declare a function called 'logInBox' that takes one string argument 'str'
  - print an empty box when 'str' is an empty string ''
    - while less than 5 (width of the empty box)
      - log '+', 2 '-' and lastly '+'
      - while less than 5 (height of the empty box)
        - log '|' in position 0 of the outer loop and at the last position of the outer loop
      - log '+', 2 '-' and lastly '+'
    - if 'str' length is greater than 0
      - repeat above symbols times the length of 'str' + 2
*/

function logInBox(str) {
  let rowLen = str.length;

  for (row = 0; row < 5; ++row) {
    if (row === 0 || row === 4) {
      console.log(`+${'-'.repeat(rowLen + 2)}+`);
    } else if (row === 1 || row === 3) {
      console.log(`| ${' '.repeat(rowLen)} |`);
    } else {
      if (rowLen === 0) {
        console.log(`|${' '.repeat(2)}|`)
      } else {
        console.log(`| ${str} |`);
      }
    }
  }
}

logInBox('');
logInBox('To boldly go where no one has gone before.');

/* 
Optional Solution (Easier to Read):

function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}
*/