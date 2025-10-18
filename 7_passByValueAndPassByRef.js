let a = 5;
let b = a;

b = b + 5;

console.log(a, b);

function addNum(num) {
  num = num + 10;
  console.log(num);
}

const num = 5;
addNum(num);
console.log(num);

let obj = {
  id: 1,
  name: "vigneshwar",
};

function changeName(obj) {
  obj.name = "Vigneshwar D";
}

console.log(obj);
// changeName(obj);
changeName({ ...obj });
console.log(obj);
