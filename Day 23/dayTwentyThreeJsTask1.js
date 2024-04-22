//LVL1
//Task 1
console.log("LVL 1");
console.log("Task 1");
//first info

const fH1 = document.createElement("h1");
fH1.textContent = "Number Generator";
fH1.style.color = "rgb(0,255,127)";
fH1.style.fontSize = "3rem";
fH1.style.margin = "0";
document.body.appendChild(fH1);

const fH2 = document.createElement("h2");
fH2.textContent = "30DaysOfJavaScript Challenge:DOM Day 3";
fH2.style.margin = "0";
document.body.appendChild(fH2);

const fH3 = document.createElement("h3");
fH3.textContent = "Author: Illiya Filiov";
document.body.appendChild(fH3);
//input string
const inputField = document.createElement("input");
inputField.id = "inpF";
inputField.type = "text";
inputField.placeholder = "Generate more numbers...";
inputField.style.height = "2rem";
inputField.style.width = "50%";
inputField.style.margin = "10px";
inputField.style.borderColor = "rgb(0,255,127)";

//btn
const button = document.createElement("button");
button.textContent = "Generate";
button.style.width = "100px";
button.style.height = "2.3rem";
button.style.margin = "10px";
button.style.backgroundColor = "green";
button.style.color = "white";
button.style.border = "none";
button.style.verticalAlign = "middle";
button.addEventListener("click", () => {
  let count = inputField.value;
  //numbers generate
  let numberDiv;
  const elementsToRemove = document.querySelectorAll(".numberDiv");
  elementsToRemove.forEach((element) => {
    element.remove();
  });

  for (let i = 0; i <= count; i++) {
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
});

const container = document.createElement("div");
container.style.display = "flex";
container.alignContent = "center";
container.style.justifyContent = "center";
container.appendChild(inputField);
container.appendChild(button);
document.body.appendChild(container);

//
const H1Element = document.querySelector("h1");
H1Element.style.textAlign = "center";
const H2Element = document.querySelector("h2");
H2Element.style.textAlign = "center";
const H3Element = document.querySelector("h3");
H3Element.style.textAlign = "center";
//
const bodyElement = document.querySelector("body");
bodyElement.style.display = "flex";
bodyElement.style.flexWrap = "wrap";
bodyElement.style.flexDirection = "column";
bodyElement.style.justifyContent = "center";
bodyElement.style.alignContent = "center";

const myDivElement = document.createElement("div");
myDivElement.style.display = "flex";
myDivElement.style.flexWrap = "wrap";
myDivElement.style.justifyContent = "center";
myDivElement.style.width = "70%";

myDivElement.id = "NumberGeneratorDiv";

document.body.appendChild(myDivElement);

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
