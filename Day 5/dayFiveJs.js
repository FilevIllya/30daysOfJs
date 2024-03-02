//LVL1
//1
const EmptyArray = [];

//2
const tenElemArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//3
console.log(tenElemArr.length);

//4
let firstItem = tenElemArr[0];
let middleItem = tenElemArr[parseInt(tenElemArr.length / 2)];
let lastItem = tenElemArr[tenElemArr.length - 1];
console.log(firstItem);
console.log(middleItem);
console.log(lastItem);

//5
const mixDataTypes = ["Illiya", 20, true, "happy", -1];
console.log(mixDataTypes.length);

//6

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//7
console.log(itCompanies);

//8
console.log("Number of companies is: " + itCompanies.length);

//9
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[parseInt(itCompanies.length / 2)];
let lastCompany = itCompanies[itCompanies.length - 1];
console.log(firstCompany);
console.log(middleCompany);
console.log(lastCompany);

//10
console.log(`${itCompanies[0]}`);
console.log(`${itCompanies[1]}`);
console.log(`${itCompanies[2]}`);
console.log(`${itCompanies[3]}`);
console.log(`${itCompanies[4]}`);
console.log(`${itCompanies[5]}`);

//11
console.log(`${itCompanies[0].toUpperCase()}`);
console.log(`${itCompanies[1].toUpperCase()}`);
console.log(`${itCompanies[2].toUpperCase()}`);
console.log(`${itCompanies[3].toUpperCase()}`);
console.log(`${itCompanies[4].toUpperCase()}`);
console.log(`${itCompanies[5].toUpperCase()}`);

//12
console.log(
  `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]} and ${itCompanies[5]} are big IT companies.`
);

//13
function searchITCompany(company) {
  let result;
  switch (company) {
    case itCompanies[0]:
      result = itCompanies[0];
      break;
    case itCompanies[1]:
      result = itCompanies[1];
      break;
    case itCompanies[2]:
      result = itCompanies[2];
      break;
    case itCompanies[3]:
      result = itCompanies[3];
      break;
    case itCompanies[4]:
      result = itCompanies[4];
      break;
    case itCompanies[5]:
      result = itCompanies[5];
      break;
    default:
      result = "is not found";
  }
  return result;
}

// let myCompany = prompt("Enter your company", "");
// console.log(searchITCompany(myCompany));

//14
//-------------

//15
console.log(itCompanies.sort());

//16
console.log(itCompanies.reverse());

//17
console.log(itCompanies.slice(0, 3));

//18
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));

// //19
console.log(
  itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1)
);

//20
console.log(itCompanies);
itCompanies.shift();
console.log(itCompanies);

//21
if (itCompanies.length % 2 === 0) {
  itCompanies.splice(itCompanies.length / 2 - 1, 2);
} else {
  itCompanies.splice(itCompanies.length / 2, 1);
}

console.log(itCompanies);

//22
itCompanies.pop();
console.log(itCompanies);

//23
itCompanies.splice();
console.log(itCompanies);

//LVL2
//1
import countries from "./countries.js";
import webTechs from "./webTechs.js";

console.log("LVL2");
console.log(countries);
console.log(webTechs);

//2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

text = text.replace(/[^\w\s]/g, "");
console.log(text);

const words = text.split(" ");
console.log(words);
console.log(words.length);

//3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (shoppingCart[0] !== "Meat") {
  shoppingCart.unshift("Meat");
}

if (shoppingCart[shoppingCart.length - 1] !== "Sugar") {
  shoppingCart.push("Sugar");
}

if (shoppingCart.indexOf("Honey") !== -1) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}

if (shoppingCart.indexOf("Tea") !== -1) {
  shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
}

console.log(shoppingCart);

//4
if (countries.indexOf("Ethiopia") !== -1) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

//5
if (webTechs.indexOf("Sass") !== -1) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Saas");
  console.log(webTechs);
}

//6
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

//LVL3
//1
console.log("LVL 3");
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//1.1
ages.sort();
console.log(ages);
console.log(`Min: ${ages[0]}, max: ${ages[ages.length - 1]}`);

//1.2
if (ages.length % 2 === 0) {
  console.log(
    `Median age is ${(ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2}`
  );
} else {
  console.log(`Median age is ${ages[ages.length / 2]}`);
}

//1.3
let avrg =
  (ages[0] +
    ages[1] +
    ages[2] +
    ages[3] +
    ages[4] +
    ages[5] +
    ages[6] +
    ages[7] +
    ages[8] +
    ages[9]) /
  10;

console.log(`Avarage is: ${avrg}`);

//1.4
console.log(`Max - min = ${ages[ages.length - 1] - ages[0]}`);

//1.5
console.log(`min - avarge = ${Math.abs(ages[0] - avrg)}`);
console.log(`max - avarge = ${Math.abs(ages[ages.length - 1] - avrg)}`);

//2
console.log(countries.slice(0, 10));

//3
console.log(countries[parseInt(countries.length / 2)]);

//4
let firstHalf;
if (countries.length % 2 === 0) {
  firstHalf = countries.slice(0, parseInt(countries.length / 2));
} else {
  firstHalf = countries.slice(0, parseInt(countries.length / 2 + 1));
}

let secondHalf = countries.slice(-parseInt(countries.length / 2));
console.log(firstHalf);
console.log(secondHalf);
