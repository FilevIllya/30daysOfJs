//LVL1
//Task 1
console.log("LVL 1");
console.log("Task 1");

import countries_data from "./countries_data.js";
//console.log(countries_data);
//
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "column";
document.body.style.backgroundColor = "rgb(230, 230, 230)";

//
const h1Elem = document.createElement("h1");
h1Elem.textContent = "World Countries Data";
h1Elem.style.color = "orange";
h1Elem.style.fontSize = "3rem";
h1Elem.style.margin = "2rem 0 0 0";

document.body.appendChild(h1Elem);
//
let countriesCount = countries_data.length;
const h2Elem = document.createElement("h2");
h2Elem.textContent = "Curently we have " + countriesCount + " countries";

document.body.appendChild(h2Elem);

//input div

const inputDiv = document.createElement("div");

inputDiv.style.display = "flex";
inputDiv.style.alignItems = "center";
inputDiv.style.justifyContent = "center";
inputDiv.style.flexDirection = "column";
inputDiv.style.backgroundColor = "white";
inputDiv.style.width = "100%";
inputDiv.style.padding = "2rem";
inputDiv.style.boxShadow =
  "0 -5px 10px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2)";

document.body.appendChild(inputDiv);

const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.alignItems = "center";
buttonContainer.style.justifyContent = "center";
buttonContainer.style.flexDirection = "row";

inputDiv.appendChild(buttonContainer);

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
description.textContent = "10 Most Spoken languages in the world";

inputDiv.appendChild(description);

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

function languageBtn() {
  description.textContent = "10 Most Spoken languages in the world";

  while (answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.firstChild);
  }

  const languageCounter = new Map();

  countries_data.forEach((country) => {
    // every language
    country.languages.forEach((language) => {
      languageCounter.set(language, (languageCounter.get(language) || 0) + 1);
    });
  });

  // like dictionary
  const languageArray = Array.from(languageCounter.entries());

  languageArray.sort((a, b) => b[1] - a[1]);

  const top10Languages = languageArray.slice(0, 10);

  //preparing
  let maxLanguage = languageArray[0][1];

  //creating elements

  for (let i = 0; i < 10; i++) {
    //elem1
    const country1Div = document.createElement("div");
    country1Div.style.display = "flex";
    country1Div.style.alignItems = "center";
    country1Div.style.justifyContent = "space-between";
    country1Div.style.width = "80%";

    answerDiv.appendChild(country1Div);
    //end elem1

    //elem1 content
    //p
    const countryName1 = document.createElement("p");
    countryName1.textContent = languageArray[i][0];
    countryName1.style.margin = "0 1.5rem 0 0 ";
    countryName1.style.fontSize = "2rem";
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
    countryCount1.style.fontSize = "2rem";
    countryCount1.style.width = "5%";
    country1Div.appendChild(countryCount1);
  }
  //console.log(top10Languages);
}

function popBtn() {
  description.textContent = "10 Most populated countries in the world";

  while (answerDiv.firstChild) {
    answerDiv.removeChild(answerDiv.firstChild);
  }

  const countryPopulations = countries_data.map((country) => [
    country.name,
    country.population,
  ]);

  countryPopulations.sort((a, b) => b[1] - a[1]);

  const populatedArray = countryPopulations.slice(0, 10);

  console.log(populatedArray);

  //preparing
  let maxPopulation = populatedArray[0][1];

  //creating elements

  for (let i = 0; i < 10; i++) {
    //elem1
    const country1Div = document.createElement("div");
    country1Div.style.display = "flex";
    country1Div.style.alignItems = "center";
    country1Div.style.justifyContent = "space-between";
    country1Div.style.width = "80%";

    answerDiv.appendChild(country1Div);
    //end elem1

    //elem1 content
    //p
    const countryName1 = document.createElement("p");
    countryName1.textContent = populatedArray[i][0];
    countryName1.style.margin = "0 1.5rem 0 0 ";
    countryName1.style.fontSize = "2rem";
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
    countryCount1.style.fontSize = "2rem";
    countryCount1.style.width = "5%";
    country1Div.appendChild(countryCount1);
  }
}

languagesBtn.addEventListener("click", languageBtn);
populationBtn.addEventListener("click", popBtn);
