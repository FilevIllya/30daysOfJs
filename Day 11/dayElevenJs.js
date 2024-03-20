const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

//LVL1
//1
console.log("LVL1");
console.log("Task 1");

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

//2
console.log("Task 2");

let [fin, est, sw, den, nor] = countries;

console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

//3
console.log("Task 3");

let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);

//LVL2
//1
console.log("LVL2");
console.log("Task 1");

const keys = [];

users.forEach((user) => {
  const { name, scores, skills, age } = user;

  keys.push(user);
});

console.log(keys);

//2
console.log("Task 2");

const keys2 = [];

users.forEach((user) => {
  const { name, scores, skills, age } = user;

  keys2.push(user);
});

const lessThan2SkillsUsers = [];
for (let i = 0; i < keys2.length; i++) {
  if (keys2[i].skills.length < 2) {
    lessThan2SkillsUsers.push(keys2[i]);
  }
}

console.log(lessThan2SkillsUsers);

//LVL3
//1
console.log("LVL 3");
console.log("Task 1");
import countries_data from "./countries_data.js";

const countriesArray = [];

countries_data.forEach((country) => {
  const { name, capital, languages, population } = countries_data;

  countriesArray.push(
    `Country name is ${country.name}. Capital of this country is ${country.capital}, most popular languages are ${country.languages}. Population: ${country.population}}`
  );
});

console.log(countriesArray);

//2
console.log("Task 2");

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

const [name, skills, scores] = student;
const [htmlScore, cssScore, jsScore, reactScore] = scores;

console.log(name, skills, jsScore, reactScore);

//3
console.log("Task 3");

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(array) {
  const objects = [];
  array.forEach((element) => {
    const [name, skills, scores] = element;

    const newObjElement = {
      name,
      skills,
      scores,
    };

    objects.push(newObjElement);
  });

  return objects;
}

console.log(convertArrayToObject(students));

//4
console.log("Task 4");

const davidStudent = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const copiedDavid = { ...davidStudent };
console.log(copiedDavid);

copiedDavid.skills.frontEnd.push({
  skill: "Bootstrap",
  level: 8,
});

copiedDavid.skills.backEnd.push({
  skill: "Express",
  level: 9,
});

copiedDavid.skills.dataBase.push({
  skill: "SQL",
  level: 8,
});

copiedDavid.skills.dataScience.push("SQL");

console.log(copiedDavid);
