//LVL1
//Task 1
console.log("Task 1");

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  getInfo() {
    let info = `This is an animal. It's ${this.name} and it is ${this.age} years old. It have ${this.color} and ${this.legs} legs`;
    return info;
  }

  speak() {
    return `Breathing`;
  }

  get getName() {
    return this.name;
  }

  get getAge() {
    return this.age;
  }

  get getColor() {
    return this.color;
  }

  get getLegs() {
    return this.legs;
  }

  set setName(name) {
    this.name = name;
  }

  set setAge(age) {
    this.age = age;
  }

  set setColor(color) {
    this.color = color;
  }

  set setLegs(legs) {
    this.legs = legs;
  }
}

//2 and LVL2
console.log("Task 2");

class Dog extends Animal {
  constructor(firstName, lastName, age, country, city) {
    super(firstName, lastName, age, country, city);
  }

  speak() {
    return `bark bark`;
  }
}

class Cat extends Animal {
  constructor(firstName, lastName, age, country, city) {
    super(firstName, lastName, age, country, city);
  }

  speak() {
    return `Meaw`;
  }
}

//LVL 3
console.log("LVL 3");
console.log("Task 1");

class Statistics {
  constructor(ages) {
    this.ages = ages;
  }

  count() {
    return this.ages.length;
  }

  sum() {
    return ages.reduce((acc, cur) => acc + cur, 0);
  }

  min() {
    const sortArr = ages.sort();
    return sortArr[0];
  }

  max() {
    const sortArr = ages.sort();
    return sortArr[sortArr.length - 1];
  }

  range() {
    const sortArr = ages.sort();
    return sortArr[sortArr.length - 1] - sortArr[0];
  }

  mean() {
    return ages.reduce((acc, cur) => acc + cur, 0) / ages.length;
  }

  median() {
    const sortArr = ages.sort();
    return sortArr[Math.floor(sortArr.length / 2)];
  }

  mode() {
    let modeList = {};

    ages.forEach((num) => {
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
  }

  variance() {
    const mean = this.mean();
    const squareDiffs = ages.reduce(
      (acc, curr) => acc + Math.pow(curr - mean, 2),
      0
    );

    return squareDiffs / ages.length;
  }

  std() {
    const mean = this.mean();

    const squareDiffs = ages.reduce(
      (acc, curr) => acc + Math.pow(curr - mean, 2),
      0
    );

    return Math.sqrt(squareDiffs / ages.length);
  }

  freqDist() {
    let modeList = {};

    ages.forEach((num) => {
      modeList[num] = (modeList[num] || 0) + 1;
    });

    const freqDistArr = [];
    const modeArr = Object.entries(modeList);
    console.log(modeArr);

    console.log(modeArr[0][1] / ages.length, modeArr[0][1]);
    for (let i = 0; i < modeArr.length; i++) {
      freqDistArr.push([(modeArr[i][1] / ages.length) * 100, modeArr[i][0]]);
    }

    return freqDistArr;
  }
}

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = new Statistics(ages);

console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.variance()); // 17.5
console.log("Standard Deviation: ", statistics.std()); // 4.2
console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

//2
console.log("Task 2");

class PersonAccount {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.incomes = [];
    this.expenses = [];
  }

  totalIncome() {
    let total = 0;
    for (let income of this.incomes) {
      total += income.amount;
    }
    return total;
  }

  totalExpense() {
    let total = 0;
    for (let expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  }

  accountInfo() {
    let info = `Account Holder: ${this.firstname} ${this.lastname}\n`;
    info += `Total Income: ${this.totalIncome()}\n`;
    info += `Total Expense: ${this.totalExpense()}\n`;
    info += `Account Balance: ${this.accountBalance()}\n`;
    return info;
  }

  addIncome(description, amount) {
    this.incomes.push({ description, amount });
  }

  addExpense(description, amount) {
    this.expenses.push({ description, amount });
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }
}

const newAcc = new PersonAccount("Illiya", "Filiov");

newAcc.addIncome("Salary", 2000);
newAcc.addIncome("Academic", 500);
newAcc.addExpense("Rent", 1000);
newAcc.addExpense("Food", 300);

console.log(newAcc.accountInfo());
