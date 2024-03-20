//Destructing Arrays (unpack)

const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree);

//

const names = ["Asabeneh", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

//
const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;

console.log(e, pi, gravity, bodyTemp, boilingTemp);

//

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);

//Skip element

const numbers2 = [1, 2, 3];
let [numOne2, , numThree2] = numbers; //2 is omitted

console.log(numOne2, numThree2);

//

const names2 = ["Asabeneh", "Brook", "David", "John"];
let [, secondPerson2, , fourthPerson2] = names; // first and third person is omitted

console.log(secondPerson2, fourthPerson2);

//default

const names3 = [undefined, "Brook", "David"];
let [
  firstPerson3 = "Asabeneh",
  secondPerson3,
  thirdPerson3,
  fourthPerson3 = "John",
] = names;

console.log(firstPerson3, secondPerson3, thirdPerson3, fourthPerson3);

//...

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);

//Destructuring during iteration
console.log("Destructuring during iteration");
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}

const fullStack2 = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const [first, second, third] of fullStack2) {
  console.log(first, second, third);
}

//Destructuring Object
console.log("Destructuring Object");

//When we destructure the name of the variable we use to destructure
//should be exactly the same as the key or property of the object.See the example below.

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;

console.log(width, height, area, perimeter);

//Renaming during structuring
console.log("Renaming during structuring");

const rectangle2 = {
  width: 20,
  height: 10,
  area: 200,
};
let { width: w, height: h, area: a, perimeter: p } = rectangle2;

console.log(w, h, a, p);

//default
const rectangle3 = {
  width: 20,
  height: 10,
  area: 200,
};
let { width3, height3, area3, perimeter3 = 60 } = rectangle3;

console.log(width, height, area, perimeter); //20 10 200 60
//Let us modify the object:width to 30 and perimeter to 80

//Object parameter without destructuring
console.log("Object parameter without destructuring");

// Without destructuring
const rect = {
  width: 20,
  height: 10,
};
const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

console.log(calculatePerimeter(rect)); // 60
//with destructuring

console.log("EXAMPLE");

//Another Example
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  const personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

console.log(getPersonInfo(person));

//Object parameter with destructuring
console.log("Object parameter with destructuring");

console.log("Example 1");

const calculatePerimeter2 = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter2(rect)); // 60

console.log("Example 2");

// Let us create a function which give information about the person object with destructuring
const getPersonInfoD = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  const formattedSkills = skills.slice(0, -1).join(", ");
  const formattedLanguages = languages.slice(0, -1).join(", ");

  const personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};
console.log(getPersonInfoD(person));
/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/

//Destructuring object during iteration

console.log("Destructuring object during iteration");

const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

//Spread and Rest
console.log("Spread and Rest");

const numsS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1S, num2S, num3S, ...restS] = numsS;

console.log(num1, num2, num3);
console.log(rest);

//
const countriesS = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [gem, fra, , ...nordicCountries] = countriesS;

console.log(gem);
console.log(fra);
console.log(nordicCountries);

//Spread to copy array

const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];

console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

//

const frontEndS = ["HTML", "CSS", "JS", "React"];
const backEndS = ["Node", "Express", "MongoDB"];
const fullStackS = [...frontEndS, ...backEndS];

console.log(fullStackS);

//Spread operator to copy object
console.log("Spread operator to copy object");

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = { ...user };
console.log(copiedUser);

//Modifying or changing the object while copying
console.log("Modifying or changing the object while copying");

const user2 = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser2 = { ...user2, title: "instructor" };
console.log(copiedUser2);

//Spread operator with arrow function
console.log("Spread operator with arrow function");

const sumAllNums1 = (...args) => {
  console.log(args);
};

sumAllNums1(1, 2, 3, 4, 5);

const sumAllNums2 = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};

console.log(sumAllNums2(1, 2, 3, 4, 5));
