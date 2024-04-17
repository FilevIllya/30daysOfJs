//LVL2
//Task 1
console.log("LVL 2");
//
const H1Element = document.querySelector("h1");
H1Element.style.textAlign = "center";
H1Element.style.margin = "1rem 0";
const H2Element = document.querySelector("h2");
H2Element.style.textAlign = "center";
H2Element.style.margin = "0";
const H3Element = document.querySelectorAll("h3");
H3Element.forEach((element) => {
  element.style.textAlign = "center";
  element.style.margin = "0";
});
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

myDivElement.id = "CountryListDiv";

document.body.appendChild(myDivElement);

//
//countries generate
import countries_data from "./countries_data.js";

let countryDiv;
for (let i = 0; i <= countries_data.length; i++) {
  countryDiv = document.createElement("div");
  countryDiv.textContent = countries_data[i].name;
  countryDiv.className = "countryDiv";
  countryDiv.style.padding = "1rem 0";
  countryDiv.style.margin = "0.2rem";
  countryDiv.style.border = "2px solid black";
  countryDiv.style.fontSize = "1rem";
  countryDiv.style.width = "calc(100%/7)";
  countryDiv.style.height = "50px";
  countryDiv.style.display = "flex";
  countryDiv.style.justifyContent = "center";
  countryDiv.style.alignItems = "center";
  countryDiv.style.textAlign = "center";
  countryDiv.style.color = "black";

  myDivElement.appendChild(countryDiv);
}
