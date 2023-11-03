// var c = 3000; // we do not use var
let a = 1000; // its global scope

if (true) {
  // its a block scope
  let a = 10;
  const b = 20;
  console.log("Inner:", a);
}

console.log(a);
// console.log(b);
