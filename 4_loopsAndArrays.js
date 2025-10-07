for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

function findSumOfFirstN(n) {
  return (n * (n + 1)) / 2;
}

function findSumOfFirstNV2(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}
console.log(
  `This is the sum of first n numbers : ${findSumOfFirstN(3)} ${findSumOfFirstNV2(3)}`,
);

let shoppingCard = [
  "andriod phone",
  5,
  true,
  undefined,
  null,
  [1, 2, 3, 4],
  {},
  findSumOfFirstNV2,
];

console.log("First element : ", shoppingCard[0]);
console.log("Last element : ", shoppingCard[shoppingCard.length - 1]);

shoppingCard[3] = "Changed from undefined";
console.log(shoppingCard);

let numberArray = [1, 2, 3, 4];
for (let i = 0; i < numberArray.length; i++) {
  console.log(numberArray[i]);
}

// exception in equal operator
console.log(true === "true"); // false
console.log(true == "true"); // we think it is true
console.log(true == 1); // true
console.log(true == "1"); // true
console.log(false === "false"); // false
console.log(false == "false"); // we think it is true
console.log(false == 0); // true
console.log(false == "0"); // true

let x = [1, 2, 3];
let y = x;
x[0] = 1000;
x[1] = 2000;
x[2] = 3000;

console.log(`x : ${x} and y : ${y}`);

let a = 5;
let b = a;
a = 10;
console.log(`a : ${a} and b is ${b}`);
