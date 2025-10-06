let emptyStringDoubleQuote = "";
let emptyStringSingleQuote = "";
let singleChracter = "v";
let sentence = "My name is Vigneshwar";

console.log(emptyStringDoubleQuote);
console.log(emptyStringSingleQuote);
console.log(singleChracter);
console.log(sentence);

// property
console.log(emptyStringDoubleQuote.length);
console.log(emptyStringSingleQuote.length);
console.log(singleChracter.length);
console.log(sentence.length);

console.log(typeof singleChracter);

// index
console.log(sentence.charAt(4));
console.log(sentence[4]);

// immutable string
let stringImmutable = "Vigneshwar";
console.log("string before changing : ", stringImmutable);
stringImmutable[0] = "J";
console.log("string after changing with index: ", stringImmutable);
stringImmutable = "Jigneshwar";
console.log(
  "string after changing the entire value (reassingment): ",
  stringImmutable,
);

// template strings or template literals
let templateString = `"" : double quote , '' : single quote`;
console.log(templateString);

let multiLineString = `This is a line
  new line present here`;
console.log(multiLineString);

let userName = "Vigneshwar";
console.log(`Printing value using template string : ${userName}`);
console.log(
  `Printing value using template string : ${userName} and the expression value is ${2 + 2}`,
);
