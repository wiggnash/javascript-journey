let shoppingCart = [
  ["Samsung S25", "Sony earphones", "AMD 9070 xt"],
  ["Orange Lays", "Doritos"],
];

console.log(shoppingCart[0][1]);

// nested loops
for (let i = 0; i < shoppingCart.length; i++) {
  for (let j = 0; j < shoppingCart.length; j++) {
    console.log(shoppingCart[i][j]);
  }
}
