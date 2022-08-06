let pets = {
  jerry: { species: "cat", age: 3 },
  luna: { species: "dog", age: 5 },
  goldin: { species: "fish", age: 1 }
};

function incrementAge(animals) {
  Object.values(animals).map(animal => { // pass by reference into the callback
    animal.age += 1;
  });
}

incrementAge(pets); // pass by reference
console.log(pets);

// main concept - pass by reference