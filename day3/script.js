let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  let expression = display.value;

  // remove leading zeros correctly
  expression = expression.replace(/\b0+(?!\b)/g, "");

  display.value = eval(expression);
}


