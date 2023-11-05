// Immeditely Invoked function Experession (IIFE)
function one() {
  console.log(`DB CONNECTED`);
}
// one(); // what is iife? jo function immediate exicute ho jaaye.

// global score ke polution se problem hoti hai kaye baar uss global score ke varible hai ya jo bhe decleration hai uss ke polution ko hatane ke liye IIFE use krte hai

// IIFE method

// (function one() {
//   console.log(`DB CONNECTED`);
// })();

// Both Are Same

// (() => {
//   console.log(`DB CONNECTED`);
// })();
