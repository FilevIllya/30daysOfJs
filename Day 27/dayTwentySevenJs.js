//LVL1
//Task 1
console.log("LVL 1");
console.log("Task 1");

document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.textAlign = "center";
document.body.style.flexDirection = "column";

const mainDiv = document.createElement("div");
mainDiv.style.display = "flex";
mainDiv.style.alignItems = "center";
mainDiv.style.justifyContent = "center";
mainDiv.style.textAlign = "center";
mainDiv.style.width = "80%";
mainDiv.style.flexDirection = "column";
document.body.appendChild(mainDiv);

const H1Element = document.createElement("h1");
H1Element.style.fontSize = "5rem";
H1Element.style.textTransform = "uppercase";
H1Element.style.fontWeight = "bold";
H1Element.textContent = "Asabeneh Yetayeh";

mainDiv.appendChild(H1Element);

const animationDiv = document.createElement("div");
animationDiv.style.backgroundColor = "wheat";
animationDiv.style.width = "100%";
animationDiv.style.textAlign = "left";

mainDiv.appendChild(animationDiv);

const smile = document.createElement("p");
smile.textContent = "🔥";
smile.style.display = "inline-block";
smile.style.margin = "1rem";

animationDiv.appendChild(smile);

const emptyP = document.createElement("p");
emptyP.textContent = " ";
emptyP.style.display = "inline-block";
emptyP.style.margin = "0";
emptyP.style.color = "wheat";

animationDiv.appendChild(emptyP);

const animationText = document.createElement("p");
animationText.textContent = "Instructor";
animationText.style.display = "inline-block";
animationText.style.margin = "1rem";
animationText.style.fontSize = "1.5rem";

animationDiv.appendChild(animationText);

const longDescriptionText = document.createElement("p");
longDescriptionText.textContent =
  "I am Asabeneh Yetayeh. I am instructor, developer, motivator and content creator. I love educating people and creating educational materials. In January 2019, I also created a teaching material JavaScript For Everyone. In December 2019, I created 30 Days of Python chalange and in January 2020 30 Days of JavaScript chalandge";
longDescriptionText.style.textAlign = "left";
longDescriptionText.style.display = "inline-block";
longDescriptionText.style.fontSize = "1.5rem";
mainDiv.appendChild(longDescriptionText);

// 3 PROGRAMS DIV
const threeProgramsDiv = document.createElement("div");
threeProgramsDiv.style.display = "flex";
threeProgramsDiv.style.flexDirection = "row";
threeProgramsDiv.style.width = "80%";

//1
const chalandge1 = document.createElement("div");
chalandge1.textContent = "JavaScript for everyone";
chalandge1.style.textTransform = "uppercase";
chalandge1.style.fontSize = "1.75rem";
chalandge1.style.padding = "2rem";
chalandge1.style.margin = "2rem";
chalandge1.style.width = "30%";
chalandge1.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
chalandge1.style.textAlign = "center";
chalandge1.style.alignItems = "center";
threeProgramsDiv.appendChild(chalandge1);
//2
const chalandge2 = document.createElement("div");
chalandge2.textContent = "30 days of Python";
chalandge2.style.textTransform = "uppercase";
chalandge2.style.fontSize = "1.75rem";
chalandge2.style.padding = "2rem";
chalandge2.style.margin = "2rem";
chalandge2.style.width = "30%";
chalandge2.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
chalandge2.style.textAlign = "center";
chalandge2.style.alignItems = "center";
threeProgramsDiv.appendChild(chalandge2);

//3
const chalandge3 = document.createElement("div");
chalandge3.textContent = "30 days of JavaScript";
chalandge3.style.textTransform = "uppercase";
chalandge3.style.fontSize = "1.75rem";
chalandge3.style.padding = "2rem";
chalandge3.style.margin = "2rem";
chalandge3.style.width = "30%";
chalandge3.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
chalandge3.style.textAlign = "center";
chalandge3.style.alignItems = "center";
threeProgramsDiv.appendChild(chalandge3);

document.body.appendChild(threeProgramsDiv);

//functions
function handleMouseEnter(event) {
  const div = event.target;
  div.style.transform = "scale(1.1)";
  div.style.backgroundColor = "wheat";
}

function handleMouseLeave(event) {
  const div = event.target;
  div.style.transform = "scale(1)";
  div.style.backgroundColor = "white";
}

chalandge1.addEventListener("mouseenter", handleMouseEnter);
chalandge1.addEventListener("mouseleave", handleMouseLeave);
chalandge2.addEventListener("mouseenter", handleMouseEnter);
chalandge2.addEventListener("mouseleave", handleMouseLeave);
chalandge3.addEventListener("mouseenter", handleMouseEnter);
chalandge3.addEventListener("mouseleave", handleMouseLeave);

//i teach

const teachDiv = document.createElement("div");
teachDiv.style.display = "flex";
teachDiv.style.width = "80%";
teachDiv.style.textAlign = "left";
teachDiv.style.alignItems = "center";

const miniText = document.createElement("p");
miniText.style.fontSize = "1.5rem";
miniText.textContent = "The technologes I teach: ";
miniText.style.display = "inline-block";
miniText.style.margin = "0 2rem 0 0";
teachDiv.appendChild(miniText);

const animationTech = document.createElement("p");
animationTech.style.margin = 0;
animationTech.style.fontSize = "2.5rem";
animationTech.style.textTransform = "uppercase";
animationTech.textContent = "Mongo DB";
animationTech.style.display = "inline-block";
teachDiv.appendChild(animationTech);

document.body.appendChild(teachDiv);

//timer

const smiles = ["🔥", "🔥", "📁", "🌱", "💻"];
const called = [
  "Motivator",
  "Motivation Speaker",
  "Content Creator",
  "Educator",
  "Programmer",
];
const tech = ["JavaScript", "Redux", "Python", "MongoDB", "Node", "Pandas"];

let count = 0;
let i = 0;
let j = 0;

const interval = setInterval(() => {
  count++;
  emptyP.textContent += "I";
  animationTech.style.opacity = parseFloat(animationTech.style.opacity) + 0.1;
  animationText.style.opacity = parseFloat(animationText.style.opacity) + 0.2;
  smile.textContent = smiles[i];
  animationText.textContent = called[i];
  animationTech.textContent = tech[j];
  if (count >= 10) {
    count = 0;
    emptyP.textContent = "";
    animationTech.style.color = getRandomRGBColor();
    animationTech.style.opacity = 0;
    animationText.style.opacity = 0;
    if (i >= smiles.length - 1) {
      i = 0;
    } else {
      i++;
    }

    if (j >= tech.length - 1) {
      j = 0;
    } else {
      j++;
    }
  }
}, 250);

function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
