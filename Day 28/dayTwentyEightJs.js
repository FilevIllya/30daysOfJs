//LVL1
//Task 1
console.log("LVL 1");
console.log("Task 1");
const currentDate = new Date();

//players objects array
const players = [
  {
    FirstName: "David",
    LastName: "Smith",
    Country: "United Kingdom",
    PlayerScore: 80,
  },
  {
    FirstName: "Martha",
    LastName: "Yohanes",
    Country: "Finland",
    PlayerScore: 85,
  },
  {
    FirstName: "Mathias",
    LastName: "Elias",
    Country: "Sweden",
    PlayerScore: 70,
  },
];
//

document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.textAlign = "center";
document.body.style.flexDirection = "column";

const H1Element = document.createElement("h1");
H1Element.style.fontSize = "3rem";
H1Element.style.fontWeight = "bold";
H1Element.textContent = "30 Days Of Java Script Challenge LeaderBoard";

document.body.appendChild(H1Element);

const inputDiv = document.createElement("div");
inputDiv.style.display = "flex";
inputDiv.style.alignItems = "center";
inputDiv.style.justifyContent = "center";
inputDiv.style.textAlign = "center";
inputDiv.style.width = "80%";
inputDiv.style.flexDirection = "row";
document.body.appendChild(inputDiv);

const inputFirstName = document.createElement("input");
inputFirstName.id = "inpFN";
inputFirstName.type = "text";
inputFirstName.placeholder = "First Name";
inputFirstName.style.margin = "0.5rem";
inputFirstName.style.width = "16%";
inputFirstName.style.height = "1rem";
inputFirstName.style.padding = "0.75rem";
inputFirstName.style.fontSize = "1.5rem";
inputFirstName.style.border = "2px solid rgb(251, 158, 183)";

inputDiv.appendChild(inputFirstName);

const inputLastName = document.createElement("input");
inputLastName.id = "inpLN";
inputLastName.type = "text";
inputLastName.placeholder = "Last Name";
inputLastName.style.margin = "0.5rem";
inputLastName.style.width = "16%";
inputLastName.style.height = "1rem";
inputLastName.style.padding = "0.75rem";
inputLastName.style.fontSize = "1.5rem";
inputLastName.style.border = "2px solid rgb(251, 158, 183)";

inputDiv.appendChild(inputLastName);

const inputCountry = document.createElement("input");
inputCountry.id = "inpC";
inputCountry.type = "text";
inputCountry.placeholder = "country";
inputCountry.style.margin = "0.5rem";
inputCountry.style.width = "16%";
inputCountry.style.height = "1rem";
inputCountry.style.padding = "0.75rem";
inputCountry.style.fontSize = "1.5rem";
inputCountry.style.border = "2px solid rgb(251, 158, 183)";

inputDiv.appendChild(inputCountry);

const inputScore = document.createElement("input");
inputScore.id = "inpS";
inputScore.type = "number";
inputScore.placeholder = "Player Score";
inputScore.style.margin = "0.5rem";
inputScore.style.width = "16%";
inputScore.style.height = "1rem";
inputScore.style.padding = "0.75rem";
inputScore.style.fontSize = "1.5rem";
inputScore.style.border = "2px solid rgb(251, 158, 183)";

inputDiv.appendChild(inputScore);

const sendButton = document.createElement("button");

sendButton.style.backgroundColor = "rgb(251, 158, 183)";
sendButton.style.border = "0";
sendButton.style.margin = "0 2rem 0 0";
sendButton.textContent = "Add Player";
sendButton.style.fontSize = "1.5rem";
sendButton.style.border = "2px solid black";
sendButton.style.width = "16%";
sendButton.style.height = "2.7rem";
sendButton.style.color = "white";
sendButton.addEventListener("mouseover", appendBtnHoverOn);
sendButton.addEventListener("mouseout", appendBtnHoverOff);
sendButton.addEventListener("click", addPlayer);

inputDiv.appendChild(sendButton);

///////////

const alertText = document.createElement("p");

alertText.style.fontSize = "1.5rem";
alertText.textContent = "";
alertText.style.display = "inline-block";
alertText.style.margin = "0 2rem 0 0";
alertText.style.color = "red";
alertText.style.fontWeight = "Bold";

document.body.appendChild(alertText);

//Leaderboard Div

const leaderBoardDiv = document.createElement("div");
leaderBoardDiv.style.display = "flex";
leaderBoardDiv.style.alignItems = "center";
leaderBoardDiv.style.justifyContent = "center";
leaderBoardDiv.style.textAlign = "center";
leaderBoardDiv.style.width = "80%";
leaderBoardDiv.style.flexDirection = "column";
document.body.appendChild(leaderBoardDiv);

//test player div
players.sort((a, b) => b.PlayerScore - a.PlayerScore);

updateTable();

