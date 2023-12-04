let operators = ['+', '-', '*', '/'];

function addToDisplay(value) {
  const display = document.getElementById('display');
  const lastChar = display.value.slice(-1);

  // Check if the last character is an operator
  const isOperator = operators.includes(lastChar);

  // Allow operators to replace the last one entered
  if (isOperator && operators.includes(value)) {
    display.value = display.value.slice(0, -1) + value;
  } else {
    display.value += value;
  }
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch(error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}
