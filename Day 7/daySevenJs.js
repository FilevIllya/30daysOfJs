//LVL1
//1
console.log("LVL1");
console.log("Task 1");

function printFullName() {
  console.log("My full name is Illiya Filiov");
}

printFullName();

//2
console.log("Task 2");

function printFullNameParam(firstName, lastName) {
  console.log(`My full name is ${firstName} ${lastName}`);
}

printFullNameParam("Illiya", "Filiov");

//3
console.log("Task 3");

function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(5, 6));

//4
console.log("Task 4");

function areaOfRectangle(length, weight) {
  return length * weight;
}

console.log(areaOfRectangle(5, 5));

//5
console.log("Task 5");

function perimeterOfRectangle(length, weight) {
  let perimetr = 2 * (length + weight);
  return perimetr;
}

console.log(perimeterOfRectangle(3, 5));

//6
console.log("Task 6");

function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return volume;
}

console.log(volumeOfRectPrism(9, 7, 2));

//7
console.log("Task 7");
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

console.log(areaOfCircle(235));

//8
console.log("Task 8");

function circumOfCircle(radius) {
  return 2 * Math.PI * radius;
}
console.log(circumOfCircle(3));

//9
console.log("Task 9");

function density(mass, volume) {
  return mass / volume;
}

console.log(density(50, 10));

//10
console.log("Task 10");

function speed(distance, time) {
  return distance / time;
}

console.log(speed(100, 1));

//11
console.log("Task 11");

function weight(mass, gravity = 9.81) {
  return mass * gravity;
}

console.log(weight(45));

//12
console.log("Task 12");

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(convertCelsiusToFahrenheit(100));

//13
console.log("Task 13");

function bmi(weight, height) {
  let bmi = weight / (((height / 100) * height) / 100);
  let result;
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    result = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    result = "Overweight";
  } else if (bmi >= 30) {
    result = "Obese";
  } else {
    result = "ERROR";
  }
  console.log(bmi);
  return result;
}

console.log(bmi(89, 179));

//14
console.log("Task 14");

function checkSeason(month) {
  let season;
  switch (month) {
    case "December":
    case "January":
    case "February":
      season = "Winter";
      break;
    case "March":
    case "April":
    case "May":
      season = "Spring";
      break;
    case "June":
    case "July":
    case "August":
      season = "Summer";
      break;
    case "September":
    case "October":
    case "November":
      season = "Autumn";
      break;
    default:
      season = "ERROR";
      break;
  }
  return season;
}

//15
function findMax() {
  let max = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (max < arguments[i]) {
      max = arguments[i];
    }
  }

  return max;
}

console.log(findMax(-4, 0, 2, 1, -10));

//LVL 2
//1
console.log("LVL2");
console.log("Task 1");

function solveLinEquation(a, b, c, x) {
  return -(a * x + c) / b;
}

console.log(solveLinEquation(2, 3, 4, 5));

//2
console.log("Task 2");

function solveQuadratic(a, b, c) {
  if (arguments.length < 3) {
    return 0;
  }
  let d = b * b - 4 * a * c;
  if (d < 0) {
    return 0;
  }
  let x1 = ((-b + Math.sqrt(d)) / 2) * a;
  let x2 = ((-b - Math.sqrt(d)) / 2) * a;
  if (x1 === x2) {
    return [x1];
  } else {
    return [x1, x2];
  }
}

console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

//3
console.log("Task 3");

function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

console.log([6, 3, 7, 54, 8, 4, 2, 5, 8, 5, 3, 5, 7, 5]);

//4
console.log("Task 4");

function showDateTime() {
  let date = new Date();

  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

console.log(showDateTime());

//5
console.log("Task 5");

function swapValues(a, b) {
  let box = a;
  a = b;
  b = box;
  return [a, b];
}

console.log(swapValues(3, 4));
console.log(swapValues(4, 5));

//6
console.log("Task 6");

function reverseArray(arr) {
  let box;
  for (let i = 0; i < arr.length / 2; i++) {
    box = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = box;
  }

  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8]));

//7
console.log("Task 7");

function capitalizeArray(arr) {
  const capitalizedarray = [];
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];

    if (typeof currentElement === "string") {
      capitalizedarray.push(
        currentElement.charAt(0).toUpperCase() + currentElement.slice(1)
      );
    } else {
      capitalizedarray.push(currentElement);
    }
  }

  return capitalizedarray;
}

console.log(capitalizeArray([1, 2, 3, "banana", "apples", "cats"]));

//8
console.log("Task 8");
const mainArray = [];

function addItem(item) {
  mainArray.push(item);
  return mainArray;
}

console.log(addItem(55));

//9
console.log("Task 9");
console.log(addItem(266));
console.log(addItem(300));

function removeItem(index) {
  mainArray.splice(index, 1);
  return mainArray;
}

console.log(removeItem(1));

//10
console.log("Task 10");

function sumOfNumbers(begin, end) {
  let sumOfNum = 0;
  for (let i = begin; i <= end; i++) {
    sumOfNum += i;
  }
  return sumOfNum;
}

