// Reduce Method
const myNums = [1, 2, 3, 4, 5];

// const mytotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval:  ${currval}`);
//   return acc + currval;
// }, 0);

const mytotal = myNums.reduce((acc, cur) => acc + cur, 0);
console.log(mytotal);

const shoppingCard = [
  {
    iteamName: "js course",
    price: 2999,
  },
  {
    iteamName: "python course",
    price: 6999,
  },
  {
    iteamName: "java course",
    price: 5999,
  },
  {
    iteamName: "data science course",
    price: 12999,
  },
  {
    iteamName: "web development",
    price: 9999,
  },
];

const total = shoppingCard.reduce((acc, item) => acc + item.price, 0);
console.log(total);
