//LVL1
//Task 1
console.log("LVL 3");
console.log("Let's Begin");

//1
// const body = document.querySelector("body");
// body.style.margin = "0 auto";

const wrapperElement = document.querySelector(".wrapper");
wrapperElement.style.textAlign = "center";
wrapperElement.style.width = "80%";
wrapperElement.style.margin = "0 auto";

const h2Elem = document.querySelector("h2");
h2Elem.style.textDecoration = "underline";
h2Elem.style.fontSize = "1.5rem";

const year = document.querySelector("span");
year.style.fontSize = "4rem";
year.style.fontFamily = "Consolas";
year.style.fontWeight = "bold";

const h2Element = document.querySelector("h2");
const ulElement = document.querySelector("ul");

// data element
const currentDateElement = document.createElement("p");

currentDateElement.style.backgroundColor = "wheat";
currentDateElement.style.display = "inline";
currentDateElement.style.fontSize = "1.5rem";
currentDateElement.style.fontWeight = "bold";
currentDateElement.style.padding = "0.75rem";

currentDateElement.classList.add("dataObject");

function updateCurrentDate() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })} ${currentDate.toLocaleTimeString("en-US", {
    hour12: false,
  })}`;
  currentDateElement.textContent = formattedDate;
}

updateCurrentDate();

setInterval(updateCurrentDate, 1000);

h2Element.parentNode.insertBefore(currentDateElement, ulElement);

//2
function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function updateColorsAndYear() {
  const currentDate = new Date();
  const yearSpan = document.querySelector("span");
  const wrapper = document.querySelector(".dataObject");

  yearSpan.textContent = currentDate.getFullYear();
  yearSpan.style.color = getRandomRGBColor();
  wrapper.style.backgroundColor = getRandomRGBColor();
}

setInterval(updateColorsAndYear, 1000);

//3,4,5
const allLiElements = document.querySelectorAll("li");

console.log(allLiElements);

for (let i = 0; i < allLiElements.length; i++) {
  if (allLiElements[i].textContent.includes("Done")) {
    allLiElements[i].style.backgroundColor = "green";
  } else if (allLiElements[i].textContent.includes("Ongoing")) {
    allLiElements[i].style.backgroundColor = "yellow";
  } else if (allLiElements[i].textContent.includes("Coming")) {
    allLiElements[i].style.backgroundColor = "red";
  }

  allLiElements[i].style.fontSize = "1.5rem";
  allLiElements[i].style.textAlign = "center";
  allLiElements[i].style.padding = "1rem";
  allLiElements[i].style.margin = "0.25rem";
}

//otherStyles

const ulElem = document.querySelector("ul");
ulElem.style.listStyle = "none";

//centred list with details
const listItems = document.querySelectorAll("#main-list > li");

listItems.forEach((item) => {
  const link = item.querySelector("a");
  const details = item.querySelector("details");
  const status = item.querySelector(".status");

  link.style.float = "left";
  details.style.display = "inline-block";
  status.style.float = "right";
});

//decoration
//ul
const languageList = document.querySelectorAll(".language");

languageList.forEach((element) => {
  element.style.listStyle = "none";
});

//li
const languageListItems = document.querySelectorAll(".language > li");

languageListItems.forEach((element) => {
  element.style.margin = "0";
  element.style.padding = "0";
  element.style.textAlign = "left";
});
//a
const anchors = document.querySelectorAll("a");

anchors.forEach((element) => {
  element.style.color = "black";
});

//POST LIST
const myName = document.createElement("h2");
myName.textContent = "Illiya Filiov";
myName.style.fontWeight = "bold";
myName.style.textAlign = "center";

wrapperElement.insertAdjacentElement("afterend", myName);

//logos
const logosContainer = document.createElement("div");
logosContainer.id = "logos-container";
logosContainer.style.textAlign = "center";
document.body.appendChild(logosContainer);

const instagramLogo = document.createElement("img");
instagramLogo.src = "images/insta.png";
instagramLogo.alt = "Instagram Logo";
instagramLogo.style.width = "30px";
instagramLogo.style.height = "30px";
logosContainer.appendChild(instagramLogo);

const facebookLogo = document.createElement("img");
facebookLogo.src = "images/facebook.png";
facebookLogo.alt = "Facebook Logo";
facebookLogo.style.width = "30px";
facebookLogo.style.height = "30px";
logosContainer.appendChild(facebookLogo);

const githubLogo = document.createElement("img");
githubLogo.src = "images/github.png";
githubLogo.alt = "GitHub Logo";
githubLogo.style.width = "30px";
githubLogo.style.height = "30px";
logosContainer.appendChild(githubLogo);

//about myself

const paragDiv = document.createElement("div");
paragDiv.id = "parag-container";
paragDiv.style.width = "70%";
paragDiv.style.textAlign = "center";
paragDiv.style.margin = "auto";
document.body.appendChild(paragDiv);

const parag = document.createElement("p");
parag.textContent =
  "I am student of NTU \"KHPI\". I'm completed courses on QA and testing, Unity Development, C#, MS-SQL, HTML, CSS and JS. I'm study hard and trying to become better.";
parag.id = "mySelfP";
parag.style.textAlign = "center";
paragDiv.appendChild(parag);

//triple list

// ul
const mainList = document.createElement("ul");
mainList.id = "main-list";
mainList.style.listStyle = "none";
mainList.style.display = "flex";
mainList.style.justifyContent = "space-between";
mainList.style.alignItems = "center";
mainList.style.margin = "auto";
mainList.style.width = "80%";
document.body.appendChild(mainList);

//  1
const titlesItem = document.createElement("li");
const titlesSummary = document.createElement("summary");
titlesSummary.textContent = "Titles";
titlesSummary.style.fontWeight = "Bold";
titlesSummary.style.fontSize = "1.5rem";
titlesItem.appendChild(titlesSummary);

const titlesList = document.createElement("ul");
titlesList.className = "tripleList";
["Student", "Programmer", "Developer"].forEach((element) => {
  const elementItem = document.createElement("li");
  elementItem.textContent = element;
  titlesList.appendChild(elementItem);
});
titlesItem.appendChild(titlesList);
mainList.appendChild(titlesItem);

// 2
const skillsItem = document.createElement("li");
const skillsSummary = document.createElement("summary");
skillsSummary.textContent = "Skills";
skillsSummary.style.fontWeight = "Bold";
skillsSummary.style.fontSize = "1.5rem";
skillsItem.appendChild(skillsSummary);

const skillsList = document.createElement("ul");
skillsList.className = "tripleList";
["JavaScript", "Html", "CSS", "C#", "MS-SQL", "QA", "Unity"].forEach(
  (element) => {
    const elementItem = document.createElement("li");
    elementItem.textContent = element;
    skillsList.appendChild(elementItem);
  }
);
skillsItem.appendChild(skillsList);
mainList.appendChild(skillsItem);

//3
const qualItem = document.createElement("li");
const qualSummary = document.createElement("summary");
qualSummary.textContent = "Qualifications";
qualSummary.style.fontWeight = "Bold";
qualSummary.style.fontSize = "1.5rem";
qualItem.appendChild(qualSummary);

const qualList = document.createElement("ul");
qualList.className = "tripleList";
['Student of NTU "KHPI"'].forEach((element) => {
  const elementItem = document.createElement("li");
  elementItem.textContent = element;
  qualList.appendChild(elementItem);
});
qualItem.appendChild(qualList);
mainList.appendChild(qualItem);

const elements = document.querySelectorAll(".tripleList");

elements.forEach((element) => {
  element.style.float = "left";
  element.style.boxSizing = "border-box";
  element.style.textDecoration = "none";
  element.style.listStyle = "none";
});

//final box
const KeywordDiv = document.createElement("div");
KeywordDiv.style.width = "70%";
KeywordDiv.style.margin = "0 auto";
KeywordDiv.style.display = "flex";
KeywordDiv.style.flexWrap = "wrap";
KeywordDiv.style.justifyContent = "space-between";

const keywords = [
  "# HTML",
  "# HTML5",
  "# CSS",
  "# CSS3",
  "# JS",
  "# JavaScript",
  "# ES6",
  "# Promise",
  "# async await",
  "# Database",
  "# React",
  "# React Hooks",
  "# Context API",
  "# React Router",
  "# Redux",
  "# Node",
  "# MongoDB",
  "# SQL",
  "# API",
  "# DOM",
  "# data science",
  "# MERN",
  "# Python",
  "# Flask",
  "# Statistics",
  "# Linear Algebra",
  "# Numpy",
  "# Pandas",
  "# Scipy",
  "# Scikit-learn",
  "# Visualization",
  "# D3.js",
];

for (let i = 0; i <= keywords.length - 1; i++) {
  const paragraph = document.createElement("p");
  paragraph.textContent = keywords[i];
  paragraph.style.padding = "10px";
  paragraph.style.backgroundColor = getRandomRGBColor();
  paragraph.style.borderRadius = "10px";
  KeywordDiv.appendChild(paragraph);
}

const pKeywords = document.createElement("p");
pKeywords.textContent = "Keywords";
pKeywords.style.fontWeight = "Bold";
pKeywords.style.fontSize = "1.5rem";
pKeywords.style.margin = "0 0 0 10rem";

document.body.appendChild(pKeywords);
document.body.appendChild(KeywordDiv);
