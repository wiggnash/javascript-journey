let emptyObj = {};
console.log(emptyObj);
let person = {
  name: "Vigneshwar",
  age: 27,
};

console.log(person);

let personTwo = {};
personTwo.name = "Adithya Ramesh";
console.log(personTwo);

// reading / access values of the objects
console.log(personTwo.name);
console.log(personTwo["name"]);

// change the values
personTwo.name = "Dinesh Kumar";
console.log(personTwo);
