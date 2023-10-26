const Arry = [50, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //  index is zero on javascript, its means starting 0 se hoge like that {0,1,2,3,4 ....} tis is a index valve

const myHeros = ["shaktiman", "salmankhan", "dharminder"]; // array aise form me bhe likh skte hai

const Arry2 = new Array(1, 2, 3, 4); // rray aise form me bhe likh skte hai there is 3 way to write ARRAY

// console.log(Arry[0]);
// console.log(Arry.length, Arry2.length, myHeros.length);

// +++++++++++++++++++Array Method ++++++++++++++++++++++++++

Arry.push(30); // push mean " add the value on end in original array"

// Arry.pop(); // last wala array  remove kr dete hai

// Arry.unshift(20); //start me new valve ko add krna

// Arry.shift(); // start ke valve ko remove krna

// console.log(Arry.includes(9)); //this array is use to ask any question? agr hai to "true" agr nagi hai toh "false"

// console.log(Arry.indexOf(10)); // this array is used to check vo valve hai ke nahi agr hai to us ka index no btaa dega agr agr nahi hai tohb "negative me valve -1" show krega,

const newArr = Arry.join(); //when ever we use join method isme array first waala waahi rahega but jo new create kiya hai uss ka "typeof" change ho jaye ga "string" me, aur vo normal he output aaye ga like that 50,0,1,2,3..

// console.log(newArr);
// console.log(typeof newArr); // check type of array
// console.log(Arry);

//++++++ Slice and Splice Method ++++++++++++++++++++++++++

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(array); // array
// console.log(array.length); // 10
// console.log(typeof array); // object

// slice Method +++++

// console.log("A", array);
const myn1 = array.slice(1, 3); // isme 1 se 3 ke beach ke valve lege but jaise ke 1,2 onlu 3 count nahi krege, aur ye slice apna original array bhe change nagi krta hai,
// console.log(myn1);

//  splice Method ++++++++

// console.log("B", array);
const myn2 = array.splice(1, 3); // isme 1 se 3 tak lege jaise (1,2,3) but isme splice apna original array se valve nikal kr output deta hai
// console.log("C", array);
// console.log(myn2);
