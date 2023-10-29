// Singleton
// that a constructor method to create singleton

// Object.create

//object literals // keys define and valve valve define but Array me nahi kr skte key define

const mySym = Symbol("key"); // intrview question symbol ko [] is bracket me lete hai vrna output to aaye ga but string me aaye ga.

const Jsuser = {
  name: "Mohsin",
  "full name": "Mohsin Ansari",
  [mySym]: "key1",
  Age: 25,
  email: "maha0122333@gmail.com",
  location: "Mumbai",
  //   isloggedIn: false,
  //   lastLoginDays:["monday", "tuesday", "wednesday"]
};

// console.log(Jsuser.email); //this is not a good method
// console.log(Jsuser["email"]); this is good method
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser[mySym]);

Jsuser.email = "mohsin.ansari0122333333333@gmail.com";
// console.log(Jsuser["email"]);

// Object.freeze(Jsuser);

Jsuser.email = "ajju0122@gmail.com";

// console.log(Jsuser);

Jsuser.greeting = function () {
  console.log("Hello JS User");
};

Jsuser.greetingTwo = function () {
  console.log(`Hello JS User ${this.name}`); // add krne me ye best way haui
};

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
