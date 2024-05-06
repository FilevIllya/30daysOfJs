//LVL1
//Task 1
console.log("LVL 1");
console.log("Task 1");

import countries from "./countries.js";

let UDClick = 0;

const mainDiv = document.createElement("div");
mainDiv.style.backgroundImage =
  "linear-gradient(rgba(30, 191, 255, 0.3), rgba(128, 0, 128, 0.3)), url('./images/globe.jpg')";
mainDiv.style.display = "flex";
mainDiv.style.alignItems = "center";
mainDiv.style.justifyContent = "center";
mainDiv.style.flexDirection = "column";
mainDiv.style.backgroundSize = "cover";
mainDiv.style.backgroundRepeat = "no-repeat";
mainDiv.style.backgroundPosition = "center";
mainDiv.style.width = "100%";
document.body.appendChild(mainDiv);

document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "column";
document.body.style.backgroundColor = "rgb(255, 255, 200)";
// document.body.style.backgroundSize = "cover";
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundPosition = "center";

const h1Elem = document.createElement("h1");
h1Elem.textContent = "World countries list";
h1Elem.style.textTransform = "uppercase";
h1Elem.style.fontSize = "bold";
h1Elem.style.color = "White";
h1Elem.style.fontSize = "5rem";
h1Elem.style.margin = "10rem 0 0 0";
h1Elem.style.webkitTextStroke = "1.5px black";
h1Elem.style.textStroke = "2px black";
mainDiv.appendChild(h1Elem);

let totalCountries = countries.length;
const totalCountriesP = document.createElement("p");
totalCountriesP.textContent = "Total number of countries: " + totalCountries;
totalCountriesP.style.color = "White";
totalCountriesP.style.fontSize = "2rem";
totalCountriesP.style.margin = "0";
mainDiv.appendChild(totalCountriesP);

const searchInfo = document.createElement("p");
searchInfo.style.color = "White";
//searchInfo.textContent = "Contries start with ff are 25";
searchInfo.style.fontSize = "1.5rem";
mainDiv.appendChild(searchInfo);

//buttons
const buttonsDiv = document.createElement("div");
buttonsDiv.style.display = "flex";
buttonsDiv.style.alignItems = "center";
buttonsDiv.style.justifyContent = "center";
buttonsDiv.style.flexDirection = "row";
mainDiv.appendChild(buttonsDiv);

//starting word
const startBtn = document.createElement("button");
startBtn.textContent = "Starting word";
startBtn.style.textTransform = "uppercase";
startBtn.style.fontSize = "1rem";
startBtn.style.height = "3rem";
startBtn.style.width = "auto";
startBtn.style.backgroundColor = "rgb(139, 0, 139)";
startBtn.style.color = "white";
startBtn.style.margin = "0 0.25rem";

buttonsDiv.appendChild(startBtn);

//Search with any word
const anyBtn = document.createElement("button");
anyBtn.textContent = "Search with any word";
anyBtn.style.textTransform = "uppercase";
anyBtn.style.fontSize = "1rem";
anyBtn.style.height = "3rem";
anyBtn.style.width = "auto";
anyBtn.style.backgroundColor = "rgb(139, 0, 139)";
anyBtn.style.color = "white";
anyBtn.style.margin = "0 0.25rem";

buttonsDiv.appendChild(anyBtn);

//upDown btn
const uppDownBtn = document.createElement("button");
uppDownBtn.textContent = "↓";
uppDownBtn.style.textTransform = "uppercase";
uppDownBtn.style.fontSize = "1rem";
uppDownBtn.style.height = "3rem";
uppDownBtn.style.width = "auto";
uppDownBtn.style.backgroundColor = "rgb(139, 0, 139)";
uppDownBtn.style.color = "white";
uppDownBtn.style.margin = "0 0.25rem";

buttonsDiv.appendChild(uppDownBtn);

//input div

const inputDiv = document.createElement("div");

inputDiv.style.display = "flex";
inputDiv.style.alignItems = "center";
inputDiv.style.justifyContent = "center";
inputDiv.style.flexDirection = "row";
inputDiv.style.width = "100%";
inputDiv.style.margin = "0 0 5rem 0";

