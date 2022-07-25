/*
  Double Doubles

  QUESTIONS:
    - Will all inputs be whole numbers?
    - What if an [empty] string or no argument is passed?

  INPUT:
    - one number
  OUTPUT:
    - one number
  RULES:
    - If the number argument is a double number (an even length number where the left side is the same as the right side - 8888, 3838, 11), return the number
    - Otherwise return the argument times two
  DATA STRUCTURES:
    - string to split digits
    - an array of numbers from the number argument
  ALGORITHM:
    - declare a function 'twice' that takes one argument (a number) 'num'
    - inside 'twice' declare a variable 'strNum' equal to the string value of 'num'
    - if 'strNum' length is odd return double value of 'num'
    - else if 'strNum' length is even
      - split the array at the center into two arrays of number strings 'leftArr' and 'rightArr'
    - join 'leftArr' into two string value and assign the value to a variable 'leftString'
      - do the same for the right and assign it to a variable 'rightString'
    - compare 'leftString' and 'rightString'
      - if the are equal return 'num'
      - else return double the value of 'num'
*/

function twice(num) {
  let strNum = String(num);

  if (strNum.length % 2 !== 0) {
    return num * 2;
  }

  let numsArr = strNum.split('');
  let leftArr = numsArr.slice(0, (numsArr.length / 2));
  let rightArr = numsArr.slice(numsArr.length / 2);
  let leftStr = leftArr.join('');
  let rightStr = rightArr.join('');

  if (leftStr === rightStr) {
    return num;
  }

  return num * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676