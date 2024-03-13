//LVL1
//1
const dog = {};

//2
console.log(dog);

//3
dog.name = "Barsic";
dog.legs = 4;
dog.color = "gray";
dog.age = 5;

dog.bark = function () {
  return "woof woof";
};

//4
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

//5
dog.breed = "wild";
dog.getDogInfo = function () {
  return `Dog's name - ${dog.name}, Dog's legs count - ${dog.legs}, Dog's colot - ${dog.color}, Dog's age -${dog.age}, Dog's breed - ${dog.breed}`;
};

//LVL2;
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "MERN"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//1
console.log("LVL2");
console.log("Task 1");

function manySkills() {
  const keys = Object.keys(users);
  let bestSkills = 0;
  let index = -1;
  for (let i = 0; i < keys.length; i++) {
    if (users[keys[i]].skills.length > bestSkills) {
      index = i;
      bestSkills = users[keys[i]].skills.length;
    }
  }

  return index;
}

console.log(manySkills());

//2
console.log("Task 2");

function activeUsers() {
  const keys = Object.keys(users);
  let allUsers = 0;
  let moreThan50Users = 0;
  for (let i = 0; i < keys.length; i++) {
    allUsers++;
    if (users[keys[i]].points >= 50) {
      moreThan50Users++;
    }
  }

  return [allUsers, moreThan50Users];
}

console.log(activeUsers());

//3
console.log("Task 3");

function MERNUsers() {
  const mernSkillsUsers = [];
  const keys = Object.keys(users);
  for (let i = 0; i < keys.length; i++) {
    let skillslength = users[keys[i]].skills.length;
    for (let j = 0; j < skillslength; j++) {
      if (users[keys[i]].skills[j] === "MERN") {
        mernSkillsUsers.push(keys[i]);
      }
    }
  }

  return mernSkillsUsers;
}

console.log(MERNUsers());

//4
// console.log("Task 4");

// const newUser = Object.assign({}, users);

// newUser["Illiya"] = {
//   email: "velikifilin@gmail.com@",
//   skills: ["HTML", "CSS", "JavaScript", "C#", "SQL"],
//   age: 20,
//   isLoggedIn: false,
//   points: 0,
// };

// console.log(newUser);

//5
console.log(Object.keys(users));

//6
console.log(Object.values(users));

//7
const countries = {
  Ukraine: {
    capital: "Kyiv",
    population: 42000000,
    languages: ["Ukrainian"],
  },
  USA: {
    capital: "Washington",
    population: 330000000,
    languages: ["English"],
  },
  China: {
    capital: "Beijing",
    population: 1444000000,
    languages: ["Chinese"],
  },
  countryInfo: function (country) {
    return `Country: ${country} Capital: ${countries[country].capital} Population: ${countries[country].population} Languages: ${countries[country].languages}`;
  },
};

console.log(countries.countryInfo("USA"));

//LVL3
//1
console.log("LVL3");
console.log("Task1");

const personAccount = {
  firstName: "Illiya",
  lastName: "Filliov",
  incomes: [],
  expenses: [],

  totalIncome() {
    let total = 0;
    for (let income of personAccount.incomes) {
      total += income.amount;
    }
    return total;
  },

  totalExpense() {
    let total = 0;
    for (let expense of personAccount.expenses) {
      total += expense.amount;
    }
    return total;
  },

  accountInfo() {
    let info = `Account Holder: ${personAccount.firstName} ${personAccount.lastName}\n`;
    info += `Total Income: ${personAccount.totalIncome()}\n`;
    info += `Total Expense: ${personAccount.totalExpense()}\n`;
    info += `Account Balance: ${personAccount.accountBalance()}\n`;
    return info;
  },

  addIncome(description, amount) {
    personAccount.incomes.push({ description, amount });
  },

  addExpense(description, amount) {
    personAccount.expenses.push({ description, amount });
  },

  accountBalance() {
    return personAccount.totalIncome() - personAccount.totalExpense();
  },
};

//go
personAccount.addIncome("Salary", 2000);
personAccount.addIncome("Academic", 500);
personAccount.addExpense("Rent", 1000);
personAccount.addExpense("Food", 300);

console.log(personAccount.accountInfo());

//2.1
import { usersArr, products } from "./db.js"; //import

function signUp(newUser) {
  function isUserExists(user) {
    return user.email === newUser.email;
  }

  const existingUser = usersArr.find(isUserExists);

  if (existingUser) {
    console.log("User with this email already exists. Please sign in.");
  } else {
    usersArr.push(newUser);
    console.log("User signed up successfully.");
  }
}

const newUser = {
  _id: "abc123",
  username: "Illiya",
  email: "name@example.com",
  password: "password123",
  createdAt: "08/01/2020 10:30 AM",
  isLoggedIn: false,
};

signUp(newUser);
signUp(newUser);

console.log(Object.values(usersArr));

console.log();
//2.2
function signIn(name, password) {
  const keys = Object.keys(usersArr);
  let canSign = false;
  let signIndex = 0;
  for (let i = 0; i < keys.length; i++) {
    if (
      name === usersArr[keys[i]].username &&
      password === usersArr[keys[i]].password
    ) {
      canSign = true;
      signIndex = i;
      break;
    }
  }

  // console.log(usersArr[keys[2]]._id);

  if (canSign === true) {
    return usersArr[keys[signIndex]]._id;
  } else {
    return -1;
  }
}

console.log(signIn("Alex", "123123"));

//3.1
console.log("Task 3.1");

function rateProduct(id) {
  const keys = Object.keys(usersArr);
  let rate = -1;
  for (let i = 0; i < keys.length; i++) {
    if (usersArr[keys[i]]._id === id) {
      //real person?
      let rateProduct = Math.round(prompt("Enter product (first = 1):", ""));
      rate = Math.round(prompt("Enter rate:", ""));
      if (rate < 1 || rate > 5) {
        rate = -1;
      }
      if (rate !== -1) {
        const PKeys = Object.keys(products);
        products[PKeys[rateProduct - 1]].ratings.push({ id, rate });
      }
    }
  }
}

rateProduct(signIn("Alex", "123123"));
console.log(products);

//3.2
console.log("Task 3.2");

function avarageProduct(index) {
  const PKeys = Object.keys(products);
  let avarage = 0;
  let length = products[PKeys[index - 1]].ratings.length;
  for (let i = 0; i < length; i++) {
    avarage += products[PKeys[index - 1]].ratings[i].rate;
    console.log(avarage);
  }
  return avarage / length;
}

console.log(avarageProduct(1));

//4
console.log("Task 4");

function likeProduct(id) {
  const Ukeys = Object.keys(usersArr);
  const Pkeys = Object.keys(products);
  let liked = false;
  let saveI = -1;
  let likedProduct = Math.round(prompt("Enter product (first = 1):", ""));
  for (let i = 0; i < Ukeys.length; i++) {
    if (usersArr[Ukeys[i]]._id === id) {
      for (let i = 0; i < products[Pkeys[likedProduct - 1]].likes.length; i++) {
        if (id === products[Pkeys[likedProduct - 1]].likes[i]) {
          liked = true;
          saveI = i;
        }
      }
    }
  }

  if (liked === true) {
    products[Pkeys[likedProduct - 1]].likes.splice(saveI, 1);
  } else {
    products[Pkeys[likedProduct - 1]].likes.push(id);
  }
}

likeProduct(signIn("Alex", "123123"));
likeProduct(signIn("Alex", "123123"));
