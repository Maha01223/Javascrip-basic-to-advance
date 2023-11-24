// foreach loop

const coding = ["js", "rb", "py", "java", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });

// Arrow function

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, value, arr) => {
//   console.log(item, value, arr);
// });

const mYcoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "pyhton",
    languageFileName: "py",
  },
];

mYcoding.forEach((item) => {
  console.log(item.languageName);
});
