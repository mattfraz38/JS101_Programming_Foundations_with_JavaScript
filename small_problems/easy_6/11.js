/*
  Reversed Arrays

  QUESTIONS:
  INPUT:
    - one array
  OUTPUT:
    - one array
  RULES:
    - given an array argument, write a function that reverses the elements of
      the array in place and returns the result
    - the array elements should mutate the original array and return the
      same mutated array
    - you cannot use Array.prototype.reverse()
  DATA STRUCTURES:
    - array
  ALGORITHM:
    - declare a variable 'counter' and initialize it to half the length of the argument list
    - declare a variable 'start' and initialize it to the value of 0
    - declare a variable 'end' and initialize it to the value of the lenght of the array - 1
    - begin a while loop that will continue if the counter is greater or equal to 'counter'
      - for the current iteration swap the array element at the 'end' index
        with the array element at 'start'
      - decrement 'counter' by 1
      - increment 'start' by 1
      - decrement 'end' by 1 
    - retun the array
*/

const reverse = array => {
  let start = 0;
  let end = array.length - 1;
  while (start < array.length / 2) {
    [array[start], array[end]] = [array[end], array[start]];
    start += 1;
    end -= 1;
  }
  return array;
};

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true