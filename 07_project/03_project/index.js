console.log("Mohsin");

const clock = document.getElementById("clock");
// document.querySelector("#clock"); both are doing same work

let date = new Date();
// console.log(date.toLocaleTimesString());
console.log(date.toLocaleTimeString());

setInterval(function () {
  let date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
