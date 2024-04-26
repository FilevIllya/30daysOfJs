//LVL1
//Task 1
console.log("LVL 1");
console.log("Task 1");

document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "column";
document.body.style.backgroundImage = "url('./images/space.gif')";

const h1Elem = document.createElement("h1");
h1Elem.style.color = "white";
h1Elem.textContent = "Calculate a weight of an object on a planet";
h1Elem.style.fontSize = "3rem";
document.body.appendChild(h1Elem);

//select weight and planet
const chooseContainer = document.createElement("div");
chooseContainer.style.display = "flex";
chooseContainer.style.flexDirection = "row";
chooseContainer.style.justifyContent = "center";
document.body.appendChild(chooseContainer);

const inputW = document.createElement("input");
inputW.id = "inpW";
inputW.type = "number";
inputW.placeholder = "Mass in Kilogram";
inputW.style.margin = "0.5rem";
inputW.style.height = "3rem";
inputW.style.fontSize = "2rem";

chooseContainer.appendChild(inputW);

const selectPlanet = document.createElement("select");
selectPlanet.id = "planetSelect";
selectPlanet.style.margin = "0.5rem";
selectPlanet.style.height = "3.3rem";
selectPlanet.style.fontSize = "2rem";
selectPlanet.style.cursor = "pointer";

const planets = [
  "Earth",
  "Moon",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
  "Pluto",
];
planets.forEach((planet) => {
  const option = document.createElement("option");
  option.value = planet.toLowerCase();
  option.textContent = planet;
  selectPlanet.appendChild(option);
});

chooseContainer.appendChild(selectPlanet);

const calcButton = document.createElement("button");

calcButton.textContent = "Calcuate weight";
calcButton.style.width = "auto";
calcButton.style.margin = "0.5rem";
calcButton.style.fontSize = "1.5rem";
calcButton.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
calcButton.style.color = "white";
calcButton.style.border = "none";
calcButton.style.verticalAlign = "middle";
calcButton.style.cursor = "pointer";

chooseContainer.appendChild(calcButton);
// //TEST
// const testH2 = document.createElement("h2");
// testH2.style.color = "white";
// testH2.textContent = selectPlanet.value;
// testH2.style.fontSize = "3rem";
// document.body.appendChild(testH2);

//gray box
const bigAnswerDiv = document.createElement("div");
bigAnswerDiv.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
bigAnswerDiv.style.display = "flex";
bigAnswerDiv.style.flexDirection = "row";
bigAnswerDiv.style.justifyContent = "center";
bigAnswerDiv.style.width = "70%";
//
const planetPhoto = document.createElement("img");
planetPhoto.src = "./images/earth.png";
planetPhoto.style.margin = "3rem";
bigAnswerDiv.appendChild(planetPhoto);
//
const answerDiv = document.createElement("div");
answerDiv.style.display = "flex";
answerDiv.style.flexDirection = "column";
answerDiv.style.justifyContent = "center";
bigAnswerDiv.appendChild(answerDiv);

const aboutMass = document.createElement("p");
aboutMass.style.color = "white";
aboutMass.textContent = "Mass is required";
aboutMass.style.fontSize = "3rem";
answerDiv.appendChild(aboutMass);

const massP = document.createElement("p");
massP.style.margin = "auto";
massP.style.padding = "50px";
massP.style.display = "inline-block";
massP.style.color = "white";
massP.style.fontSize = "2.5rem";
massP.style.textAlign = "center";
massP.style.borderRadius = "50%";
massP.style.width = "120px";
massP.style.height = "120px";
massP.style.lineHeight = "120px";
answerDiv.appendChild(massP);

document.body.appendChild(bigAnswerDiv);

//functions
selectPlanet.addEventListener("change", function () {
  const selectedPlanet = selectPlanet.value;

  //photo
  planetPhoto.src = "./images/" + selectedPlanet.toLowerCase() + ".png";
});

calcButton.addEventListener("click", function () {
  const selectedPlanet = selectPlanet.value;

  //mass
  let gravityCoefficient;
  const mass = inputW.value;
  switch (selectedPlanet.toLowerCase()) {
    case "earth":
      gravityCoefficient = 9.81;
      break;
    case "mercury":
      gravityCoefficient = 3.7;
      break;
    case "venus":
      gravityCoefficient = 8.87;
      break;
    case "mars":
      gravityCoefficient = 3.71;
      break;
    case "jupiter":
      gravityCoefficient = 24.79;
      break;
    case "saturn":
      gravityCoefficient = 10.44;
      break;
    case "uranus":
      gravityCoefficient = 8.69;
      break;
    case "neptune":
      gravityCoefficient = 11.15;
      break;
    case "pluto":
      gravityCoefficient = 0.62;
      break;
    case "moon":
      gravityCoefficient = 0.162;
      break;
    default:
      return "ERROR";
  }

  const weightOnPlanet = (mass * gravityCoefficient).toFixed(2);
  massP.textContent = weightOnPlanet + "N";
  massP.style.backgroundColor = "rgba(128, 128, 128, 0.8)";
});
