//LVL1
//Task 1
console.log("LVL 1");
console.log("Task 1");

//
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.flexDirection = "column";
document.body.style.backgroundColor = "rgb(230, 230, 230)";

//h1
const h1Elem = document.createElement("h1");
h1Elem.textContent = "Validating Web Forms";
h1Elem.style.fontSize = "3rem";
h1Elem.style.margin = "2rem 0 0 0";

document.body.appendChild(h1Elem);

const containerDiv = document.createElement("div");

containerDiv.style.width = "80%";

document.body.appendChild(containerDiv);

//1

const firstName = document.createElement("p");
firstName.textContent = "First Name";
firstName.style.fontSize = "2rem";
firstName.style.fontWeight = "bold";
firstName.style.margin = "1rem";

const inputFirstName = document.createElement("input");
inputFirstName.type = "text";
inputFirstName.placeholder = "Enter your first name";
inputFirstName.style.width = "100%";
inputFirstName.style.padding = "8px";
inputFirstName.style.borderRadius = "5px";
inputFirstName.style.height = "2rem";
inputFirstName.style.fontSize = "1.5rem";
inputFirstName.style.border = "1px solid #ccc";

const alert1 = document.createElement("p");
alert1.textContent = ""; //First name must be alphanumeric and contain 3-16 characters
alert1.style.color = "orange";
alert1.style.fontSize = "1.5rem";

containerDiv.appendChild(firstName);
containerDiv.appendChild(inputFirstName);
containerDiv.appendChild(alert1);

//2
const lastName = document.createElement("p");
lastName.textContent = "Last Name";
lastName.style.fontSize = "2rem";
lastName.style.fontWeight = "bold";
lastName.style.margin = "1rem";

const inputlastName = document.createElement("input");
inputlastName.type = "text";
inputlastName.placeholder = "Enter your last name";
inputlastName.style.width = "100%";
inputlastName.style.padding = "8px";
inputlastName.style.borderRadius = "5px";
inputlastName.style.height = "2rem";
inputlastName.style.fontSize = "1.5rem";
inputlastName.style.border = "1px solid #ccc";

const alert2 = document.createElement("p");
alert2.textContent = ""; //Last name must be alphanumeric and contain 3-16 characters
alert2.style.color = "orange";
alert2.style.fontSize = "1.5rem";

containerDiv.appendChild(lastName);
containerDiv.appendChild(inputlastName);
containerDiv.appendChild(alert2);

//3
const email = document.createElement("p");
email.textContent = "Email";
email.style.fontSize = "2rem";
email.style.fontWeight = "bold";
email.style.margin = "1rem";

const inputEmail = document.createElement("input");
inputEmail.type = "text";
inputEmail.placeholder = "Enter your email";
inputEmail.style.width = "100%";
inputEmail.style.padding = "8px";
inputEmail.style.borderRadius = "5px";
inputEmail.style.height = "2rem";
inputEmail.style.fontSize = "1.5rem";
inputEmail.style.border = "1px solid #ccc";

const alert3 = document.createElement("p");
alert3.textContent = ""; //Email must be a valid address, e.g. example@example.com
alert3.style.color = "orange";
alert3.style.fontSize = "1.5rem";

containerDiv.appendChild(email);
containerDiv.appendChild(inputEmail);
containerDiv.appendChild(alert3);

//4
const password = document.createElement("p");
password.textContent = "Password";
password.style.fontSize = "2rem";
password.style.fontWeight = "bold";
password.style.margin = "1rem";

const inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.placeholder = "Enter your password";
inputPassword.style.width = "100%";
inputPassword.style.padding = "8px";
inputPassword.style.borderRadius = "5px";
inputPassword.style.height = "2rem";
inputPassword.style.fontSize = "1.5rem";
inputPassword.style.border = "1px solid #ccc";

const alert4 = document.createElement("p");
alert4.textContent = ""; //Password must be alphanumeric (@, _ and - also allowed) and between 6-20 characters
alert4.style.color = "orange";
alert4.style.fontSize = "1.5rem";

containerDiv.appendChild(password);
containerDiv.appendChild(inputPassword);
containerDiv.appendChild(alert4);

//5
const phone = document.createElement("p");
phone.textContent = "Telephone";
phone.style.fontSize = "2rem";
phone.style.fontWeight = "bold";
phone.style.margin = "1rem";

