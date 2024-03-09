(function (n) {
  console.log(n * n);
})(2); // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);

//
// function declaration

const sumAllNums = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173

//
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
  return n * n;
}

console.log(square(2)); // 4

const square2 = (n) => {
  return n * n;
};

console.log(square(2)); // -> 4

// if we have only one line in the code block, it can be written as follows, explicit return
const square3 = (n) => n * n; // -> 4

//DEFAULT
function generateFullName(firstName = "Asabeneh", lastName = "Yetayeh") {
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}

console.log(generateFullName());
console.log(generateFullName("David", "Smith"));

function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + " N"; // the value has to be changed to string first
  return weight;
}

console.log("Weight of an object in Newton: ", weightOfObject(100)); // 9.81 gravity at the surface of Earth
console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62)); // gravity at surface of Moon

const weightOfObject2 = (mass, gravity = 9.81) => mass * gravity + " N";

console.log("Weight of an object in Newton: ", weightOfObject(100)); // 9.81 gravity at the surface of Earth
console.log("Weight of an object in Newton: ", weightOfObject(100, 1.62)); // gravity at surface of Moon