console.log(sumOfNumbers(20, 30));

//11
console.log("Task 11");

function sumOfOdds(begin, end) {
  let sumOfOdds = 0;
  for (let i = begin; i <= end; i += 2) {
    if (i % 2 === 0) {
      i++;
      sumOfOdds += i;
    } else {
      sumOfOdds += i;
    }
  }
  return sumOfOdds;
}

console.log(sumOfOdds(20, 30));

//12
console.log("Task 12");

function sumOfEven(begin, end) {
  let sumOfEven = 0;
  for (let i = begin; i <= end; i += 2) {
    if (i % 2 === 0) {
      sumOfEven += i;
    } else {
      i++;
      sumOfEven += i;
    }
  }
  return sumOfEven;
}

console.log(sumOfEven(20, 30));

//13
console.log("Task 13");

function evensAndOdds(begin, end) {
  let sumOfOdds = 0;
  let sumOfEven = 0;

  for (let i = begin; i < end; i++) {
    if (i % 2 === 0) {
      sumOfEven += i;
    } else {
      sumOfOdds += i;
    }
  }

  return [sumOfOdds, sumOfEven];
}

console.log(evensAndOdds(20, 30));

//14
console.log("Task 14");

function sum() {
  let sumOfArg = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      sumOfArg += arguments[i];
    }
  }

  return sumOfArg;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, "three", 4, 5));

//15
console.log("Task 15");

function getRandomUserIp() {
  let randomNumbers = [];
  for (let i = 0; i <= 4; i++) {
    randomNumbers[i] = Math.round(Math.random() * 254);
  }

  let ip = `${randomNumbers[0]}.${randomNumbers[1]}.${randomNumbers[2]}.${randomNumbers[3]}`;
  return ip;
}

console.log(getRandomUserIp());

//16
//80:16:be:c3:77:bc
console.log("Task 16");

function randomMacAddress() {
  const characters = "0123456789abcdef";
  let macIP = "";
  for (let i = 0; i <= 5; i++) {
    let chunk1 = characters[Math.round([Math.random() * 15])];
    let chunk2 = characters[Math.round([Math.random() * 15])];
    if (i === 5) {
      macIP = macIP + `${chunk1}${chunk2}`;
    } else {
      macIP = macIP + `${chunk1}${chunk2}:`;
    }
  }
  return macIP;
}

console.log(randomMacAddress());

//17
console.log("Task 17");

function randomHexaNumberGenerator() {
  const characters = "0123456789abcdef";
  let hexidecimal = "#";
  for (let i = 0; i < 6; i++) {
    let randomVal = Math.random() * 16;
    hexidecimal += characters.charAt(randomVal);
  }

  return hexidecimal;
}

console.log(randomHexaNumberGenerator());

//18
console.log("Task 18");

function userIdGenerator() {
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
  let Id = "";
  for (let i = 0; i < 7; i++) {
    let randomVal = Math.random() * 62;
    Id += letters.charAt(randomVal);
  }

  return Id;
}

console.log(userIdGenerator());

//LVL3
//1
console.log("Task 1");

function userIdGeneratorPRO() {
  let numOfChar = prompt("Enter number of characters", "");
  let numOfIds = prompt("Enter number of ids", "");
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz";
  const result = [];

  for (let i = 0; i < numOfIds; i++) {
    let Id = "";
    for (let j = 0; j < numOfChar; j++) {
      let randomVal = Math.random() * 62;
      Id += letters.charAt(randomVal);
      if (j === numOfChar - 1) {
        result.push(Id);
      }
    }
  }

  return result;
}

//console.log(userIdGeneratorPRO());

//2
console.log("Task 2");

function rgbColorGenerator() {
  let rgb = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.round(Math.random() * 255);
  }

  return `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
}

console.log(rgbColorGenerator());

//3
console.log("Task 3");
function arrayOfHexaColors(numberOfHex) {
  const characters = "0123456789abcdef";
  const result = [];

  for (let i = 0; i < numberOfHex; i++) {
    let hexidecimal = "#";
    for (let j = 0; j < 6; j++) {
      let randomVal = Math.random() * 16;
      hexidecimal += characters.charAt(randomVal);
      if (j === 5) {
        result.push(hexidecimal);
      }
    }
  }

  return result;
}

console.log(arrayOfHexaColors(5));

//4
console.log("Task 4");

function arrayOfRgbColors(numberOfRgb) {
  const result = [];

  for (let i = 0; i < numberOfRgb; i++) {
    let rgb = [0, 0, 0];
    for (let j = 0; j < 3; j++) {
      rgb[j] = Math.round(Math.random() * 255);
    }
    result[i] = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
  }

  return result;
}

console.log(arrayOfRgbColors(5));

//5
console.log("Task 5");

function convertHexaToRgb(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

console.log(convertHexaToRgb("#679843"));

//6
console.log("Task 6");

function convertRgbToHexa(r, g, b) {
  let rToHex, gToHex, bToHex;
  if (r < 16) {
    rToHex = "0" + r.toString(16);
  } else {
    rToHex = r.toString(16);
  }
  if (g < 16) {
    gToHex = "0" + g.toString(16);
  } else {
    gToHex = g.toString(16);
  }
  if (b < 16) {
    bToHex = "0" + b.toString(16);
  } else {
    bToHex = b.toString(16);
  }

  return `#${rToHex}${gToHex}${bToHex}`;
}

