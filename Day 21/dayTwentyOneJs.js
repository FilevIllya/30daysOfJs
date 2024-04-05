//LVL1
//Task 1
console.log("LVL 1");
console.log("Task 1");

let tagNameElem = document.querySelector("p");

console.log(tagNameElem);

//Task 2
console.log("Task 2");
const paragraph1 = document.querySelector("#first-paragraph");
const paragraph2 = document.querySelector("#second-paragraph");
const paragraph3 = document.querySelector("#third-paragraph");

console.log(paragraph1);
console.log(paragraph2);
console.log(paragraph3);
//Task 3
console.log("Task 3");
const nodeList = document.querySelectorAll("p");

console.log(nodeList);

//Task 4
console.log("Task 4");

for (let i = 0; i < nodeList.length; i++) {
  console.log(nodeList[i].textContent);
}

//Task 5
console.log("Task 5");
nodeList[3].textContent = "Fourth Paragraph";

//Task 6
console.log("Task 6");

const firstParagraph = document.getElementById("first-paragraph");
firstParagraph.setAttribute("class", "title");
firstParagraph.setAttribute("id", "first-paragraph");

const secondParagraph = document.getElementById("second-paragraph");
secondParagraph.className = "title";
secondParagraph.id = "second-paragraph";

const thirdParagraph = document.getElementById("third-paragraph");
thirdParagraph.classList.add("title");
thirdParagraph.id = "third-paragraph";

//LVL 2
//Task 1
console.log("LVL 2");
console.log("Task 1");

// const firstParagraphS = document.getElementById("first-paragraph");
// firstParagraphS.style.color = "blue";
// firstParagraphS.style.backgroundColor = "yellow";
// firstParagraphS.style.border = "1px solid black";
// firstParagraphS.style.fontSize = "20px";
// firstParagraphS.style.fontFamily = "Arial";

// const secondParagraphS = document.getElementById("second-paragraph");
// secondParagraphS.style.color = "red";
// secondParagraphS.style.backgroundColor = "green";
// secondParagraphS.style.border = "2px dashed blue";
// secondParagraphS.style.fontSize = "18px";
// secondParagraphS.style.fontFamily = "Verdana";

// const thirdParagraphS = document.getElementById("third-paragraph");
// thirdParagraphS.style.color = "white";
// thirdParagraphS.style.backgroundColor = "black";
// thirdParagraphS.style.border = "none";
// thirdParagraphS.style.fontSize = "16px";
// thirdParagraphS.style.fontFamily = "Times New Roman";

//Task 2
console.log("Task 2");

for (let i = 0; i < nodeList.length; i++) {
  if (i % 2 === 0) {
    nodeList[i].style.color = "green";
  } else {
    nodeList[i].style.color = "red";
  }
}

//Task 3
console.log("Task 3");

for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].textContent = nodeList[i].textContent + " Changed";
  nodeList[i].id = "new-id-paragraph-" + (i + 1);
  nodeList[i].classList.add("Changed");
}
