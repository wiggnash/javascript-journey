// normal traverse

const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// in built method for an array
array.forEach((ele, index, array) => {
  console.log("Array element : ", ele);
  console.log("Array index : ", index);
  console.log("Array : ", array);
});

// params of callback is optional
array.forEach((ele) => {
  console.log("Array element : ", ele);
});

// can use underscore as the variable name
array.forEach((_, index) => {
  console.log("Array index : ", index);
});

array.forEach((ele, index) => {
  array[index] = ele / 2;
});

console.log(array);

// searching in array
// 1. include method : returns boolean if the array is present
// 2. find method
const studentArray = [
  {
    id: 1,
    name: "Vignesshwar",
    hobby: "Volleyball",
  },
  {
    id: 2,
    name: "Dinesh",
    hobby: "Badminton",
  },
  {
    id: 3,
    name: "Surya",
    hobby: "Trading",
  },
  {
    id: 4,
    name: "Mullet",
    hobby: "Cooking",
  },
];

let secondStudent = studentArray.find((ele) => {
  return ele.id === 2;
});

console.log(secondStudent);
