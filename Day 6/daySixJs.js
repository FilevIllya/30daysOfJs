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
