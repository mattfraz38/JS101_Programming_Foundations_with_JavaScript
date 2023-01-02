const multiplicativeAverage = arr => {
  let multAverage = arr.reduce((preVal, currVal) => preVal * currVal, 1);
  multAverage = (multAverage / arr.length).toFixed(3);
  return multAverage;
};

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

/*
  On line 1 we create an arrow function 'multiplicativeAverage'
  which takes one argument through it's parameter 'arr'.
  Within the 'multiplicativeAverage' function body we declare a local variable 'multAverage' which is initialized with the result of calling 
  the 'reduce' method on 'arr', multiplying each element of 'arr'.
  On line 3 'multAveriage' is then reassigned to the resulting value
  of 'multAverage' divided by the length of 'arr' and the 'toFixed' method is then called on this result passing in the argument number 3.
  On line 4 'multAverage' is returned from the 'multiplicativeAverage'
  function.
*/