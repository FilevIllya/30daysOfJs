//LVL1
//Task 1

console.log("LVL 1");
console.log("Task 1");

function LikeConsole() {
  let hello = "Hello world!";
  function WriteLine() {
    console.log(hello);
  }

  return WriteLine;
}

const WriteLine = LikeConsole();

console.log(WriteLine());

//LVL 2
//Task 1

console.log("LVL 2");
console.log("Task 1");

function setNumber() {
  let number = 0;
  function setOne() {
    number = 1;
    return number;
  }
  function setMinusOne() {
    number = -1;
    return number;
  }
  function setZero() {
    number = 0;
    return number;
  }

  return {
    setOne: setOne(),
    setMinusOne: setMinusOne(),
    setZero: setZero(),
  };
}
const innerFuncs = setNumber();

console.log(innerFuncs.setMinusOne);

//LVL 3
//Task 1

console.log("LVL 3");
console.log("Task 1");

function personAccount(firstName, lastName) {
  let incomes = [];
  let expenses = [];

  function addIncome(description, amount) {
    incomes.push({ description, amount });
  }

  function addExpense(description, amount) {
    expenses.push({ description, amount });
  }

  function totalIncome() {
    return incomes.reduce((total, income) => total + income.amount, 0);
  }

  function totalExpense() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  function accountInfo() {
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Total Income: ${totalIncome()}`);
    console.log(`Total Expense: ${totalExpense()}`);
    console.log(`Account Balance: ${totalIncome() - totalExpense()}`);
  }

  function accountBalance() {
    return totalIncome() - totalExpense();
  }

  return {
    addIncome,
    addExpense,
    accountInfo,
    accountBalance,
  };
}

const myAccount = personAccount("Illiya", "Filiov");
myAccount.addIncome("Salary", 3000);
myAccount.addExpense("Rent", 1000);
myAccount.addExpense("Groceries", 200);
myAccount.accountInfo();
console.log("Account Balance:", myAccount.accountBalance());
