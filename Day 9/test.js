// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2;
};

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}

console.log(cube(callback, 3));

////////////////////////////////////////////////////
// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

//Foreach

console.log("Foreach");
const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  const callback = function (element) {
    sum += element;
  };
  arr.forEach(callback);
  return sum;
};
console.log(sumArray(numbers));

//same as

const numbers2 = [1, 2, 3, 4];

const sumArray2 = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArray(numbers2));

//TIMER

function sayHello() {
  console.log("Hello");
}
//setInterval(sayHello, 1000); // it prints hello in every second, 1000ms is 1s

//Setting a time using a setTimeout
function sayHello2() {
  console.log("Hello");
}
//setTimeout(sayHello2, 2000); // it prints hello after it waits for 2 seconds.

///Functional Programming
console.log("Foreach");

// arr.forEach(function (element, index, arr) {
//   console.log(index, element, arr);
// });

// // The above code can be written using arrow function
// arr.forEach((element, index, arr) => {
//   console.log(index, element, arr);
// });

// // The above code can be written using arrow function and explicit return
// arr.forEach((element, index, arr) => console.log(index, element, arr));

let sum = 0;
const numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach((num) => console.log(num));

numbers3.forEach((num) => (sum += num));
console.log(sum);

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries.forEach((element) => console.log(element.toUpperCase()));

//MAP
const numbers4 = [1, 2, 3, 4, 5];
const numbersSquare = numbers4.map((num) => num * num);

console.log(numbersSquare);

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);

const countries2 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const countriesToUpperCase = countries2.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

const countriesFirstThreeLetters = countries2.map((country) =>
  country.toUpperCase().slice(0, 3)
);

console.log(countriesFirstThreeLetters);

//Filter
//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

const countriesEndsByia = countries2.filter((country) =>
  country.endsWith("ia")
);
console.log(countriesEndsByia);

const countriesHaveFiveLetters = countries2.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

//REDUCE (for sum or something like this)
console.log("Reduce");
const numbers5 = [1, 2, 3, 4, 5];
const sum5 = numbers5.reduce((acc, cur) => acc + cur, 0);

console.log(sum5);

//every
const names2 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = names2.every((name) => typeof name === "string"); // Are all strings?

console.log(areAllStr);

//find
console.log("FIND");
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age < 20);

console.log(age);

const names3 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const result = names3.find((name) => name.length > 7);
console.log(result);

const scores2 = [
  { name: "Asabeneh", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const score2 = scores2.find((user) => user.score > 80);
console.log(score2);

//findIndex
console.log("FindIndex");

const names6 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const ages6 = [24, 22, 25, 32, 35, 18];

const result6 = names6.findIndex((name) => name.length > 7);
console.log(result6); // 0

const age6 = ages.findIndex((age) => age < 20);
console.log(age6); // 5

//some
console.log("some"); //some "if"

const names7 = ["Asabeneh", "Mathias", "Elias", "Brook"];
const bools7 = [true, true, true, true];

const areSomeTrue = bools7.some((b) => b === true);

console.log(areSomeTrue); //true

//sort
console.log("sort");
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

//sort Numbers

const Snumbers = [9.81, 3.14, 100, 37];
// Using sort method to sort number items provide a wrong result. see below
console.log(Snumbers.sort()); //[100, 3.14, 37, 9.81]
Snumbers.sort(function (a, b) {
  return a - b;
});

console.log(Snumbers); // [3.14, 9.81, 37, 100]

Snumbers.sort(function (a, b) {
  return b - a;
});
console.log(Snumbers); //[100, 37, 9.81, 3.14]

//SORT OBJECT
console.log("SORT OBJECTS");

objArr.sort(function (a, b) {
  if (a.key < b.key) return -1;
  if (a.key > b.key) return 1;
  return 0;
});

// or

objArr.sort(function (a, b) {
  if (a["key"] < b["key"]) return -1;
  if (a["key"] > b["key"]) return 1;
  return 0;
});

const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // sorted ascending
// [{…}, {…}, {…}, {…}]
