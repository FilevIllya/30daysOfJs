//LVL1
//1
const countries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
  "Eterium",
  "Ireland",
  "France",
  "Ukraine",
  "United States",
];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
//theory?

//2
console.log("Task 2");

const numbersCall = [1, 2, 3, 4, 5];

function printSquare(num) {
  console.log(num * num);
}

numbersCall.forEach(printSquare);

function double(num) {
  return num * 2;
}

const doubledNumbers = numbersCall.map(double);
console.log(doubledNumbers);

function isEven(num) {
  return num % 2 === 0;
}

const evenNumbers = numbersCall.filter(isEven);
console.log(evenNumbers);

function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}

const totalSum = numbers.reduce(sum, 0);
console.log(totalSum);

//3
console.log("Task 3");

countries.forEach(function (country) {
  console.log(country);
});

//4
console.log("Task 4");

names.forEach(function (name) {
  console.log(name);
});

//5
console.log("Task 5");

numbers.forEach(function (number) {
  console.log(number);
});

//6
console.log("Task 6");

const upperCountries = countries.map((country) => country.toUpperCase());
console.log(upperCountries);

//7
console.log("Task 7");

const lengthCountries = countries.map((country) => country.length);
console.log(lengthCountries);

//8
console.log("Task 8");

const squareNum = numbers.map((number) => number * number);
console.log(squareNum);

//9
console.log("Task 9");

const mapUpperCountries = names.map((name) => name.toUpperCase());
console.log(mapUpperCountries);

//10
console.log("Task 10");

const mapProducts = products.map(function (product) {
  return `${product.product} - ${product.price}`;
});

console.log(mapProducts);

//11
console.log("Task 11");

const countriesLand = countries.filter((country) => country.includes("land"));
console.log(countriesLand);

//12
console.log("Task 12");

const sixLeterCountries = countries.filter((country) => country.length === 6);
console.log(sixLeterCountries);

//13
console.log("Task 13");

const sixorMoreLeterCountries = countries.filter(
  (country) => country.length >= 6
);
console.log(sixorMoreLeterCountries);

//14
console.log("Task 14");

const eCountries = countries.filter((country) => country[0] === "E");
console.log(eCountries);

//15
console.log("Task 15");

const valuesPrice = products.filter(
  (product) => typeof product.price === "number"
);
console.log(valuesPrice);

//16
console.log("Task 16");

function getStringLists(array) {
  const stringArray = array.filter((value) => typeof value === "string");

  return stringArray;
}

console.log(getStringLists(["a", 25, "Illiya", "You here!", true]));

//17
console.log("Task 17");

const sumOfNums = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sumOfNums);

//18
console.log("Task 18");

const aboutCountries = countries.reduce((acc, country, i) => {
  if (i === countries.length - 1) {
    return `${acc} and ${country} are north European countries`;
  } else {
    return `${acc}, ${country}`;
  }
});
console.log(aboutCountries);

//19
//???

//20
console.log("Task 20");

const someLongNames = names.some((name) => name.length >= 7);
console.log(someLongNames);

//21
console.log("Task 21");

const allLand = countries.every((country) => country.includes("land"));
console.log(allLand);

//22
//???

//23
console.log("Task 23");

const sixCountry = countries.find((country) => country.length === 6);
console.log(sixCountry);

//24
console.log("Task 24");

const sixCountryInd = countries.findIndex((country) => country.length === 6);
console.log(sixCountryInd);

//25
console.log("Task 25");

const Norway = countries.findIndex((country) => country === "Norway");
console.log(Norway);

//26
console.log("Task 26");

const russia = countries.findIndex((country) => country === "Russia");
console.log(russia);

//LVL2
//1
console.log("LVL2");
console.log("Task 1");

const totalPrice = products
  .filter((product) => typeof product.price === "number")
  .map((product) => product.price)
  .reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);

console.log(totalPrice);

//2
console.log("Task 2");

const sumOfPrice = products.reduce((accumulator, product) => {
  if (typeof product.price === "number") {
    return accumulator + product.price;
  } else {
    return accumulator;
  }
}, 0);

console.log(sumOfPrice);

//3
console.log("Task 3");

function categorizeCountries(pattern) {
  const arrayOfCountries = countries.filter((country) =>
    country.toLowerCase().includes(pattern.toLowerCase())
  );

  return arrayOfCountries;
}

console.log(categorizeCountries("land"));
console.log(categorizeCountries("ia"));

//4
console.log("Task 4");

function numberOfLetters(countriesArray) {
  const letterCount = {};

  countries.forEach((country) => {
    const firstLetter = country.charAt(0).toUpperCase();
    letterCount[firstLetter] = (letterCount[firstLetter] || 0) + 1;
  });

  const result = Object.keys(letterCount).map((letter) => ({
    letter: letter,
    count: letterCount[letter],
  }));

  return result;
}

