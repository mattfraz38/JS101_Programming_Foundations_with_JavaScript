for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}

/*
  A for loop with a local variable number is declared and assigned the value of 1. Inside the for block there is an if statement which will continue to the next iteration if number % 2 evaluates to being strictly equal to 1. After the if block, number is logged to the console. On each iteration number is incremented by 1. This iteration continues while number is less than 100.
*/