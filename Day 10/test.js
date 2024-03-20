//empty set

const emptyset = new Set();
console.log(emptyset);

//set from array

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

for (const language of setOfLanguages) {
  console.log(language);
}

//adding element to set

const companies = new Set(); // creating an empty set
console.log(companies.size); // 0

companies.add("Google"); // add element to the set
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
companies.add("Google");
companies.add("Google");
companies.add("Google");
companies.add("Google");
console.log(companies.size); // 5 elements in the set
console.log(companies);

//delete
console.log(companies.delete("Google"));
console.log(companies.size); // 4 elements left in the set

//Checking
console.log(companies.has("Apple")); // false
console.log(companies.has("Facebook")); // true

//clear
companies.clear();

//EXAMPLE
console.log("EXAMPLE");
const langSet = new Set(languages);
console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size); // 4

const counts = [];
const count = {};

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l);
  console.log(filteredLang); // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length });
}
console.log(counts);

//EXAMPLE 2
console.log("EXAMPLE 2");

const numbers = [5, 3, 2, 5, 5, 9, 4, 5];
const setOfNumbers = new Set(numbers);

console.log(setOfNumbers);

//UNION
console.log("UNION");
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);

//Intersection (cross)
console.log("Intersection");
let a1 = [1, 2, 3, 4, 5];
let b1 = [3, 4, 5, 6];

let A1 = new Set(a1);
let B1 = new Set(b1);

let c1 = a.filter((num) => B1.has(num));
let C1 = new Set(c1);

console.log(C1);

//Difference (A \ B))
console.log("Difference");

let a2 = [1, 2, 3, 4, 5];
let b2 = [3, 4, 5, 6];

let A2 = new Set(a2);
let B2 = new Set(b2);

let c2 = a.filter((num) => !B2.has(num));
let C2 = new Set(c2);

console.log(C2);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//MAP
console.log("MAP");
const emptymap = new Map();
console.log(emptymap);

//Map from array
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const map = new Map(countries);
console.log(map);
console.log(map.size);

//Add

const countriesMap = new Map();
console.log(countriesMap.size); // 0
countriesMap.set("Finland", "Helsinki");
countriesMap.set("Sweden", "Stockholm");
countriesMap.set("Norway", "Oslo");
console.log(countriesMap);
console.log(countriesMap.size);

//get value
console.log(countriesMap.get("Finland"));

//check
console.log(countriesMap.has("Finland"));

//get all values

for (const country of countriesMap) {
  console.log(country);
}

for (const [country, city] of countriesMap) {
  console.log(country, city);
}
