const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

//LVL1
//Task 1
console.log("Task 1");

const skillsArr = JSON.stringify(skills);
console.log(skillsArr);

//2
console.log("Task 2");

const ageArr = JSON.stringify(age);
console.log(ageArr);

//3
console.log("Task 3");

const marArr = JSON.stringify(isMarried);
console.log(marArr);

//4
console.log("Task 4");

const studArr = JSON.stringify(student);
console.log(studArr);

//LVL2
//1
console.log("LVL 2");
console.log("Task 1");

const studentJs = JSON.stringify(student, ["firstName", "lastName", "skills"]);

console.log(studentJs);

//LVL3
//1
console.log("LVL 3");
console.log("Task 1");

const textObj = JSON.parse(txt);

console.log(textObj);

//2
console.log("Task 2");

let mostSkillsChar = 0;
let maxSkillsCount = 0;

const data = JSON.parse(txt);

const userNames = Object.keys(data);
for (let i = 0; i < userNames.length; i++) {
  const userName = userNames[i];
  const skillsCount = data[userName].skills.length;
  if (skillsCount > maxSkillsCount) {
    mostSkillsChar = userName;
    maxSkillsCount = skillsCount;
  }
}

console.log(
  `User with the most skills is ${mostSkillsChar} with ${maxSkillsCount} skills.`
);
