const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

import countries_data from "./countries_data.js";

//LVL1
//1
console.group("LVL 1");
console.log("Task 1");

console.table(countries);

console.log("Task 2");

console.table(countries_data);

console.log("Task 3");

console.groupEnd();
//LVL2
//2
console.log("LVL 2");
console.log("Task 1");

console.assert(10 > 2 * 10, "Its false. 10 not greaster than 20");

console.log("Task 2");
console.warn("This is a warning");

console.log("Task 3");
console.error("This is a ERROR");
//LVL3
//3
console.log("LVL 3");
console.log("Task 1");

const countries2 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < countries2.length; i++) {
  console.log(countries2[i][0], countries2[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries2) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries2.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

console.time("while loop");
let i = 0;
while (i < countries2.length) {
  console.log(countries2[i][0], countries2[i][1]);
  i++;
}
console.timeEnd("while loop");
