//LVL 1
//my box
// let number = prompt("Enter number", "number goes here");
// console.log(number);

//1
// let yourAge = prompt("Enter you age:", "enter here");
// if (yourAge < 18) {
//   console.log(`You are left with ${18 - yourAge} years to drive`);
// } else {
//   console.log("You are old enough to drive");
// }

//2
// let yourAge = prompt("Enter you age:", "enter here");
// let myAge = 20;

// if (yourAge > myAge) {
//   console.log(`You are ${yourAge - myAge} older than me.`);
// } else if (yourAge < myAge) {
//   console.log(`I am ${myAge - yourAge} older than you.`);
// } else {
//   console.log(`We have same old years`);
// }

//3
let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else if (a < b) {
  console.log(`${b} is greater than ${a}`);
} else {
  console.log("These numbers are the same");
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

//4
// let number = prompt("Enter your number:", "enter number here");
// if (number % 2 === 0) {
//   console.log(`${number} is an even number`);
// } else {
//   console.log(`${number} is an odd number`);
// }

//LVL 2
//1
// let rating = prompt("Enter your rating:", "enter rating here");
// switch (true) {
//   case rating > 0 && rating <= 49:
//     console.log("You have F grade");
//     break;
//   case rating >= 50 && rating <= 59:
//     console.log("You have D grade");
//     break;
//   case rating >= 60 && rating <= 69:
//     console.log("You have C grade");
//     break;
//   case rating >= 70 && rating <= 89:
//     console.log("You have B grade");
//     break;
//   case rating >= 90 && rating <= 100:
//     console.log("You have A grade");
//     break;
//   default:
//     console.log("invalid value");
// }

//2
// let season = prompt("Enter month:", "");
// switch (season) {
//   case "March":
//   case "April":
//   case "May":
//     console.log("The season is Spring");
//     break;
//   case "June":
//   case "July":
//   case "August":
//     console.log("The season is Summer");
//     break;
//   case "September":
//   case "October":
//   case "November":
//     console.log("The season is Autumn");
//     break;
//   case "December":
//   case "January":
//   case "February":
//     console.log("The season is Winter");
//     break;
//   default:
//     console.log("invalid value");
// }

//3
// let season = prompt("What is the day today:", "").toLowerCase();
// switch (season) {
//   case "saturday":
//     console.log("Saturday is a weekend.");
//     break;
//   case "sunday":
//     console.log("Sunday is a weekend.");
//     break;
//   case "monday":
//     console.log("Monday is a working day.");
//     break;
//   case "tuesday":
//     console.log("Tuesday is a working day.");
//     break;
//   case "wednesday":
//     console.log("Wednesday is a working day.");
//     break;
//   case "thursday":
//     console.log("Thursday is a working day.");
//     break;
//   case "friday":
//     console.log("Friday is a working day");
//     break;
//   default:
//     console.log("invalid value");
// }

//LVL3
const dateVar = new Date();
let season = prompt("Enter a month:", "").toLowerCase();
switch (season) {
  case "january":
    console.log("January has a 31 days.");
    break;
  case "february":
    if (dateVar.getFullYear() % 4 === 0) {
      console.log("February has a 29 days.");
    } else {
      console.log("February has a 28 days.");
    }

    break;
  case "march":
    console.log("March has a 31 days.");
    break;
  case "april":
    console.log("April has a 30 days.");
    break;
  case "may":
    console.log("May has a 31 days.");
    break;
  case "june":
    console.log("June has a 30 days.");
    break;
  case "july":
    console.log("July has a 31 days.");
    break;
  case "august":
    console.log("August has a 31 days.");
    break;
  case "september":
    console.log("September has a 30 days.");
    break;
  case "october":
    console.log("October has a 31 days.");
    break;
  case "november":
    console.log("November has a 30 days.");
    break;
  case "december":
    console.log("December has a 31 days.");
    break;
  default:
    console.log("invalid value");
}
