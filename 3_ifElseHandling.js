function findSmallest(a, b, c) {
  if (a < b && a < c) return a;
  else if (b < a && b < c) return b;
  else return c;
}

const a = 70;
const b = 20;
const c = 10;
const result = findSmallest(a, b, c);
console.log(result);
