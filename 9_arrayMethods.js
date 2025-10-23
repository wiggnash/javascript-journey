let array = [1, 2, 3];

let areas = array.map((ele) => Math.PI * ele * ele);
console.log(areas);

let filteredAreas = areas.filter((area) => area > 5);
console.log(filteredAreas);

let finalSum = filteredAreas.reduce((total, ele) => (total += ele), 0);
console.log(finalSum);
