/*
Practice Problem 17
A UUID is a type of identifier often used to uniquely identify items, even when some of those items were created on a different server or by a different application. That is, without any synchronization, two or more computer systems can create new items and label them with a UUID with no significant risk of stepping on each other's toes. It accomplishes this feat through massive randomization. The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. The chance of a conflict is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no arguments and returns a string that contains a UUID.
*/



/*
  INPUT:
    - none
  OUTPUT:
    - one UUID string
  RULES:
    - Explicit
      - should write a function that takes zero arguments
      - should return a UUID string
  DATA STRUCTURES:
    - string
  ALGORITHM:
    - declare a function called 'getUUID' that takes zero arguments
    - instantiate a variable called 'UUID_CHARS' equal a string of all possible UUID chars and numbers
    - declare a variable called 'uuid' and set it to an empty string
    - instantiate a variable 'uuidCount' equal to 0;
    - if 'uuidCount' is less than 1 loop over 'UUID_CHARS' picking a random char 8 times and appending it to the 'uuid' string
    - then append a '-' char
    - repeat in the pattern of 8-4-4-4-12
*/

function getUUID() {
  const UUID_CHARS = 'abcdef1234567890';
  let uuid = '';

  let uuidCount = 0;
  let getRandChar = 0;

  while (uuid.length < 36) {
    if (uuidCount < 1) {
      getRandChar = 8;
    } else if (uuidCount > 0 && uuidCount < 4) {
      getRandChar = 4;
    } else {
      getRandChar = 12;
    }

    for (let i = 0; i < getRandChar; ++i) {
      let uuidCharIdx = Math.floor(Math.random() * UUID_CHARS.length);
      let char = UUID_CHARS[uuidCharIdx];
      uuid += char;
    }

    if (uuid.length !== 36) {
      uuid += '-';
      uuidCount += 1;
    }
  }

  return uuid;
}

console.log(getUUID());

// Optional solution
// function generateUUID() {
//   let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
//   let sections = [8, 4, 4, 4, 12];

//   let uuid = '';
//   sections.forEach((section, sectionIndex) => {
//     for (let index = 1; index <= section; index++) {
//       let randomIndex = Math.floor(Math.random() * characters.length);
//       uuid += characters[randomIndex];
//     }

//     if (sectionIndex < sections.length - 1) {
//       uuid += '-';
//     }
//   });

//   return uuid;
// }