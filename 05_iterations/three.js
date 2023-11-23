//  for of
//  ["", "", ""]
//  [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5];

// for (const Number of arr) {
//   console.log(Number);
// }

// const greetings = "Hello World";
// for (const greet of greetings) {
//   console.log(`Each char is ${greet}`);
// }

//  Map

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("In", "India");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(key, ":-", value);
}

const myObject = {
  game: "NFS",
  game1: "Spiderman",
};

// console.log(myObject);
// object me forof method is not working, its on;y forin is working

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }

const mYObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift bt apple",
};

for (const key in mYObject) {
  console.log(key);
}
