const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const myNums = myNumbers.map((item) => item + 10);

//  It's a chaining method map method me sab return hota hai but filter method me sirf true or false he bss
const myNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(myNums);
