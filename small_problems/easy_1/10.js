function multisum(num) {
  let result = 0;

  for (let i = 1; i <= num; ++i) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

// Examples:
console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

/*
  On line 1 a function multisum is declared that takes one argument through it's num parameter.
  Within the function block on line 2, a local variable result is declared and initialized with the
  number 0. Next, a for loop begins with one local variable i initialized with the number 1.
  Inside the for loop block on line 5, an if statement checks if the current iteration value i % 3
  evaluates to being strictly equal to 0 or if the current iteration value % 5 evaluates to being strictly
  equal to 0. If either of theses expressions evalueates to true, on line 6 the current iteration value of i
  is added to the result variable. This type of iteration will continue while the value of i is less than
  or equal to the value of num and will increment by 1 each iteration. After the for loop, on line 10 the value
  of result is returned from the function.
*/