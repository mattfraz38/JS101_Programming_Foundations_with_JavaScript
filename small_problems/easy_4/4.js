const isPalindrome = str => {
  let reversedStr = str.split('').reverse().join('');

  return reversedStr === str;
};

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true

/*
  On line 1 we create a functional expression (arrow function) that takes one string argument through
  it's 'str' parameter. Within the function on line 2 we declare a local variable 'reversedStr' that is 
  initialized to the string value of calling str.split('').reverse().join(''). 
  Finally on line 4, we return the resulting boolean value of 'reversedStr' === str.
*/