//LVL1
//Task 1
console.log("LVL 1");
console.log("Task 1");
//
const H1Element = document.querySelector("h1");
H1Element.style.textAlign = "center";
const H2Element = document.querySelector("h2");
H2Element.style.textAlign = "center";
const H3Element = document.querySelector("h3");
H3Element.style.textAlign = "center";
//
const bodyElement = document.querySelector("body");

const myDivElement = document.createElement("div");
myDivElement.style.display = "flex";
myDivElement.style.flexWrap = "wrap";
myDivElement.style.justifyContent = "center";

myDivElement.id = "NumberGeneratorDiv";

document.body.appendChild(myDivElement);

//numbers generate
let numberDiv;
for (let i = 0; i <= 101; i++) {
  numberDiv = document.createElement("div");
  numberDiv.textContent = i;
  numberDiv.className = "numberDiv";
  numberDiv.style.padding = "1rem 0";
  numberDiv.style.margin = "0.2rem";
  numberDiv.style.fontSize = "3rem";
  numberDiv.style.fontWeight = "Bold";
  numberDiv.style.width = "calc(100% / 7)";
  numberDiv.style.textAlign = "center";
  numberDiv.style.color = "white";
  //color
  if (checkNumber(i) === 1) {
    numberDiv.style.backgroundColor = "red";
  } else if (checkNumber(i) === 2) {
    numberDiv.style.backgroundColor = "green";
  } else {
    numberDiv.style.backgroundColor = "#e5e619";
  }
  myDivElement.appendChild(numberDiv);
}

//color
function checkNumber(number) {
  let result = 0;
  let prime = true;
  //1 - isPrime
  //2 - is Odd
  //3 - is Even
  for (let j = 2; j < number; j++) {
    if (number % j === 0) {
      prime = false;
    }
  }

  if (prime === true) {
    result = 1;
    return result;
  }
  if (number % 2 == 0) {
    result = 2;
  } else {
    result = 3;
  }

  return result;
}
