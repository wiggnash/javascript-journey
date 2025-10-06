// Expressions
console.log(2 + 2);
console.log(2 + 3 - (4 * (9 * 10)) / 5 / 2 - 13);
console.log("JS" / 4);

const greeting = "Hello";
console.log(greeting + " Vigneshwar");

// Operators
console.log(6 > 5);
console.log(5 < 8);

console.log(6 == "6");
console.log(6 === "6");

// Functions
function repeatingCode(a, b, c) {
  console.log(a, b, c);
  console.log("Some repeating logic");
}

repeatingCode();
repeatingCode();
repeatingCode(2);

function myName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

myName("vigneshwar", "d");

function product(x, y) {
  console.log(x * y);
}

product(2, 4);

function add(a, b) {
  return a + b;
}

const result = add(1, 2);
console.log(result);

function subtract(a, b) {
  console.log(a - b);
}

const resultSub = subtract(1, 2);
console.log(resultSub);
