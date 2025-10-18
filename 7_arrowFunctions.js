// function declaration syntax
function funDeclarationSyntax(a, b) {
  return a + b;
}

// function expression syntax
const funExpressionSyntax = function (a, b) {
  return a + b;
};

// arrow function syntax
const funArrowSyntax = (a, b) => {
  return a + b;
};

const funArrowAdd = (a, b) => a + b;

function checkEven(a, b) {
  if (a % 2 === 0 && b % 2 === 0) return true;
  else return false;
}

const checkEvenArrow = (a, b) => a % 2 === 0 && b % 2 === 0;
const arrowOneParam = (a) => console.log(a);

funDeclarationSyntax(1, 2);
funExpressionSyntax(1, 2);
funArrowSyntax(1, 2);
