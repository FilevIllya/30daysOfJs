//LVL1
//Task 1
console.log("LVL 1 ");
console.log("Task 1");

localStorage.setItem("firstName", "Illiya");
localStorage.setItem("lastName", "Filov");
localStorage.setItem("age", 20);
localStorage.setItem("country", "Ukraine");
localStorage.setItem("city", "Krasnokutsk");

console.log(localStorage);

//LVL2
console.log("LVL 2");
console.log("Task 1");

const student = {
  firstName: "Illiya",
  lastName: "Filov",
  age: 20,
  skills: ["HTML", "CSS", "JavaScript"],
  country: "Ukraine",
  enrolled: true,
};

const studentJSON = JSON.stringify(student);

localStorage.setItem("student", studentJSON);

console.log(localStorage);

//LVL2
console.log("LVL 3");
console.log("Task 1");

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

let accInfo = newAcc.accountInfo();

localStorage.setItem("accountInfo", accInfo);

console.log(localStorage);
