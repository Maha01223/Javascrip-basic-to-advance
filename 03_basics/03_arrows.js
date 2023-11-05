const User = {
  userName: "Mohsin",
  price: 999,

  WelcomeMessage: function () {
    console.log(`${this.userName} ,welcome to website`);
    console.log(this);
  },
};

// User.WelcomeMessage();
// User.userName = "Dan";
// User.WelcomeMessage();

// console.log(this);
// when you check you global this on node thats why it is always empty because you check global and if you check browser its a global window object its not empty

// function one() {
//   let username = "Mohsin";
//   console.log(this.username);
// }

// one();

// ++++++++++++++   OR

// const chai = function () {
//   let username = "Mohsin";
//   console.log(this.username);
// };

// chai();

// +++++++++++++++ OR

const chai = () => {
  let username = "Mohsin";
  console.log(this);
};

chai();

// () => {} thst called arrow function

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// { curle brases me return likhn ge hai}

// Implesitly return
// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2);
// paranthesis me return nahi likh hai

const addTwo = (num1, num2) => ({ username: "Mohsin" });
// ({ username: "Mohsin" }); object return ke liye parenthesis me rape krna he padhe ga

console.log(addTwo(3, 5));
