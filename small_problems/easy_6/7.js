/*
  Name Swapping

  QUESTIONS:
    - how to handle invalit or empty arguments?
  INPUT:
    - on string (a name)
  OUTPUT:
    - one string (a reformatted name)
  RULES:
    - given a name argument, return the same name, but reformated: "First Last" => "Last, First"
  DATA STRUCTURES:
    - an array
  ALGORITHM:
    - split the string name at a space, 
    - move the indexes around
    - join at a ', ' and return the result
*/

const swapName = name => {
  return name.split(' ').reverse().join(', ');
};

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"