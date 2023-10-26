const marvel_heros = ["thor", "ironman", "spiderman"];

const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); //ye use krte se dc_heros marvel_heros ke array me as a element add hue hai it means ye kise ko bhe as a element add kr skte hai

// console.log(marvel_heros);  output  [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3]); output   [ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]); output   flash

//  concat Method
//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

//const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros); // output [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// +++++++++++++++++  OR Both are same work ++++++++++++++++++++++++
// spread Method

//const allheros = [...marvel_heros, ...dc_heros];
// console.log(allheros); // outout [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//   +++++++++++++ Flat Method ++++++++++++++
// The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

const another_array = [
  1,
  2,
  3,
  [4, 5, 6, 7],
  8,
  [9, 10, 11],
  12,
  [13, 20, 21, 22],
  14,
  15,
  [16, 17, [(18, 19)]],
];

const new_another_array = another_array.flat(Infinity);
// console.log(new_another_array);

// ++++++++++++ IsArray +++++++++++++
// console.log(Array.isArray("mohsin")); // The Array.isArray() static method determines whether the passed value is an Array.

//  ++++++++++++++++ from ++++++++++++
// console.log(Array.from("Mohsin")); // The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// console.log(Array.from({ name: "mohsin" }));  // intersting because it not convert you just give path ke convert kis ko krna hai

// example
let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;
let score5 = 500;

console.log(Array.of(score1, score2, score3, score4, score5));
