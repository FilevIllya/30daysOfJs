//LVL1
//Task 1
console.log("LVL 1");
console.log("Task 1");

const text = "30 DAYS OF JAVASCRIPT  FILOV ILLIYA";
const container = document.createElement("div");
container.style.fontSize = "12rem";
container.style.fontWeight = "bold";
document.body.appendChild(container);

let opacity = 0;
let i = 0;
let colors = Array.from({ length: text.length }, () => getRandomColor()); // Зберігаємо кольори один раз

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateText(canColor) {
  container.innerHTML = "";
  for (let j = 0; j < text.length; j++) {
    const span = document.createElement("span");
    span.textContent = text[j];
    if (canColor !== 10) {
      // Використовуємо збережені кольори лише, якщо i не 10
      span.style.color = colors[j];
      span.style.opacity = opacity;
    } else {
      colors[j] = getRandomColor(); // Змінюємо кольори
      span.style.color = colors[j];
      span.style.opacity = 0;
      document.body.style.backgroundColor = getRandomColor();
    }
    container.appendChild(span);
  }
}

function animateText() {
  console.log(i);
  updateText(i); // Передаємо значення true, якщо i=10, для зміни кольорів
  if (i === 10) {
    opacity = 0;
    i = 0;
  } else {
    opacity += 0.1;
  }

  if (opacity >= 1) {
    opacity = 1;
  }

  i++;
  if (opacity < 1) {
    setTimeout(animateText, 500);
  }
}

animateText();
