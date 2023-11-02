function SayMyName() {
  console.log("M");
  console.log("O");
  console.log("H");
  console.log("S");
  console.log("I");
  console.log("N");
}

// SayMyName; // Referenece

// SayMyName(); //Exicution

// function addTwoNumber(number1, number2) {
//   // do number hai bracket me isko bolte  hai parameter
//   console.log(number1 + number2);
// }

// addTwoNumber(3, 5); // [isme koi valve pass krate hai toh  bolte hai  argument]
// // addTwoNumber(3, "5");
// // addTwoNumber(3, null);

function addTwoNumber(number1, number2) {
  // let result = number1 + number2;
  // return result; //return krne ke baad isme console.log krege to undefine btaaye ga because result ke baad print nahi hoga , sirf usse palhe he hoga
  // or

  return number1 + number2;
}

const result = addTwoNumber(3, 5);
// console.log("result", result);

function loginUserMessage(userName) {
  if (userName === undefined) {
    console.log("please enter a username");
    return;
  }
  return `${userName} Just logged In`;
}

// console.log(loginUserMessage("Mohsin"));
console.log(loginUserMessage());
