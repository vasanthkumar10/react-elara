// // basics

// // this basics

// // this -> parent / creator (fn) -> this represents global obj

// // function display() {
// //   console.log(this);
// // }

// // const display = () => {
// //   console.log(this);
// // };

// // display();

// // parent -> obj

// // const parentObj = {
// //   name: "virat",
// //   age: 36,
// //   display: function () {
// //     console.log("outer", this.name, this.age);
// //     console.log("------------------------------------");
// //     // function inner() {
// //     //   console.log("inner -> global", this.name, this.age);
// //     // }

// //     const inner = () => {
// //       console.log("inner -> global", this.name, this.age);
// //     };

// //     inner();
// //   },
// // };

// // parentObj.display();

// // function borrowing

// let vasanth = {
//   name: "vasanth",
//   age: 20,
// };

// let biswas = {
//   name: "biswas",
//   age: 2,
// };

// let alwaz = {
//   name: "alwaz",
//   age: 5,
// };

// function display(place, country) {
//   console.log(
//     `My name is ${this.name} and my age is ${this.age}. My place is ${place}, ${country}`
//   );
// }

// // function borrowing -> call, apply

// // display.call(vasanth, "Chennai", "India");
// // display.call(biswas, "Washington", "USA");

// // display.apply(vasanth, ["Chennai", "India"]);

// // bind
// const vasanthData = display.bind(vasanth, "Chennai", "India");
// // this.message = this.handleMessage.bind(this);
// this.handleMessage = this.handleMessage.bind(this); // this => class properties
// vasanthData();
// vasanthData();
// vasanthData();

// ways to create object

// let vasanth = {
//   name: "vasanth",
//   age: 10,
//   place: "chennai",
// };

// let naveen = {
//   name: "naveen",
//   age: 21,
//   place: "mathura",
// };

// let alwaz = {
//   name: "alwaz",
//   age: 21,
//   place: "canada",
// };

// factory function
// function createPerson(name, age, place) {
//   return { name, age, place };
// }

// let vasanth1 = createPerson("vasanth1", 10, "chennai");
// let naveen1 = createPerson("naveen1", 21, "mathura");
// let alwaz1 = createPerson("alwaz1", 21, "canada");

// constructor method

// function Person(name, age, place) {
//   //   console.log(this);
//   this.name = name;
//   this.age = age;
//   this.place = place;
// }

// In Javascript -> class is a syntactic sugar of constructor function
// class Person {
//   constructor(name, age, place) {
//     //   console.log(this);
//     this.name = name;
//     this.age = age;
//     this.place = place;
//   }
// }

// let vasanth = new Person("vasanth", 10, "chennai");
// let zakir = new Person("zakir", 5, "kolkata");
// console.log(vasanth, zakir);

// callback
// Promises, microtaskqueue
// async await
// closures -> a function binds with lexical environment
// function parentFn() {
//   let age = 10;
//   let num = 100;

//   return function () {
//     console.log("checking", age, num);
//   };
// }

// let child = parentFn();

// child();

// function parentfn() {
//   let counter = 1;
//   return function display() {
//     if (counter % 3 === 0) console.log("checking");
//     console.log(counter);
//     counter++;
//   };
// }

// let display = parentfn();

// display();
// display();
// display();
// display();
// display();
// display();

// function getCredentials(person) {
//   // API call to get credentials
//   let username = "vasanth";
//   let password = 1234;

//   return function () {
//     let credential = { username, password };
//     return credential;
//   };
// }

// let vasanthCredentials = getCredentials("vasanth");
// console.log(vasanthCredentials());

// prototypes
// prototype -> parent
// object properties

// let obj = {
//   name: "vasanth",
//   age: 10,
// };

// let nums = [1, 2, 3];
// nums.__proto__ = obj;

// // Array -> length
// // console.log(nums.name, nums.age);
// console.log(nums.map((num) => num * 2));

// let person = {
//   name: "vasanth",
// };

// Object.freeze(person);
// person["age"] = 10;

// Object.defineProperty(person, "age", {
//   value: 10,
//   writable: false,
// });

// person["name"] = "kalpesh";
// person["age"] = 30;

// console.log(person.name, person.age);

// polyfills

// let nums = [1, 2, 3];
// let sqNums = nums.map(function (num, index, arr) {
//   console.log(num, index, arr);
//   return num ** 2;
// });

// Array.prototype.myMap = function (callbackfn) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(callbackfn(this[i], i, this));
//   }
//   return newArr;
// };

// let sqNums = nums.myMap(function (num, index, arr) {
//   console.log("num", num, "index", index, "arr", arr);
//   return num * 2;
// });

// console.log(sqNums);

// Array.prototype.myFilter = function (callbackfn) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callbackfn(this[i], i, this)) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// };

// let nums = [1, 2, 3, 4, 5];
// // console.log(
// //   nums.filter((num, index, arr) => {
// //     console.log(num, index, arr);
// //     return num > 2;
// //   })
// // );

// console.log(
//   nums.myFilter((num, index, arr) => {
//     console.log(num, index, arr);
//     return num > 2;
//   })
// );

// Reducer
const nums = [1, 2, 3, 4, 5];
// const sum = nums.reduce((accumulator, current, index, arr) => {
//   console.log(
//     `accumulator - ${accumulator}, current - ${current} ${index} ${arr}`
//   );
//   return accumulator + current;
// }, 10);

// console.log(sum);

// Array.prototype.myReduce = function (callbackfn, initialValue) {
//   let accumulator = initialValue;
//   for (let i = 0; i < this.length; i++) {
//     if (accumulator !== undefined) {
//       accumulator = callbackfn(accumulator, this[i], i, this);
//     } else {
//       accumulator = this[i];
//     }
//   }

//   return accumulator;
// };

// const sum = nums.myReduce((acc, curr, i, arr) => {
//   console.log(acc, curr, i, arr);
//   return acc + curr;
// });

// console.log("sum", sum);

const arr = [
  {
    title: "vasanth",
    description: "mystic force",
  },
  {
    title: "kumar",
    description: "dino thunder",
  },
  {
    title: "power rangers",
    description: "ninja storm",
  },
  {
    title: "rangers",
    description: "jungle force",
  },
];

let sortedArr = arr.sort((a, b) => a.description.localeCompare(b.description));
console.log(sortedArr);
