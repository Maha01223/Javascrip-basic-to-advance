//  IF
//  true  condition hai to true me  code execute hoga, 2=="2"
// false condition hai toh code execute nahi hoga, 2=== "2"

if (true) {
}

if (false) {
}
// <,>, <=, >=, == , ===,

// example

const isUserloggedIn = true;
const temp = 41;

if (temp < 51) {
  //   console.log("less then 50");
}

// console.log("greater then 50");

// dono he exicute hoge aise me

// if (temp === 40) {
//   console.log("less then 50");
// } else {
//   console.log("greater than 50");
// }

// console.log("exicute");

// const scope = 200;
// if (scope > 100) {
//   let power = "fly";
//   console.log(`user power : ${power}`);
// }

// console.log(`user power : ${power}`);

// var is a completely global thats why we dont use

const balance = 1000;
// if (balance > 500) console.log("test");

// thats call short thunder properties

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 950) {
  console.log("less than 950");
} else {
  console.log("less than 1200");
}
