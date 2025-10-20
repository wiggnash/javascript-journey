let globalVariable = "GlobalVariable";
console.log("global variable access outside : ", globalVariable);

function scopeFunction() {
  let functionalVariable = "FunctionalVariable";
  console.log(
    "global variable is accessed inside the function : ",
    globalVariable,
  );
  console.log(
    "variable decalared in the function used inside the function : ",
    functionalVariable,
  );
}

scopeFunction();

if (true) {
  console.log(
    "Global variable is accessed inside the block : ",
    globalVariable,
  );
}

// block
{
  // let blockVariable = "BlockVariable";
  var blockVariable = "BlockVariable";
  console.log(
    "anon block where global variable is accessed : ",
    globalVariable,
  );
}

console.log(
  "accessing block scoped variable outside the block : ",
  blockVariable,
);

let array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {}

console.log(i);

// for (var i = 0; i < array.length; i++) {}

// console.log(i);
