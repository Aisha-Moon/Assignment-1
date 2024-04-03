const calculatorForm = document.getElementById('calculator-form');

calculatorForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let num1Input = document.getElementById('num1');
  let num2Input = document.getElementById('num2');
  let operationSelect = document.getElementById('operation');

  let num1 = num1Input.value.trim(); 
  let num2 = num2Input.value.trim(); 
  let operation = operationSelect.value;
 
  //check if num1 or num2 is empty
  if (num1 === '' || num2 === '') {
    displayResult('Number 1 and Number 2 are required.', 'alert-danger');
    return;
 }


  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // Check if num1 and num2 are valid numbers
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

  // Display the result section
  displayResult('Result: ' + result.toFixed(2), 'alert-success');
});

function displayResult(message, className) {
  let resultElement = document.getElementById('result');
  resultElement.textContent = message;
  resultElement.className = 'alert ' + className;
  resultElement.style.display = 'block';
}
