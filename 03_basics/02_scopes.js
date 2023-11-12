// var c = 3000; // we do not use var
let a = 1000; // its global scope

if (true) {
  // its a block scope

  let a = 10;
  const b = 20;
  //   console.log("Inner:", a);
}

// console.log(a);
// console.log(b);
// console.log(c); iska out put aaye ga global ho kr bhe isme hum VAR use nahi krte hai
// ++++++++ nested ++++
function one() {
  const username = "Mohsin";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);
  //   two();
}

// one();

if (true) {
  const username = "Mohsin";
  if (username === "Mohsin") {
    const website = " youtube";
    console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

// +++++++++++++++++intresting++++++++++++++

// console.log(addone(5));  // sirf function ko aise print kr skte hai
function addone(num) {
  return num + 1;
}

//++++++++++++++OR+++++++++++++++++++++

// console.log(addTwo(6)); // variable function jis me koi function add ho uss ko aise print he kr skte
const addTwo = function (num) {
  return num + 2;
};

// console.log(addTwo(6));

// Javascript Execution context
// { } this is a global EExecution context

// now
