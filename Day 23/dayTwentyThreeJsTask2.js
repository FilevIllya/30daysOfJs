//LVL1
//Task 1
console.log("LVL 1");
console.log("Task 2");
//first info
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "column";

const container = document.createElement("div");
container.textContent = "Press any key";
container.style.fontSize = "3rem";
container.style.textAlign = "center";
container.style.fontWeight = "bold";
container.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
container.style.border = "2px solid #ccc";
container.style.padding = "20px";
container.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.1)";
container.style.width = "70%";
container.style.margin = "0 auto";
document.body.appendChild(container);

const parag = document.createElement("p");
parag.textContent = "Very long text";
parag.style.color = "rgb(60,179,113)";

const answerContainer = document.createElement("div");
answerContainer.style.fontSize = "3rem";
answerContainer.style.display = "inline-block";
answerContainer.style.textAlign = "center";
answerContainer.style.fontWeight = "bold";
answerContainer.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)";
answerContainer.style.border = "2px solid #ccc";
answerContainer.style.padding = "20px";
answerContainer.style.boxShadow = "5px 5px 10px rgba(0, 0, 0, 0.1)";
answerContainer.style.margin = "0 auto";

answerContainer.appendChild(parag);
document.body.appendChild(answerContainer);

document.body.addEventListener("keydown", (e) => {
  parag.textContent = e.keyCode;
  container.textContent = "You press " + e.key;
});