mainDiv.appendChild(inputDiv);

//input
const inputW = document.createElement("input");
inputW.id = "inpW";
inputW.type = "text";
inputW.placeholder = "Search country...";
inputW.style.margin = "0.5rem";
inputW.style.height = "3rem";
inputW.style.width = "45rem";
inputW.style.fontSize = "1.5rem";
inputW.style.borderRadius = "30px";
inputW.style.textIndent = "10px";
inputW.style.borderColor = "blue";

inputDiv.appendChild(inputW);

const searchButton = document.createElement("button");

searchButton.style.width = "60px";
searchButton.style.height = "60px";
searchButton.style.border = "none";
searchButton.style.backgroundColor = "rgba(0,0,0,0)";
searchButton.style.borderRadius = "50%";
searchButton.style.display = "flex";
searchButton.style.alignItems = "center";
searchButton.style.justifyContent = "center";
searchButton.style.fontSize = "24px";
const searchIcon = document.createElement("span");
searchIcon.textContent = "🔍";
searchButton.appendChild(searchIcon);

inputDiv.appendChild(searchButton);

//answer section

const answerDiv = document.createElement("div");

answerDiv.style.display = "flex";
answerDiv.style.flexWrap = "wrap";
answerDiv.style.justifyContent = "center";
answerDiv.style.width = "70%";
answerDiv.style.margin = "5rem 0";

document.body.appendChild(answerDiv);

//function
function createCountry(i, filteredCountries) {
  let countryDiv;
  countryDiv = document.createElement("div");
  countryDiv.textContent = filteredCountries[i];
  countryDiv.className = "countryDiv";
  countryDiv.style.padding = "1rem 0";
  countryDiv.style.margin = "0.2rem";
  countryDiv.style.border = "2px solid black";
  countryDiv.style.fontSize = "1rem";
  countryDiv.style.textTransform = "uppercase";
  countryDiv.style.textDecoration = "bold";
  countryDiv.style.width = "calc(100%/7)";
  countryDiv.style.height = "50px";
  countryDiv.style.display = "flex";
  countryDiv.style.justifyContent = "center";
  countryDiv.style.alignItems = "center";
  countryDiv.style.textAlign = "center";
  countryDiv.style.color = "white";
  countryDiv.style.backgroundImage =
    "linear-gradient(rgba(20, 161, 225, 0.5), rgba(108, 0, 110, 0.5)),url('./images/map.jpg')";
  countryDiv.style.backgroundSize = "cover";
  countryDiv.style.backgroundRepeat = "no-repeat";
  countryDiv.style.backgroundPosition = "center";
  answerDiv.appendChild(countryDiv);
}
//first button
/////////////////////////////////////////////////////////////////////
function filterStartBtn() {
  while (answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.firstChild);
  }

  const mask = inputW.value;
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().startsWith(mask.toLowerCase())
  );

  if (downChange() == 0) {
    for (let i = 0; i <= filteredCountries.length - 1; i++) {
      createCountry(i, filteredCountries);
    }
  } else {
    for (let i = filteredCountries.length - 1; i >= 0; i--) {
      createCountry(i, filteredCountries);
    }
  }
}

//second btn
function filterAnyBtn() {
  while (answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.firstChild);
  }

  const mask = inputW.value;
  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(mask.toLowerCase())
  );

  if (downChange() == 0) {
    for (let i = 0; i <= filteredCountries.length - 1; i++) {
      createCountry(i, filteredCountries);
    }
  } else {
    for (let i = filteredCountries.length - 1; i >= 0; i--) {
      createCountry(i, filteredCountries);
    }
  }
}

///////////////////////////////////////////////////////////////////////////

function downChange() {
  if (UDClick % 2 == 0) {
    return 0;
  } else {
    return 1;
  }
}

function UDBtnClick() {
  UDClick++;
  if (downChange() == 0) {
    uppDownBtn.textContent = "↓";
  } else {
    uppDownBtn.textContent = "↑";
  }
}

startBtn.addEventListener("click", filterStartBtn);
anyBtn.addEventListener("click", filterAnyBtn);
uppDownBtn.addEventListener("click", UDBtnClick);
