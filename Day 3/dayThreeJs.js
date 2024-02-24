//LVL1
//1
let firstName = "Illiya";
let lastName = "Filov";
let country = "Ukraine";
let city = "Kharkiv";
let age = 20;
let isMarried = false;
let year = 2003;

console.log(
  typeof firstName +
    "\n" +
    typeof lastName +
    "\n" +
    typeof country +
    "\n" +
    typeof city +
    "\n" +
    typeof age +
    "\n" +
    typeof isMarried +
    "\n" +
    typeof year
);

//2
console.log("10" === 10);

//3
console.log(parseInt("9.8") === 10);

//4
console.log(5 === 5);
console.log(true === true);
console.log("string" === "string");

console.log(5 > 78);
console.log("6" === 6);
console.log("first" === "second");

//5
/*
4 > 3     true
4 >= 3    true
4 < 3     false
4 <= 3    false
4 == 4    true
4 === 4   true
4 != 4    false
4 !== 4   false
4 != '4'  false
4 == '4'  true
4 === '4' false
Find the length of python and jargon and make a falsy comparison statement.
*/

const pStr = "python";
const jStr = "jargon";
console.log(pStr.length !== jStr.length);

//6
/*
4 > 3 && 10 < 12    true
4 > 3 && 10 > 12    false
4 > 3 || 10 < 12    true
4 > 3 || 10 > 12    true
!(4 > 3)            false
!(4 < 3)            true
!(false)            true
!(4 > 3 && 10 < 12) false
!(4 > 3 && 10 > 12) true
!(4 === '4')        true
There is no 'on' in both dragon and python
*/
const dStr = "dragon";
console.log(pStr.match("on") === null && dStr.match("on"));

//7
const dateVar = new Date();
console.log(dateVar.getFullYear());
console.log(dateVar.getMonth() + 1);
console.log(dateVar.getDate());
console.log(dateVar.getDay() + 1);
console.log(dateVar.getHours());
console.log(dateVar.getTime());

//LVL2
//1
// let base = prompt("Enter base:", "");
// let height = prompt("Enter height:", "");
// alert("The area of the triangle is " + 0.5 * base * height);

//2
// let a = parseFloat(prompt("Enter side a:", ""));
// let b = parseFloat(prompt("Enter side b:", ""));
// let c = parseFloat(prompt("Enter side c:", ""));
// alert("The perimetr of the triangle is " + (a + b + c));

//3
// let side1 = parseFloat(prompt("Enter side 1:", ""));
// let side2 = parseFloat(prompt("Enter side 2:", ""));
// alert("The rectangle area is " + side1 * side2);
// alert("The rectangle perimetr is " + 2 * (side1 + side2));

//4
// const pi = 3.14;
// let r = parseFloat(prompt("Enter radius of a circle:", ""));
// alert("The circle's area is: " + pi * r * r);
// alert("The circle's circumference is: " + 2 * pi * r);

//5
console.log("slope = " + 2, " x-intercept = " + 1 + " y-intercept = " + -2);

//6
let point1 = [2, 2];
let point2 = [6, 10];
let m = (point2[1] - point1[1]) / (point2[0] - point1[0]);
console.log("m=" + m);

//7
console.log(m === 2);

//8
// let x = parseFloat(prompt("Enter x:", ""));
// let y = x * x + 6 * x + 9;
// console.log(y); //-3 => y===0

//9
// let hours = parseInt(prompt("Enter hours:", ""));
// let rph = parseFloat(prompt("Enter rent per hour:", ""));
// alert("Your weekly earning is " + hours * rph);

//10
// let name = prompt("Write your name", "");
// if (name.length > 7) {
//   alert("Your name is long");
// } else {
//   alert("Your name is short");
// }

//11
// let name = prompt("Write your name", "");
// let fName = prompt("Write your family name", "");
// if (name > fName) {
//   alert(`Your first name, ${name} is longer than your family name, ${fName}`);
// } else {
//   alert(`Your first name, ${name} is shorter than your family name, ${fName}`);
// }

//12
let myAge = 250;
let yourAge = 25;
console.log(`I am ${myAge - yourAge} older then you`);

// //13
// let birthYear = parseInt(prompt("Enter the birth year:", ""));
// let personAge = dateVar.getFullYear() - birthYear;

// if (personAge < 18) {
//   alert(
//     `You are ${personAge}. You will be allowed to drive after ${
//       18 - personAge
//     } years`
//   );
// } else {
//   alert(`You are ${personAge}. You are old enough to drive`);
// }

//14
// let liveYears = parseInt(prompt("Enter numbers of years you live:", ""));
// alert(`You live ${31536000 * liveYears} seconds`);

//15
console.log(
  `${dateVar.getFullYear()}-${
    dateVar.getMonth() + 1
  }-${dateVar.getDate()} ${dateVar.getHours()}:${dateVar.getMinutes()}`
);

console.log(
  `${dateVar.getDate()}-${
    dateVar.getMonth() + 1
  }-${dateVar.getFullYear()} ${dateVar.getHours()}:${dateVar.getMinutes()}`
);

console.log(
  `${dateVar.getDate()}/${
    dateVar.getMonth() + 1
  }/${dateVar.getFullYear()} ${dateVar.getHours()}:${dateVar.getMinutes()}`
);
