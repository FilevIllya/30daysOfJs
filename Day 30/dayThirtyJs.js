//LVL1
//Task 1
console.log("LVL 1");
console.log("Task 1");

let UDClick = 0; //arrow
let filteredCountries;

import countries_data from "./countries_data.js";
//console.log(countries_data);

//
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "column";
document.body.style.backgroundColor = "rgb(230, 230, 230)";

//h1
const h1Elem = document.createElement("h1");
h1Elem.textContent = "World Countries Data";
h1Elem.style.color = "orange";
h1Elem.style.fontSize = "3rem";
h1Elem.style.margin = "2rem 0 0 0";

document.body.appendChild(h1Elem);

//h3
let countriesCount = countries_data.length;
const h3Elem = document.createElement("h3");
h3Elem.textContent = "Curently we have " + countriesCount + " countries";

document.body.appendChild(h3Elem);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const mainDiv = document.createElement("div");
mainDiv.style.display = "flex";
mainDiv.style.alignItems = "center";
mainDiv.style.justifyContent = "center";
mainDiv.style.flexDirection = "column";
mainDiv.style.backgroundColor = "white";
mainDiv.style.width = "100%";
mainDiv.style.boxShadow =
  "0 -5px 10px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2)";
document.body.appendChild(mainDiv);

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

const answerCountrySectionDiv = document.createElement("div");

answerCountrySectionDiv.style.display = "flex";
answerCountrySectionDiv.style.flexWrap = "wrap";
answerCountrySectionDiv.style.justifyContent = "center";
answerCountrySectionDiv.style.width = "90%";
answerCountrySectionDiv.style.margin = "5rem 0";

document.body.appendChild(answerCountrySectionDiv);

//////////////////////////////////////////////////////////////////

