// +++++++++++++++++++++++++++++    Dates  ++++++++++++++++++++++++++

let myDate = new Date();

console.log(myDate.toString()); // output Wed Oct 25 2023 16:20:22 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // output Wed Oct 25 2023
console.log(myDate.toLocaleDateString()); // output 25/10/2023
console.log(myDate.toLocaleTimeString()); //output 4:20:22 pm
console.log(myDate.toISOString()); //output 2023-10-25T10:50:22.921Z
console.log(myDate.toJSON()); //output 2023-10-25T10:50:22.921Z

// let myCreatedDate = new Date(2023, 0, 25); output 2023-01-24T18:30:00.000Z
//let myCreatedDate = new Date(2023, 0, 25, 5, 6);
// let myCreatedDate = new Date("2023-01-23"); //ddyy me month 1 se start hota hai,
let myCreatedDate = new Date("01-12-2023");
// month zero se start hote hai javascript me.
// console.log(myCreatedDate); output 2023-01-24T18:30:00.000Z // date define nahi kr paa rhe yaha so use datesrring,
// console.log(myCreatedDate.toDateString()); // output Wed Jan 25 2023
//console.log(myCreatedDate.toLocaleString()); // 25/1/2023, 5:06:00 am

// console.log(myCreatedDate.toLocaleString()); outout 12/1/2023, 12:00:00 am

// ++++++++++++++++          TimeSTamp        ++++++++++++++++++++++++++++++++++++++

let myTimeStamp = Date.now();

//console.log(myTimeStamp); //milesec wale shoW hoge
// console.log(myCreatedDate.getTime()); // get.time use krne se normal date 01-12-2023 ko milesec me covert krdega onlu for compare

//console.log(Math.floor(Date.now() / 1000)); // sec me convert krne ke liye 1000 "/" krte hai to dogit decimal me aate hai isliye math.floor ka function use krke us ko decimal walve ko remove krte hai,

// console.log(myDate.getDay());

let newDate = new Date();

console.log(myDate.getDate());

console.log(newDate.toLocaleString());

// newDate.toLocaleString("default", {
//   weekday: "long",
// });