function updateTable() {
  while (leaderBoardDiv.firstChild) {
    leaderBoardDiv.removeChild(leaderBoardDiv.firstChild);
  }

  for (let i = 0; i < players.length; i++) {
    const playerDiv = document.createElement("div");

    playerDiv.style.display = "flex";
    playerDiv.style.alignItems = "center";
    playerDiv.style.justifyContent = "center";
    playerDiv.style.textAlign = "center";
    playerDiv.style.flexDirection = "row";
    playerDiv.style.backgroundColor = "wheat";
    playerDiv.style.width = "100%";
    playerDiv.style.padding = "1rem 0";
    playerDiv.style.margin = "0.5rem";
    leaderBoardDiv.appendChild(playerDiv);

    //1
    const nameNDateDiv = document.createElement("div");
    nameNDateDiv.style.display = "flex";
    nameNDateDiv.style.flexDirection = "column";
    nameNDateDiv.style.width = "25%";
    nameNDateDiv.style.alignItems = "center";
    nameNDateDiv.style.textAlign = "left";

    playerDiv.appendChild(nameNDateDiv);

    //name
    const fullName = document.createElement("p");

    fullName.textContent = players[i].FirstName + "  " + players[i].LastName;
    fullName.style.fontWeight = "bold";
    fullName.style.width = "100%";
    fullName.style.margin = "0";
    fullName.style.textTransform = "uppercase";
    fullName.style.fontSize = "1.25rem";
    nameNDateDiv.appendChild(fullName);

    //date
    const date = document.createElement("p");
    date.style.width = "100%";
    date.style.margin = "0";

    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", { month: "short" });
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const formattedDate = `${month.toUpperCase()} ${day}, ${year} ${hours}:${minutes
      .toString()
      .padStart(2, "0")}`;
    date.textContent = formattedDate;
    nameNDateDiv.appendChild(date);

    //2
    const country = document.createElement("div");
    country.textContent = players[i].Country;
    country.style.width = "25%";
    country.style.textTransform = "uppercase";
    country.style.fontSize = "1.25rem";
    country.style.fontWeight = "bold";
    playerDiv.appendChild(country);
    //3

    const score = document.createElement("div");
    score.textContent = players[i].PlayerScore;
    score.style.width = "25%";
    score.style.textTransform = "uppercase";
    score.style.fontSize = "1.5rem";
    score.style.fontWeight = "bold";
    playerDiv.appendChild(score);

    //4
    const btnDiv = document.createElement("div");
    btnDiv.style.display = "flex";
    btnDiv.style.alignItems = "center";

    //btn1
    const button1 = document.createElement("button");
    button1.style.borderRadius = "50%";
    button1.style.width = "50px";
    button1.style.height = "50px";
    button1.style.marginRight = "10px";
    button1.style.fontWeight = "bold";
    button1.textContent = "❌";

    button1.addEventListener("click", function () {
      removePlayerByIndex(i);
    });
    // btn2
    const button2 = document.createElement("button");
    button2.style.borderRadius = "50%";
    button2.style.width = "50px";
    button2.style.height = "50px";
    button2.style.marginRight = "10px";
    button2.style.fontWeight = "bold";
    button2.textContent = "-5";
    button2.addEventListener("click", function () {
      ratingMinus(i);
    });

    // btn3
    const button3 = document.createElement("button");
    button3.style.borderRadius = "50%";
    button3.style.width = "50px";
    button3.style.height = "50px";
    button3.style.fontWeight = "bold";
    button3.textContent = "+5";
    button3.addEventListener("click", function () {
      ratingPlus(i);
    });

    button1.addEventListener("mouseover", hoverOn);
    button1.addEventListener("mouseout", hoverOff);
    button2.addEventListener("mouseover", hoverOn);
    button2.addEventListener("mouseout", hoverOff);
    button3.addEventListener("mouseover", hoverOn);
    button3.addEventListener("mouseout", hoverOff);

    btnDiv.appendChild(button1);
    btnDiv.appendChild(button2);
    btnDiv.appendChild(button3);

    playerDiv.appendChild(btnDiv);
  }
}

//hovers
function hoverOn() {
  this.style.backgroundColor = "rgb(181, 244, 181)";
}

function hoverOff() {
  this.style.backgroundColor = "white";
}

function appendBtnHoverOn() {
  this.style.backgroundColor = "rgb(221, 128, 153)";
}

function appendBtnHoverOff() {
  this.style.backgroundColor = "rgb(251, 158, 183)";
}

function removePlayerByIndex(index) {
  players.splice(index, 1);
  updateTable();
}

function ratingPlus(index) {
  players[index].PlayerScore += 5;
  players.sort((a, b) => b.PlayerScore - a.PlayerScore);
  updateTable();
}

function ratingMinus(index) {
  players[index].PlayerScore -= 5;
  players.sort((a, b) => b.PlayerScore - a.PlayerScore);
  updateTable();
}

function addPlayer() {
  if (
    !(
      inputFirstName.value &&
      inputLastName.value &&
      inputCountry.value &&
      inputScore.value
    )
  ) {
    alertText.textContent = "All fields required";
  } else {
    alertText.textContent = "";
    const firstName = inputFirstName.value;
    const lastName = inputLastName.value;
    const country = inputCountry.value;
    const playerScore = parseInt(inputScore.value);

    const newPlayer = {
      FirstName: firstName,
      LastName: lastName,
      Country: country,
      PlayerScore: playerScore,
    };

    players.push(newPlayer);

    players.sort((a, b) => b.PlayerScore - a.PlayerScore);
    updateTable();
  }
}