const inputPhone = document.createElement("input");
inputPhone.type = "text";
inputPhone.placeholder = "Enter your phone";
inputPhone.style.width = "100%";
inputPhone.style.padding = "8px";
inputPhone.style.borderRadius = "5px";
inputPhone.style.height = "2rem";
inputPhone.style.fontSize = "1.5rem";
inputPhone.style.border = "1px solid #ccc";

const alert5 = document.createElement("p");
alert5.textContent = ""; //
alert5.style.color = "orange";
alert5.style.fontSize = "1.5rem";

containerDiv.appendChild(phone);
containerDiv.appendChild(inputPhone);
containerDiv.appendChild(alert5);

//6
const bio = document.createElement("p");
bio.textContent = "Your bio";
bio.style.fontSize = "2rem";
bio.style.fontWeight = "bold";
bio.style.margin = "1rem";

const inputBio = document.createElement("input");
inputBio.type = "text";
inputBio.placeholder = "Enter your bio";
inputBio.style.width = "100%";
inputBio.style.padding = "8px";
inputBio.style.borderRadius = "5px";
inputBio.style.height = "2rem";
inputBio.style.fontSize = "1.5rem";
inputBio.style.border = "1px solid #ccc";

const alert6 = document.createElement("p");
alert6.textContent = ""; //Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters
alert6.style.color = "orange";
alert6.style.fontSize = "1.5rem";

containerDiv.appendChild(bio);
containerDiv.appendChild(inputBio);
containerDiv.appendChild(alert6);

//btn
const submitBtn = document.createElement("button");

submitBtn.style.backgroundColor = "orange";
submitBtn.style.border = "0";
submitBtn.style.margin = "0 2rem 0 0";
submitBtn.textContent = "Submit";
submitBtn.style.textTransform = "uppercase";
submitBtn.style.fontSize = "1.5rem";
submitBtn.style.padding = "1rem";
submitBtn.style.width = "9rem";

containerDiv.appendChild(submitBtn);

function validateForm() {
  const input1 = inputFirstName.value;
  const input2 = inputlastName.value;
  const input3 = inputEmail.value;
  const input4 = inputPassword.value;
  const input5 = inputPhone.value;
  const input6 = inputBio.value;

  const inputFLNameRegex = /^.{3,16}$/;
  const inputEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const inputPasswordRegex = /^[a-zA-Z0-9_@-]{6,20}$/;
  const inputPhoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  const inputBioRegex = /^[a-z_-]{8,50}$/;

  if (inputFLNameRegex.test(input1)) {
    inputFirstName.style.borderColor = "Green";
    inputFirstName.style.borderWidth = "3px";
    alert1.textContent = "";
  } else {
    inputFirstName.style.borderColor = "Red";
    alert1.textContent =
      "First name must be alphanumeric and contain 3-16 characters";
  }

  if (inputFLNameRegex.test(input2)) {
    inputlastName.style.borderColor = "Green";
    inputlastName.style.borderWidth = "3px";
    alert2.textContent = "";
  } else {
    inputlastName.style.borderColor = "Red";
    alert2.textContent =
      "Last name must be alphanumeric and contain 3-16 characters";
  }

  if (inputEmailRegex.test(input3)) {
    inputEmail.style.borderColor = "Green";
    inputEmail.style.borderWidth = "3px";
    alert3.textContent = "";
  } else {
    inputEmail.style.borderColor = "Red";
    alert3.textContent =
      "Email must be a valid address, e.g. example@example.com";
  }

  if (inputPasswordRegex.test(input4)) {
    inputPassword.style.borderColor = "Green";
    inputPassword.style.borderWidth = "3px";
    alert4.textContent = "";
  } else {
    inputPassword.style.borderColor = "Red";
    alert4.textContent =
      "Password must be alphanumeric (@, _ and - also allowed) and between 6-20 characters";
  }

  if (inputPasswordRegex.test(input5)) {
    inputPhone.style.borderColor = "Green";
    inputPhone.style.borderWidth = "3px";
    alert5.textContent = "";
  } else {
    inputPhone.style.borderColor = "Red";
    alert5.textContent =
      "A valid Telephone number (11 digits and 333-333-3333)";
  }

  if (inputBioRegex.test(input6)) {
    inputBio.style.borderColor = "Green";
    inputBio.style.borderWidth = "3px";
    alert6.textContent = "";
  } else {
    inputBio.style.borderColor = "Red";
    alert6.textContent =
      "Bio must contain only lowercase letters, underscores, hyphens and be 8-50 characters";
  }
}

submitBtn.addEventListener("click", validateForm);
