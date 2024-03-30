const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

//LVL1
//Task 1

const fetchData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    console.log("LVL 1 ");
    console.log("Task 1");
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};
fetchData();

//LVL2
//Task 1
const catNames = [];

const fetchCatData = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    console.log("LVL 2 ");
    console.log("Task 1");
    for (let i = 0; i < cats.length; i++) {
      catNames.push(cats[i].name);
    }
  } catch (err) {
    console.error(err);
  }
};
fetchCatData();

console.log(catNames);

//LVL3
//Task 1

const catsWeights = [];
const fetchCatWData = async () => {
  try {
    const response = await fetch(catsAPI);
    const cats = await response.json();
    console.log("LVL 3 ");
    console.log("Task 1");
    for (let i = 0; i < cats.length; i++) {
      catsWeights.push(cats[i].weight.metric);
    }

    const doubleWeight = [];
    for (let i = 0; i < catsWeights.length; i++) {
      doubleWeight[i] = catsWeights[i].split("-");
    }

    const catWeights = [];
    for (let i = 0; i < doubleWeight.length; i++) {
      const firstNum = parseInt(doubleWeight[i][0].trim());
      const secondNum = parseInt(doubleWeight[i][1].trim());
      catWeights[i] = secondNum - firstNum;
    }

    let sumOfWeight = 0;
    for (let i = 0; i < catWeights.length; i++) {
      sumOfWeight += catWeights[i];
    }

    console.log("Avg: " + sumOfWeight / catWeights.length);
  } catch (err) {
    console.error(err);
  }
};
fetchCatWData();

//LVL3
//Task 2

const fetchLargeCountriesData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    console.log("LVL 3 ");
    console.log("Task 2");

    const countriesLarge = [];
    for (let i = 0; i < countries.length; i++) {
      countriesLarge.push([countries[i].area, countries[i].name]);
    }

    countriesLarge.sort((a, b) => b[0] - a[0]);

    for (let i = 0; i < 10; i++) {
      console.log(countriesLarge[i]);
    }
    console.log(countriesLarge);
  } catch (err) {
    console.error(err);
  }
};
fetchLargeCountriesData();

//LVL3
//Task 3
const fetchLanguageData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    console.log("LVL 3 ");
    console.log("Task 3");
    console.log(countries);

    const uniqueLanguages = {};

    countries.forEach((country) => {
      country.languages.forEach((language) => {
        uniqueLanguages[language.name] = true;
      });
    });

    const totalUniqueLanguages = Object.keys(uniqueLanguages).length;
    console.log(totalUniqueLanguages);
  } catch (err) {
    console.error(err);
  }
};
fetchLanguageData();
