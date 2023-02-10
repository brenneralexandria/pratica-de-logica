let expression = '';
      
function calculate(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function displayResult() {
  document.getElementById("display").value = eval(expression);
  expression = '';
  
}

function clearExpression() {
    expression = '';
    document.getElementById("display").value = expression;
  }
  