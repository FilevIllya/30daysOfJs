const obj = {}; //create object

const rectangle = {
  length: 20,
  width: 20,
};
console.log(rectangle); // {length: 20, width: 20}

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
  getFullName: function () {
    return `${this.firstName}${this.lastName}`;
  },
  "phone number": "+3584545454545",
};
console.log(person);

/////

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.location); // undefined

// value can be accessed using square bracket and key name
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
console.log(person["age"]);
console.log(person["location"]); // undefined

// for instance to access the phone number we only use the square bracket method
console.log(person["phone number"]);

///////////////

person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1)[0];

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
console.log(person);
console.log(person.getPersonInfo());

//Object.assign: To copy an object without modifying the original object
const copyPerson = Object.assign({}, person);
console.log(copyPerson);

//Getting object keys using Object.keys()
//Object.keys: To get the keys or properties of an object as an array
const keys = Object.keys(copyPerson);
console.log(keys); //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
// const address = Object.keys(copyPerson.address);
// console.log(address); //['street', 'pobox', 'city']

//values
const values = Object.values(copyPerson);
console.log(values);

//keys and values
const entries = Object.entries(copyPerson);
console.log(entries);

// Checking properties using hasOwnProperty()
// hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty("name"));
console.log(copyPerson.hasOwnProperty("score"));
