//LVL1
//Task 1
console.log("LVL 3");
console.log("Let's Begin");

//1. The year color is changing every 1 second
//2. The date and time background color is changing every on seconds
//3. Completed challenge has background green
//4. Ongoing challenge has background yellow
//5. Coming challenges have background red

//1
// const body = document.querySelector("body");
// body.style.margin = "0 auto";

const wrapperElement = document.querySelector(".wrapper");
wrapperElement.style.textAlign = "center";
wrapperElement.style.width = "70%";
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
