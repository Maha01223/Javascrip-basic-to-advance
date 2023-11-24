// const coding = ["js", "rb", "py", "java", "cpp"];

// const value = coding.forEach((item) => {
//   console.log(item);
//   //  return item;
// });

// // console.log(value);

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const newArr = newNums.filter((num) => num > 4);
// const newArr = newNums.filter((num) => {
//   return num > 4;
// });
// console.log(newArr);

const myNums = [];

newNums.forEach((num) => {
  if (num > 4) {
    myNums.push(num);
  }
});

console.log(myNums);
