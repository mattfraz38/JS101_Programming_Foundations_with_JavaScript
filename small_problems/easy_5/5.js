const interleave = (arr1, arr2) => {
  return result = [...arr1, ...arr2].map((_, idx) => {
    if (idx % 2 === 0) {
      return arr1.shift();
    } else {
      return arr2.shift();
    }
  });
};

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"])

/*
  On line 1 we create a function expression and assign it to the constant
  variable 'interleave' that takes two arguments through it's 'arr1' and 
  'arr2' parameters.
  Within the 'interleave' body 'arr1' and 'arr2' are deconstructed with 
  the spread operator and call the 'map' function.
  Within the 'map' function if the 'idx' of the current iteration is 
  even then the 'shift' method is called on 'arr1', returned from 'map'
  and stored in the array object which is stored in
  the 'result' variable. If the 'idx' of the current iteration is not
  even then the 'shift' method is called on 'arr2', returned from 'map'
  and stored in the array object which is stored in
  the 'result' variable.
  After all references to the 'arr1' and 'arr2' values have been sorted
  and stored, 'result' is returned.
*/


/*
  Optional Solution
  Achieve the same result without mutating the array arguments

  function interleave(array1, array2) {
    let newArray = [];

    for (let idx = 0; idx < array1.length; idx += 1) {
      newArray.push(array1[idx], array2[idx]);
    }

    return newArray;
  }
*/