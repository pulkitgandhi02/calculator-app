// Initialize display value
let currentDisplay = "";
const display = document.querySelector("#Display");

function updateDisplay(value) {
  currentDisplay += value;
  display.value = currentDisplay;
}

function clearDisplay() {
  currentDisplay = "";
  display.value = "";
}

// Function to remove the last character
function removeLast() {
  currentDisplay = currentDisplay.slice(0, -1); // Remove last character
  display.value = currentDisplay; // Update display
}


function calculate() {
  try {
    currentDisplay = eval(currentDisplay); // Safely evaluate the expression
    display.value = currentDisplay;
  } catch (error) {
    display.value = "Error"; // Display error if evaluation fails
  }
}
