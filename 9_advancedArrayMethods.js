let array = [1, 2, 3, 4, 5, 56, 67];
console.log("Array before splice : ", array);
let resultArray = array.splice(1, 3);
console.log("Array after splice : ", array);
console.log("deleted elements : ", resultArray);

array.splice(1, 0, 2, 3, 4);
console.log("insert using splice : ", array);

array.splice(1, 3, 22, 33, 44);
console.log("replace method : delete and insert together : ", array);

let newArray = array.slice(1, 4);
console.log("sliced array : ", newArray);