function createCountry(i, filteredCountries) {
  let countryDiv;
  countryDiv = document.createElement("div");
  countryDiv.innerHTML = `
  <p style="text-align: center; color: orange; font-weight: bold;">${
    filteredCountries[i].name
  }</p>
  <p style="text-align: center; color: black;">Capital: ${
    filteredCountries[i].capital
  }</p>
  <p style="text-align: center; color: black;">Language: ${filteredCountries[
    i
  ].languages.join(", ")}</p>
  <p style="text-align: center; color: black;">Population: ${
    filteredCountries[i].population
  }</p>
`;
  countryDiv.className = "countryDiv";
  countryDiv.style.padding = "1rem 0";
  countryDiv.style.margin = "0.2rem";
  countryDiv.style.border = "2px solid black";
  countryDiv.style.fontSize = "1rem";
  countryDiv.style.textTransform = "uppercase";
  countryDiv.style.textDecoration = "bold";
  countryDiv.style.width = "calc(100%/7)";
  countryDiv.style.height = "15rem";
  countryDiv.style.display = "flex";
  countryDiv.style.flexDirection = "column";
  countryDiv.style.justifyContent = "center";
  countryDiv.style.alignItems = "center";
  countryDiv.style.textAlign = "center";
  countryDiv.style.color = "white";
  // countryDiv.style.backgroundImage =
  //   "linear-gradient(rgba(20, 161, 225, 0.5), rgba(108, 0, 110, 0.5)),url('./images/map.jpg')";
  countryDiv.style.backgroundColor = "white";
  countryDiv.style.backgroundSize = "cover";
  countryDiv.style.backgroundRepeat = "no-repeat";
  countryDiv.style.backgroundPosition = "center";
  answerCountrySectionDiv.appendChild(countryDiv);
}
//first button
/////////////////////////////////////////////////////////////////////
function filterStartBtn() {
  while (answerCountrySectionDiv.firstChild) {
    answerCountrySectionDiv.removeChild(answerCountrySectionDiv.firstChild);
  }

  const mask = inputW.value;
  filteredCountries = countries_data.filter((country) =>
    country.name.toLowerCase().startsWith(mask.toLowerCase())
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

  popBtn(filteredCountries);
}

//second btn
function filterAnyBtn() {
  while (answerCountrySectionDiv.firstChild) {
    answerCountrySectionDiv.removeChild(answerCountrySectionDiv.firstChild);
  }

  const mask = inputW.value;
  filteredCountries = countries_data.filter((country) =>
    country.name.toLowerCase().includes(mask.toLowerCase())
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2 buttons with statistics div

const twoButtonsDiv = document.createElement("div");

twoButtonsDiv.style.display = "flex";
twoButtonsDiv.style.alignItems = "center";
twoButtonsDiv.style.justifyContent = "center";
twoButtonsDiv.style.flexDirection = "column";
twoButtonsDiv.style.backgroundColor = "white";
twoButtonsDiv.style.width = "100%";
twoButtonsDiv.style.padding = "2rem";
twoButtonsDiv.style.boxShadow =
  "0 -5px 10px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2)";

document.body.appendChild(twoButtonsDiv);

///////////////////////////////

const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.alignItems = "center";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.flexDirection = "row";

twoButtonsDiv.appendChild(buttonContainer);

//
const populationBtn = document.createElement("button");

populationBtn.style.backgroundColor = "orange";
populationBtn.style.border = "0";
populationBtn.style.margin = "0 0 0 2rem";
populationBtn.textContent = "Population";
populationBtn.style.textTransform = "uppercase";
populationBtn.style.fontSize = "1.5rem";
populationBtn.style.padding = "1rem";

buttonContainer.appendChild(populationBtn);

const languagesBtn = document.createElement("button");

languagesBtn.style.backgroundColor = "orange";
languagesBtn.style.border = "0";
populationBtn.style.margin = "0 2rem 0 0";
languagesBtn.textContent = "Language";
languagesBtn.style.textTransform = "uppercase";
languagesBtn.style.fontSize = "1.5rem";
languagesBtn.style.padding = "1rem";
languagesBtn.style.width = populationBtn.offsetWidth + "px";

buttonContainer.appendChild(languagesBtn);

const description = document.createElement("p");

description.style.fontSize = "1.5rem";
description.textContent = "";

twoButtonsDiv.appendChild(description);

//hover functions
function hoverOn() {
  this.style.backgroundColor = "darkorange";
  this.style.border = "1px solid black";
}

function hoverOff() {
  this.style.backgroundColor = "orange";
  this.style.border = "none";
}

languagesBtn.addEventListener("mouseover", hoverOn);
languagesBtn.addEventListener("mouseout", hoverOff);

populationBtn.addEventListener("mouseover", hoverOn);
populationBtn.addEventListener("mouseout", hoverOff);

//hard part
//main
const answerDiv = document.createElement("div");
answerDiv.style.display = "flex";
answerDiv.style.alignItems = "center";
answerDiv.style.justifyContent = "center";
answerDiv.style.flexDirection = "column";
answerDiv.style.width = "100%";
answerDiv.style.margin = "2rem";

document.body.appendChild(answerDiv);
//end main

//main function

function languageBtn(filteredCountries) {
  console.log(filteredCountries);
  const countryCount = filteredCountries.length;

  while (answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.firstChild);
  }

  const languageCounter = new Map();

  filteredCountries.forEach((country) => {
    // every language
    country.languages.forEach((language) => {
      languageCounter.set(language, (languageCounter.get(language) || 0) + 1);
    });
  });

  // like dictionary
  const languageArray = Array.from(languageCounter.entries());

  description.textContent = `${languageArray.length} Most Spoken languages in the world`;

  languageArray.sort((a, b) => b[1] - a[1]);

  //preparing
  let maxLanguage = languageArray[0][1];

  //creating elements

  for (let i = 0; i < filteredCountries.length; i++) {
    //elem1
    const country1Div = document.createElement("div");
    country1Div.style.display = "flex";
    country1Div.style.alignItems = "center";
    country1Div.style.justifyContent = "space-between";
    country1Div.style.width = "80%";
    country1Div.style.margin = "0.5rem 0";

    answerDiv.appendChild(country1Div);
    //end elem1

    //elem1 content
    //p
    const countryName1 = document.createElement("p");
    countryName1.textContent = languageArray[i][0];
    countryName1.style.margin = "0 1.5rem 0 0 ";
    countryName1.style.fontSize = "1.5rem";
    countryName1.style.width = "15%";
    country1Div.appendChild(countryName1);

    //stat
    const countryStatContainer1 = document.createElement("div");
    countryStatContainer1.style.width = "100%";
    countryStatContainer1.style.height = "30px";
    countryStatContainer1.style.backgroundColor = "white";
    countryStatContainer1.style.display = "flex";
    countryStatContainer1.style.alignItems = "center";

    const countryStat1 = document.createElement("div");
    countryStat1.style.height = "100%";
    countryStat1.style.backgroundColor = "orange";
    let width = (languageArray[i][1] / maxLanguage) * 100 + "%";
    countryStat1.style.width = width;

    countryStatContainer1.appendChild(countryStat1);
    country1Div.appendChild(countryStatContainer1);

    //p
    const countryCount1 = document.createElement("p");
    countryCount1.textContent = languageArray[i][1];
    countryCount1.style.margin = "0 0 0 1.5rem";
    countryCount1.style.fontSize = "1.5rem";
    countryCount1.style.width = "5%";
    country1Div.appendChild(countryCount1);
  }
  //console.log(top10Languages);
}

function popBtn(filteredCountries) {
  const countryCount = filteredCountries.length;
  description.textContent = `${countryCount} Most populated countries in the world`;

  while (answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.firstChild);
  }

  const countryPopulations = filteredCountries.map((country) => [
    country.name,
    country.population,
  ]);

  countryPopulations.sort((a, b) => b[1] - a[1]);

  const populatedArray = countryPopulations.slice(0, 10);
  populatedArray.unshift(["World", worldCountPop()]);

  console.log(populatedArray);

  //preparing
  let maxPopulation = populatedArray[0][1];

  //creating elements

  for (let i = 0; i < populatedArray.length; i++) {
    //elem1
    const country1Div = document.createElement("div");
    country1Div.style.display = "flex";
    country1Div.style.alignItems = "center";
    country1Div.style.justifyContent = "space-between";
    country1Div.style.width = "80%";
    country1Div.style.margin = "0.5rem 0";

    answerDiv.appendChild(country1Div);
    //end elem1

    //elem1 content
    //p
    const countryName1 = document.createElement("p");
    console.log(populatedArray[i][0]);
    countryName1.textContent = populatedArray[i][0];
    countryName1.style.margin = "0 1.5rem 0 0 ";
    countryName1.style.fontSize = "1.5rem";
    countryName1.style.width = "15%";
    country1Div.appendChild(countryName1);

    //stat
    const countryStatContainer1 = document.createElement("div");
    countryStatContainer1.style.width = "100%";
    countryStatContainer1.style.height = "30px";
    countryStatContainer1.style.backgroundColor = "white";
    countryStatContainer1.style.display = "flex";
    countryStatContainer1.style.alignItems = "center";

    const countryStat1 = document.createElement("div");
    countryStat1.style.height = "100%";
    countryStat1.style.backgroundColor = "orange";
    let width = (populatedArray[i][1] / maxPopulation) * 100 + "%";
    countryStat1.style.width = width;

    countryStatContainer1.appendChild(countryStat1);
    country1Div.appendChild(countryStatContainer1);

    //p
    const countryCount1 = document.createElement("p");
    countryCount1.textContent = populatedArray[i][1];
    countryCount1.style.margin = "0 0 0 1.5rem";
    countryCount1.style.fontSize = "1.5rem";
    countryCount1.style.width = "5%";
    country1Div.appendChild(countryCount1);
  }
}

languagesBtn.addEventListener("click", function () {
  languageBtn(filteredCountries);
});
populationBtn.addEventListener("click", function () {
  popBtn(filteredCountries);
});

function worldCountPop() {
  let worldPopulation = 0;
  countries_data.forEach((country) => [
    (worldPopulation += country.population),
  ]);

  console.log(worldPopulation);
  return worldPopulation;
}
