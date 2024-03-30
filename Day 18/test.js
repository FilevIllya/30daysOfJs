//callbacks
//Callback
const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("It did not go well", skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callback);

//false
const doSomething2 = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback(false, skills);
  }, 2000);
};

doSomething2((err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
});

// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 3000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// False Promise
const doFalsePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.includes("Node")) {
      resolve("fullstack developer");
    } else {
      reject("Something wrong has happened");
    }
  }, 4000);
});

doFalsePromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));

//Fetch API

const url = "https://restcountries.com/v2/all"; // countries api
fetch(url)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // getting the data
    console.log(data);
  })
  .catch((error) => console.error(error)); // handling error if something wrong happens

//Async and Await

const square = async function (n) {
  return n * n;
};

square(2);

//get value from async === await

const square2 = async function (n) {
  return n * n;
};
const value = await square2(2);
console.log(value);

//promise
const url2 = "https://restcountries.com/v2/all";
fetch(url2)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));

//async await
const fetchData = async () => {
  try {
    const response = await fetch(url2);
    const countries = await response.json();
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
console.log("===== async and await");
fetchData();