console.log(convertRgbToHexa(103, 152, 67));

//7
console.log("Task 7");

function generateColors(type, numberOf) {
  if (type === "hexa") {
    return arrayOfHexaColors(numberOf);
  } else if (type === "rgb") {
    return arrayOfRgbColors(numberOf);
  } else {
    return "IVALID TYPE";
  }
}

console.log(generateColors("hexa", 3));
console.log(generateColors("hexa", 1));
console.log(generateColors("rgb", 3));
console.log(generateColors("rgb", 1));

//8
console.log("Task 8");

function shuffleArray(arr) {
  length = arr.length;
  const indexes = [];
  const shuffled = [];
  for (let i = 0; i < length; i++) {
    indexes[i] = i;
    shuffled[i] = -1;
  }

  for (let i = 0; i < length; ) {
    let randomInd = Math.round(Math.random() * length - 1);
    let checker = true;
    for (let j = 0; j < length; j++) {
      if (shuffled[j] === randomInd) {
        checker = false;
      }
    }

    if (checker === true) {
      shuffled.shift();
      shuffled.push(randomInd);
      i++;
    }
  }

  for (let i = 0; i < length; i++) {
    shuffled[i] = arr[shuffled[i]];
  }

  return shuffled;
}

console.log(shuffleArray([10, 20, 15, 50, 100, 255]));

//9
console.log("Task 9");

function factorial(number) {
  let factorialOfNum = number;
  for (let i = number - 1; i > 0; i--) {
    factorialOfNum *= i;
  }

  return factorialOfNum;
}

console.log(factorial(6));

//10
console.log("Task 10");

function isEmpty(arg) {
  let result = false;
  if (arg == "") {
    result = true;
  }

  return result;
}

console.log(isEmpty(""));

//11
console.log("Task 11");

console.log(sum(1, 2, 3, 5, 7, 3, "strimg", 0));

//12
console.log("Task 12");

function sumOfArrayItems(arr) {
  let sumOfArr = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sumOfArr += arr[i];
    }
  }

  return sumOfArr;
}

console.log(sumOfArrayItems([1, 2, 3, 5, 7, 3, "strimg", 0]));

//13
console.log("Task 13");

function avarage(arr) {
  let sumOfArr = 0;
  let lengthOfnum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sumOfArr += arr[i];
      lengthOfnum++;
    }
  }

  return sumOfArr / lengthOfnum;
}

console.log(avarage([1, 2, 3, 5, 7, 3, "strimg", 0]));

//14
console.log("Task 14");

function modifyArray(arr) {
  if (arr.length < 5) {
    return "item not found";
  }

  let chenger = arr[4];
  arr[4] = chenger.toUpperCase();

  return arr;
}

console.log(
  modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
);

//15
console.log("Task 15");

function isPrime(number) {
  let prime = true;

  for (let j = 2; j < number; j++) {
    if (number % j === 0) {
      prime = false;
    }
  }

  if (prime === true) {
    return true;
  }
  return false;
}

console.log(isPrime(5));

//16
console.log("Task 16");

function isUniqueArray(arr) {
  let isUniqe = true;
  for (let i = 0; i < arr.length; i++) {
    if (isUniqe === false) {
      return isUniqe;
    }

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        isUniqe = false;
      }
    }
  }

  return isUniqe;
}

console.log(isUniqueArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//17
console.log("Task 17");

function sameDataType(arr) {
  let firstType = typeof arr[0];
  let checker = true;
  for (let i = 1; i < arr.length; i++) {
    if (firstType !== typeof arr[i]) {
      checker = false;
    }
  }

  return checker;
}

console.log(sameDataType([0, 251, 22, 578, 45, "string"]));

//18
console.log("Task 18");

function isVailidVar(varName) {
  if (!/^[a-zA-Z$_]/.test(varName)) {
    return false;
  }

  if (!/^[a-zA-Z0-9$_]*$/.test(varName)) {
    return false;
  }

  return true;
}

console.log(isVailidVar("invalid-var"));

//19
console.log("Task 19");

function sevenRandomNumbers() {
  const checkArr = [];
  for (let i = 0; i < 7; ) {
    let randomVal = Math.round(Math.random() * 9);
    let chackGood = false;

    for (let i = 0; i < 7; i++) {
      if (checkArr[i] === randomVal) {
        chackGood = true;
      }
    }

    if (chackGood === false) {
      checkArr.push(randomVal);
      i++;
    }
  }

  return checkArr;
}

console.log(sevenRandomNumbers());

//20
console.log("Task 20");
import countries from "./countries.js";

function reverseCountries(arr) {
  const reverseArray = [];
  for (let i = 0; i < arr.length; i++) {
    reverseArray[i] = countries[countries.length - i - 1];
  }

  return reverseArray;
}

console.log(reverseCountries(countries));
