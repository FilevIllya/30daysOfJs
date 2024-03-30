//Storing string in a localStorage
localStorage.setItem("firstName", "Asabeneh"); // since the value is string we do not stringify it
console.log(localStorage);

//Storing number in a local storage
localStorage.setItem("age", 200);
console.log(localStorage);

//objects and array
const skills = ["HTML", "CSS", "JS", "React"];
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem("skills", skillsJSON);
console.log(localStorage);

let skills2 = [
  { tech: "HTML", level: 10 },
  { tech: "CSS", level: 9 },
  { tech: "JS", level: 8 },
  { tech: "React", level: 9 },
  { tech: "Redux", level: 10 },
  { tech: "Node", level: 8 },
  { tech: "MongoDB", level: 8 },
];

let skillJSON = JSON.stringify(skills2);
localStorage.setItem("skills", skillJSON);

//toString

const user = {
  firstName: "Asabeneh",
  age: 250,
  skills: ["HTML", "CSS", "JS", "React"],
};

const userText = JSON.stringify(user, undefined, 4);
localStorage.setItem("user", userText);

//Getting item from localStorage

let firstNameG = localStorage.getItem("firstName");
let ageG = localStorage.getItem("age");
let skillsG = localStorage.getItem("skills");
console.log(firstNameG, ageG, skillsG);

//To JSON array

let skillsJ = localStorage.getItem("skills");
let skillsObj = JSON.parse(skillsG, undefined, 4);
console.log(skillsObj);

//clear

localStorage.clear();
