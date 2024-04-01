const calculatorForm = document.getElementById('calculator-form');

calculatorForm.addEventListener('submit', function(event) {
  event.preventDefault();

let num1Input = document.getElementById('num1');
let num2Input = document.getElementById('num2');
let operationSelect = document.getElementById('operation');

let num1 = parseFloat(num1Input.value);
let num2 = parseFloat(num2Input.value);
let operation = operationSelect.value;


  if (isNaN(num1) || isNaN(num2)) {
    displayResult('Please enter valid numbers.', 'alert-danger');
    return;
  }

  let result;
  if (operation === '+') {
    result = num1 + num2;
  } else if (operation === '-') {
    result = num1 - num2;
  } else if (operation === '*') {
    result = num1 * num2;
  } else if (operation === '/') {
    if (num2 === 0) {
      displayResult('Division by zero is Undefined.', 'alert-danger');
      return;
    }
    result = num1 / num2;
  } else {
    displayResult('Invalid operation.', 'alert-danger');
    return;
  }

  // Display the result
  displayResult('Result: ' + result.toFixed(2), 'alert-success');
});

// Function to display the result
function displayResult(message, className) {
  let resultElement = document.getElementById('result');
  resultElement.textContent = message;
  resultElement.className = 'alert ' + className;
  resultElement.style.display = 'block';
}
