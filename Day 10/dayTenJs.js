const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

//LVL1
//1
console.log("LVL1");
console.log("Task 1");
const myNewSet = new Set();

//2
console.log("Task 2");
for (let i = 0; i <= 10; i++) {
  myNewSet.add(i);
}

console.log(myNewSet);

//3
console.log("Task 3");

myNewSet.delete(7);

console.log(myNewSet);

//4
console.log("Task 4");

myNewSet.clear();
console.log(myNewSet);

//5
console.log("Task 5");

const strArr = [
  "firstString",
  "secondString",
  "thirdString",
  "fourthString",
  "fifthString",
];

const myStringSet = new Set(strArr);
console.log(myStringSet);

//6
console.log("Task 6");

const countryMap = new Map();

countries.forEach((country) => {
  countryMap.set(country, country.length);
});

console.log(countryMap);

//LVL2
//1
console.log("LVL2");
console.log("Task 1");

let c1 = [...a, ...b];

console.log(c1);

//2
console.log("Task 2");

let A2 = new Set(a);
let B2 = new Set(b);

let c2 = a.filter((num) => B2.has(num));
let C2 = new Set(c2);

console.log(C2);

//3
console.log("Task 3");

let A3 = new Set(a);
let B3 = new Set(b);

let c3 = a.filter((num) => !B3.has(num));
let C3 = new Set(c3);

console.log(C3);

//LVL3
//1
console.log("LVL3");
console.log("Task 1");

import countries_data from "./countries_data.js";

function languageCount(array) {
  const languagesSet = new Set();

  array.forEach((country) => {
    country.languages.forEach((language) => {
      languagesSet.add(language);
    });
  });

  return languagesSet.size;
}

console.log(languageCount(countries_data));

console.log("Task 2");

function mostSpokenLanguages(array, count) {
  const languageCounts = new Map();

  array.forEach((country) => {
    country.languages.forEach((language) => {
      if (languageCounts.has(language) === true) {
        languageCounts.set(language, languageCounts.get(language) + 1);
      } else {
        languageCounts.set(language, 1);
      }
    });
  });

  const sortedLanguageCounts = Array.from(languageCounts.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  //const sortedMap = new Map(sortedLanguageCounts);

  const answer = sortedLanguageCounts.slice(0, count);

  return answer;
}

console.log(mostSpokenLanguages(countries_data, 10));
