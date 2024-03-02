//Testing
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]; // array of strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]; // array of web technologies
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);

//diferent

const arr = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types
console.log(arr);

//split

let js = "JavaScript";
const charsInJavaScript = js.split("");

console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

console.log(companies); // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = txt.split(" ");

console.log(words);
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

//Important
const webTechs2 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

console.log(webTechs2); // all the array items
console.log(webTechs2.length); // => to know the size of the array, which is 7
console.log(webTechs2[0]); //  -> HTML
console.log(webTechs2[6]); //  -> MongoDB

let lastIndex = webTechs2.length - 1;
console.log(webTechs2[lastIndex]); // -> MongoDB

//JOIN

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];

console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names.join("")); //AsabenehMathiasEliasBrook
console.log(names.join(" ")); //Asabeneh Mathias Elias Brook
console.log(names.join(", ")); //Asabeneh, Mathias, Elias, Brook
console.log(names.join(" # ")); //Asabeneh # Mathias # Elias # Brook

//slice
const numbersS = [1, 2, 3, 4, 5];

console.log(numbersS.slice()); // -> it copies all  item
console.log(numbersS.slice(0)); // -> it copies all  item
console.log(numbersS.slice(0, numbers.length)); // it copies all  item
console.log(numbersS.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

//Splice
const numbersSp = [1, 2, 3, 4, 5, 6];
numbersSp.splice(3, 3, 7, 8, 9); //position, count, elements
console.log(numbersSp.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

//// end
const arrP = ["item1", "item2", "item3"];
arrP.push("new item");
console.log(arrP);
// ['item1', 'item2','item3','new item']
arrP.pop(); // -> remove one item from the end

//begin
const numbersSh = [1, 2, 3, 4, 5];
numbersSh.shift(); // -> remove one item from the beginning
console.log(numbersSh); // -> [2,3,4,5]

//reverse
numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // -> reverse array order
console.log(numbers); // [5, 4, 3, 2, 1]

numbers.reverse();
console.log(numbers); // [1, 2, 3, 4, 5]

//Sort
webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node", "MongoDB"];

webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse(); // after sorting we can reverse it
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
