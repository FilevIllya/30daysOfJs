//Getting elements by tag name
console.log("Getting elements by tag name");

const allTitles = document.getElementsByTagName("h1");

console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each elements in the HTMLCollection
}

//Getting elements by class name
console.log("Getting elements by class name");

const allTitles2 = document.getElementsByClassName("title");

console.log(allTitles2); //HTMLCollections
console.log(allTitles2.length); // 4

for (let i = 0; i < allTitles2.length; i++) {
  console.log(allTitles2[i]); // prints each elements in the HTMLCollection
}

//Getting an element by id. We pass the id without # as an argument.
console.log("Getting an element by id");

let firstTitleID = document.getElementById("first-title");
console.log(firstTitleID); // <h1>First Title</h1>

//Getting elements by using querySelector methods
let firstTitle1 = document.querySelector("h1"); // select the first available h1 element
let firstTitle2 = document.querySelector("#first-title"); // select id with first-title
let firstTitle3 = document.querySelector(".title"); // select the first available element with class title

//querySelectorAll
console.log("querySelectorAll");

const allTitles3 = document.querySelectorAll("h1"); //# selects all the available h1 elements in the page

console.log(allTitles3.length); // 4
for (let i = 0; i < allTitles3.length; i++) {
  console.log(allTitles3[i]);
}

allTitles3.forEach((title) => console.log(title));

const allTitles4 = document.querySelectorAll(".title"); // the same goes for selecting using class

//Adding attribute
const titles = document.querySelectorAll("h1");
titles[3].className = "title";
titles[3].id = "fourth-title";

//set attribute
const titles2 = document.querySelectorAll("h1");
titles2[3].setAttribute("class", "title");
titles2[3].setAttribute("id", "fourth-title");

//another way to setting an attribute
titles2[3].className = "title";
titles2[3].id = "fourth-title";

//Adding class using classList
//another way to setting an attribute: append the class, doesn't over ride
titles2[3].classList.add("title", "header-title");

//Removing class using remove

//another way to setting an attribute: append the class, doesn't over ride
titles2[3].classList.remove("title", "header-title");

//Adding Text content using textContent
const titles3 = document.querySelectorAll("h1");
titles3[3].textContent = "Fourth Title";

//Adding style
const titles4 = document.querySelectorAll("h1");
titles4.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = "green";
  } else {
    title.style.color = "red";
  }
});

//Adding Style Background Color
const titles5 = document.querySelectorAll("h1");
titles5.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 !== 0) {
    title.style.backgroundColor = "green";
  } else {
    title.style.backgroundColor = "red";
  }
});

//Adding Style Font Size
const titles6 = document.querySelectorAll("h1");
titles6.forEach((title, i) => {
  title.style.fontSize = "24px"; // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.fontSize = "20px";
  } else {
    title.style.fontSize = "30px";
  }
});
