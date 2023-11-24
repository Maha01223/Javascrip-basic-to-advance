// forin loop
const mYObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  swift: "swift bt apple",
};

for (const key in mYObject) {
  //   console.log(mYObject[key]);
  //   console.log(`${key} shortCut is  for ${mYObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const i in programming) {
  console.log(programming[i]);
}
