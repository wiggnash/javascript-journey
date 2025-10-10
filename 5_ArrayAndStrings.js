let str = "this is a sentence";
let array = str.split(" ");
console.log(array);
let arrayOne = str.split("");
console.log(arrayOne);
console.log(str.length);
console.log(arrayOne.length);
let arrayTwo = str.split();
console.log(arrayTwo);

// array to string
let mainArray = ["this", "is", "a", "sentence"];
console.log(mainArray);
let joinedString = mainArray.join(" ");
console.log(joinedString);
let joinedStringOne = mainArray.join("");
console.log(joinedStringOne);
let joinedStringTwo = mainArray.join();
console.log(joinedStringTwo);

// reverse a string
let stringToReverse = "welcome";
console.log(stringToReverse);
let stringToReverseArray = stringToReverse.split("");
let reversedArray = stringToReverseArray.reverse();
let reversedString = reversedArray.join("");
console.log(reversedString);

let reversedStringOneStep = stringToReverse.split("").reverse().join("");
console.log(reversedStringOneStep);
