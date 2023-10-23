const name = "Maha";
const repoCount = 50;

// console.log(name + repoCount + " Value"); its not a good method- so dint use tgis types of method

// console.log(`hello my name is ${name} and my repo count isd ${repoCount}`); Its a Good Method,

const gameName = new String("Maha-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("m"));

const newString = gameName.substring(0, 3);
// console.log(newString);

const anotherString = gameName.slice(-3, 0);
// console.log(anotherString);

const newStringOne = " hitesh ";
console.log(newStringOne);
// console.log(newStringOne.trim());  TRIM always remove space trimleft and trimright

const url = "https//hitesh.com/hitesh%20choudary";

console.log(url.replace("%20", "-"));

console.log(url.includes("maha"));

console.log(url.includes("hitesh"));

console.log(gameName.split("-"));
