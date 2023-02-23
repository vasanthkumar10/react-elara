// basics

// this basics

// this -> parent / creator (fn) -> this represents global obj

// function display() {
//   console.log(this);
// }

// const display = () => {
//   console.log(this);
// };

// display();

// parent -> obj

// const parentObj = {
//   name: "virat",
//   age: 36,
//   display: function () {
//     console.log("outer", this.name, this.age);
//     console.log("------------------------------------");
//     // function inner() {
//     //   console.log("inner -> global", this.name, this.age);
//     // }

//     const inner = () => {
//       console.log("inner -> global", this.name, this.age);
//     };

//     inner();
//   },
// };

// parentObj.display();

// function borrowing

let vasanth = {
  name: "vasanth",
  age: 20,
};

let biswas = {
  name: "biswas",
  age: 2,
};

let alwaz = {
  name: "alwaz",
  age: 5,
};

function display(place, country) {
  console.log(
    `My name is ${this.name} and my age is ${this.age}. My place is ${place}, ${country}`
  );
}

// function borrowing -> call, apply

// display.call(vasanth, "Chennai", "India");
// display.call(biswas, "Washington", "USA");

// display.apply(vasanth, ["Chennai", "India"]);

// bind
const vasanthData = display.bind(vasanth, "Chennai", "India");
// this.message = this.handleMessage.bind(this);
this.handleMessage = this.handleMessage.bind(this); // this => class properties
vasanthData();
vasanthData();
vasanthData();
