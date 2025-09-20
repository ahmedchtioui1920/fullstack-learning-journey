// Grab references to DOM elements we need
const hexCodeDisplay = document.getElementById("hex-code");
const changeButton = document.querySelector("#change-btn");
const body = document.querySelector("body");

// Array of dark-themed color hex codes
const darkColors = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#800020",
];

/**
 * Get a random index from the darkColors array.
 * Math.random() -> number between 0 and 1
 * Multiply by array length -> range (0 to length)
 * Math.floor() -> ensures whole number within array range
 */
function getRandomIndex() {
  return Math.floor(Math.random() * darkColors.length);
}

/**
 * Change the background color of the page to a random
 * value from the darkColors array and update hex code display.
 */
function changeBackgroundColor() {
  const color = darkColors[getRandomIndex()];
  hexCodeDisplay.innerText = color;
  body.style.backgroundColor = color;
}

// Add event listener for button click
changeButton.addEventListener("click", changeBackgroundColor);
