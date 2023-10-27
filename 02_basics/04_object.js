// singleton say in other word constructors

// const tinderUser = new Object(); // singleton object

//or both way to correct

const tinderUser = {}; // non singleton object

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.inLoggedIN = false;

// console.log(tinderUser);

const regularUser = {
  email: "maha@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Mohsin",
      Lastname: "Ansari",
    },
  },
};
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "mahi", 2: "Maha" };
const obj2 = { 3: "dani", 4: "dan" };

// const obj3 = { obj1, obj2 };

// const obj3 = Object.assign(obj1, obj2);
const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

const users = [
  {
    id: "1",
    email: "mahi122@gmail.com",
  },

  {
    id: "1",
    email: "mahi122@gmail.com",
  },

  {
    id: "1",
    email: "mahi122@gmail.com",
  },

  {
    id: "1",
    email: "mahi122@gmail.com",
  },
];

// console.log(users[1].email);
// console.log(users);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("inLoggedIN"));
// console.log(tinderUser.hasOwnProperty("LoggedIN"));

const course = {
  courseName: "Javascript In Hindi",
  Price: "4999",
  courseInstructor: "Mohsin",
};

// console.log(course.courseInstructor);

const { courseInstructor: Instructor } = course;
console.log(Instructor);

// const nav = ({ company }) => {};  // deconstructed in react

// nav((company = "Mohsin"));
