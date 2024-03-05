//LVL1
//1
console.log("LVL1");
console.log("Task 1");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//2
console.log("Task 2");
let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

//3
//console.log("Task 3");
// let n = prompt("Enter n:", "");
// for (let i = 0; i <= n; i++) {
//   console.log(i);
// }

//4
console.log("Task 4");
let sharpStr = "";
for (let i = 1; i <= 7; i++) {
  sharpStr += "#";
  console.log(sharpStr);
}

//5
console.log("Task 5");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

//6
console.log("Task 6");
console.log("i\ti^2\ti^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i * i}\t${i * i * i}`);
}

//7
// console.log("Task 7");
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//8
// console.log("Task 8");
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

//9
console.log("Task 9");
for (let i = 0; i <= 100; i++) {
  let prime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
    }
  }

  if (prime === true) {
    console.log(i);
  }
}

//10
console.log("Task 10");
let sumOfNumbers = 0;
for (let i = 0; i <= 100; i++) {
  sumOfNumbers += i;
}

console.log(`The sum of all numbers from 0 to 100 is ${sumOfNumbers}.`);

//11
console.log("Task 11");
let sumOfOdds = 0;
let sumOfEvens = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfEvens += i;
  } else {
    sumOfOdds += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${sumOfEvens}. And the sum of all odds from 0 to 100 is ${sumOfOdds}.`
);

//12
console.log("Task 12");
//like task 11
let sumsArray = [sumOfEvens, sumOfOdds];
console.log(sumsArray);

//13
console.log("Task 13");
let firstRandomId = "";
for (let i = 0; i < 5; i++) {
  firstRandomId += Math.round(Math.random() * 9);
}
console.log(firstRandomId);

//14
console.log("Task 14");
let secondRandomId = "";
let checkArr = [];

for (let i = 0; i < 5; ) {
  let randomVal = Math.round(Math.random() * 9);
  let chackGood = false;

  for (let i = 0; i < 5; i++) {
    if (checkArr[i] === randomVal) {
      chackGood = true;
    }
  }

  if (chackGood === false) {
    checkArr.push(randomVal);
    secondRandomId += randomVal;
    i++;
  }
}
console.log(secondRandomId);

//15
console.log("Task 15");
const letters = "abcdefghijklmnopqrstuvwxyz1234567890";
let sixLettersId = "";
for (let i = 0; i < 6; i++) {
  let randomVal = Math.random() * 36;
  sixLettersId += letters.charAt(randomVal);
}

console.log(sixLettersId);

//LVL2
//1
// console.log("Task 1");
// const letters = "abcdefghijklmnopqrstuvwxyz1234567890";
// let sixLettersId = "";
// let idLength = prompt("Enter length of ID", "");
// for (let i = 0; i < idLength; i++) {
//   let randomVal = Math.random() * 36;
//   sixLettersId += letters.charAt(randomVal);
// }

// console.log(sixLettersId);

//2
console.log("Task 2");
const characters = "0123456789abcdef";
let hexidecimal = "#";
for (let i = 0; i < 6; i++) {
  let randomVal = Math.random() * 16;
  hexidecimal += characters.charAt(randomVal);
}

console.log(hexidecimal);

//3
console.log("Task 3");
let rgb = [0, 0, 0];
for (let i = 0; i < 3; i++) {
  rgb[i] = Math.round(Math.random() * 255);
}

console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`);

//4
import countries from "./countries.js";
import webTechs from "./webTechs.js";
console.log("Task 4");
let upperCountries = [];

for (let i = 0; i < countries.length; i++) {
  upperCountries[i] = countries[i].toUpperCase();
}

console.log(upperCountries);

//5
console.log("Task 5");
let lengthCountries = [];

for (let i = 0; i < countries.length; i++) {
  lengthCountries[i] = countries[i].length;
}

console.log(lengthCountries);

//6
console.log("Task 6");
let countriesInfo = [];

for (let i = 0; i < countries.length; i++) {
  let coutryInfo = [];
  coutryInfo[0] = countries[i];
  let shortCountry = "";
  for (let j = 0; j < 3; j++) {
    shortCountry += countries[i].charAt(j).toUpperCase();
  }
  coutryInfo[1] = shortCountry;
  coutryInfo[2] = countries[i].length;
  countriesInfo[i] = coutryInfo;
}

console.log(countriesInfo);

//7
console.log("Task 7");
let landCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().match(/land/g)) {
    landCountries.push(countries[i]);
  }
}

console.log(landCountries);

//8
console.log("Task 8");
let iaCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().match(/ia/g)) {
    iaCountries.push(countries[i]);
  }
}

console.log(iaCountries);

//9
console.log("Task 9");
let longestCountry = " ";
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}

console.log(longestCountry);

//10
console.log("Task 10");
let fiveLettersCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    fiveLettersCountries.push(countries[i]);
  }
}

console.log(fiveLettersCountries);

//11
console.log("Task 11");
let longestWord = " ";
for (let i = 0; i < webTechs.length; i++) {
  if (webTechs[i].length > longestWord.length) {
    longestWord = webTechs[i];
  }
}

console.log(longestWord);

//12
console.log("Task 12");
let webLengths = [];
for (let i = 0; i < webTechs.length; i++) {
  let webInfo = [];
  webInfo[0] = webTechs[i];
  webInfo[1] = webTechs[i].length;
  webLengths[i] = webInfo;
}

console.log(webLengths);

//13
console.log("Task 13");
const mernStack = ["MongoDB", "Express", "React", "Node"];
let MERNstr = "";
for (let i = 0; i < mernStack.length; i++) {
  MERNstr += mernStack[i].charAt(0);
}

console.log(MERNstr);

//14
console.log("Task 14");
const webArr = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

for (let i = 0; i < webArr.length; i++) {
  console.log(webArr[i]);
}

//15
console.log("Task 15");
const fruit = ["banana", "orange", "mango", "lemon"];
for (let i = fruit.length - 1; i >= 0; i--) {
  console.log(fruit[i]);
}

//16
console.log("Task 16");
// const fullStack = [[], []];
// for (let i = 0; i < webTechs.length; i++) {
//   if (i < 4) {
//     fullStack[0].push(webTechs[i]);
//   } else {
//     fullStack[1].push(webTechs[i]);
//   }
// }

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j].toUpperCase());
  }
}

//LVL3
//1
console.log("LVL 3");
console.log("Task 1");
const copyCountrysA = countries.slice();

//2
console.log("Task 2");
const copyArr = countries.slice();
const sortedCountries = copyArr.sort();
console.log(sortedCountries);

//3
console.log("Task 3");
console.log(webTechs.sort());
console.log(mernStack.sort());

//4
console.log("Task 4");
landCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().match(/land/g)) {
    landCountries.push(countries[i]);
  }
}

console.log(landCountries);

//5
console.log("Task 5");
longestCountry = " ";
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > longestCountry.length) {
    longestCountry = countries[i];
  }
}

console.log(longestCountry);

//6
//same as 4

//7
console.log("Task 7");
let fourLettersCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 4) {
    fourLettersCountries.push(countries[i]);
  }
}

console.log(fourLettersCountries);

//8
console.log("Task 8");
landCountries = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].toLowerCase().match(/ /g)) {
    landCountries.push(countries[i]);
  }
}

console.log(landCountries);

//9
console.log("Task 9");
countries.reverse();
const bigCountries = [];
for (let i = 0; i < countries.length; i++) {
  bigCountries[i] = countries[i].toUpperCase();
}

console.log(bigCountries);
