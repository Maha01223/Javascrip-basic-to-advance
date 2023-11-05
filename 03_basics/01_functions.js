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

function addTwoNumber(number1, number2) {
  //   // do number hai bracket me isko bolte  hai parameter
  //   console.log(number1 + number2);
}

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
// console.log(loginUserMessage());

// ...num1 its called rest operator and spread method

function calculateCardPrice(...num1) {
  return num1;
}

// console.log(calculateCardPrice(200, 300, 500, 600, 700, 800)); // sirf ...num1 dene se pure valve ek array me aa jaate hai

//or

function calculateCardPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCardPrice(200, 300, 500, 600, 700, 800)); // ye senirio me 200 valve1 me gye aur 300 valve2 me gye aur 500 se 800 tak jo valve hai vo array me aa gye aisa kab hoga jab hum val1,val2, ..num1 use krege

const User = {
  userName: "MOhsin",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.userName} and price is ${anyobject.price}`
  );
}

// handleObject(User);

// or

handleObject({
  userName: "Mohsin",
  price: 399,
});

const myNewArray = [200, 300, 500, 800];

function returnSecondValve(getArray) {
  return getArray[3];
}

// console.log(returnSecondValve(myNewArray));

//or
console.log(returnSecondValve([400, 500, 800, 10000]));
