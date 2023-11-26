//  Filter Method
const coding = ["js", "rb", "py", "java", "cpp"];

// const value = coding.forEach((item) => {
//   console.log(item);
//   return item; valve return nahi krta hai foreach loop
// });

// // console.log(value);

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // const newArr = newNums.filter((num) => num > 4);
// const newArr = newNums.filter((num) => {
//   return num > 4;
// });
// console.log(newArr);

// const myNums = [];

// newNums.forEach((num) => {
//   if (num > 4) {
//     myNums.push(num);
//   }
// });

// console.log(myNums);

const books = [
  {
    title: "Book one",
    genre: "Fiction",
    publish: "1981",
    edition: 2004,
  },
  {
    title: "Book two",
    genre: "non-Fiction",
    publish: "1992",
    edition: 2008,
  },
  {
    title: "Book three",
    genre: "History",
    publish: "1999",
    edition: 2007,
  },
  {
    title: "Book four",
    genre: "non-Fiction",
    publish: "1989",
    edition: 2010,
  },
  {
    title: "Book five",
    genre: "Fiction",
    publish: "1981",
    edition: 2006,
  },
  {
    title: "Book six",
    genre: "Science",
    publish: "1991",
    edition: 2005,
  },
  {
    title: "Book seven",
    genre: "Fiction",
    publish: "1995",
    edition: 2004,
  },
  {
    title: "Book eight",
    genre: "history",
    publish: "1921",
    edition: 2009,
  },
  {
    title: "Book nine",
    genre: "history",
    publish: "1991",
    edition: 2012,
  },
  {
    title: "Book ten",
    genre: "physics",
    publish: "1961",
    edition: 2023,
  },
];

let userBooks = books.filter((item) => item.genre === "non-Fiction");
userBooks = books.filter((bk) => {
  return bk.publish >= 1991 && bk.genre === "history";
});

console.log(userBooks);