console.log(numberOfLetters(countries));

//5
console.log("Task 5");
import countriesList from "./countries.js";

function getFirstTenCountries1(array) {
  const firstCountries = [];
  let length = 0;
  if (array < 10) {
    length = array.length;
  } else {
    length = 10;
  }
  for (let i = 0; i < length; i++) {
    firstCountries.push(array[i]);
  }

  return firstCountries;
}
console.log(getFirstTenCountries1(countriesList));

function getFirstTenCountries2(array) {
  const firstTenCountries = array.filter((country, index) => index < 10);
  return firstTenCountries;
}
console.log(getFirstTenCountries2(countriesList));

//6
console.log("Task 6");

function getLastTenCountries(array) {
  const lastTenCountries = array.filter(
    (country, index) => index > array.length - 11
  );
  return lastTenCountries;
}

console.log(getLastTenCountries(countriesList));

//7
console.log("Task 7");
function checkCountryLetters(array, letter) {
  const letterCount = array
    .filter((country) => country[0] === letter.toUpperCase())
    .reduce((accumulator, country) => accumulator + 1, 0);

  return letterCount;
}

console.log(checkCountryLetters(countriesList, "u"));

//LVL3
//1
console.log("LVL3");
console.log("Task 1");

import countries_data from "./countries_data.js";

const sortByName = countries_data.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(sortByName);
//
const sortByCapital = countries_data.sort((a, b) => {
  if (a.capital < b.capital) return -1;
  if (a.capital > b.capital) return 1;
  return 0;
});

console.log(sortByCapital);
//
const sortByPopulation = countries_data.sort((a, b) => {
  if (a.population < b.population) return -1;
  if (a.population > b.population) return 1;
  return 0;
});

console.log(sortByCapital);

//2
console.log("Task 2");

function mostSpokenLanguages(countries, count) {
  const languageCount = {};

  countries.forEach((country) => {
    const languages = country.languages;
    languages.forEach((language) => {
      if (languageCount[language]) {
        languageCount[language]++;
      } else {
        languageCount[language] = 1;
      }
    });
  });

  const result = Object.entries(languageCount)
    .map(([language, count]) => ({ country: language, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, count);

  return result;
}

console.log(mostSpokenLanguages(countries_data, 3));

//3
console.log("Task 3");

function mostPopulatedCountries(countries, count) {
  const populationList = {};

  countries.forEach((country) => {
    const { name, population } = country;
    populationList[name] = population;
  });

  const result = Object.entries(populationList)
    .map(([name, population]) => ({ country: name, population }))
    .sort((a, b) => b.population - a.population)
    .slice(0, count);

  return result;
}

console.log(mostPopulatedCountries(countries_data, 10));

//4
console.log("Task 4");

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = {
  count: function (arr) {
    return arr.length;
  },

  sum: function (arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
  },

  min: function (arr) {
    const sortArr = arr.sort();
    return sortArr[0];
  },

  max: function (arr) {
    const sortArr = arr.sort();
    return sortArr[sortArr.length - 1];
  },

  range: function (arr) {
    const sortArr = arr.sort();
    return sortArr[sortArr.length - 1] - sortArr[0];
  },

  mean: function (arr) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  },

  median: function (arr) {
    const sortArr = arr.sort();
    return sortArr[Math.floor(sortArr.length / 2)];
  },

  mode: function (arr) {
    let modeList = {};

    arr.forEach((num) => {
      modeList[num] = (modeList[num] || 0) + 1;
    });

    let maxCount = 0;
    let mode;

    for (let num in modeList) {
      if (modeList[num] > maxCount) {
        maxCount = modeList[num];
        mode = parseInt(num);
      }
    }

    return `mode: ${mode}, count: ${maxCount} `;
  },

  variance: function (arr) {
    const mean = statistics.mean(arr);
    const squareDiffs = ages.reduce(
      (acc, curr) => acc + Math.pow(curr - mean, 2),
      0
    );

    return squareDiffs / ages.length;
  },

  std: function (arr) {
    const mean = statistics.mean(arr);

    const squareDiffs = ages.reduce(
      (acc, curr) => acc + Math.pow(curr - mean, 2),
      0
    );

    return Math.sqrt(squareDiffs / ages.length);
  },

  freqDist: function (arr) {
    let modeList = {};

    arr.forEach((num) => {
      modeList[num] = (modeList[num] || 0) + 1;
    });

    const freqDistArr = [];
    const modeArr = Object.entries(modeList);
    console.log(modeArr);

    console.log(modeArr[0][1] / ages.length, modeArr[0][1]);
    for (let i = 0; i < modeArr.length; i++) {
      freqDistArr.push([(modeArr[i][1] / ages.length) * 100, modeArr[i][1]]);
    }

    return freqDistArr;
  },
};

console.log(statistics.freqDist(ages));
