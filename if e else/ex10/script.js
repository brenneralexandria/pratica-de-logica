let num1 = parseInt(prompt('Digite um número'));
let num2 = parseInt(prompt('Digite outro número'));

if (num1 % num2 === 0) {
    alert(num1 + " é múltiplo de " + num2);
  } else {
    alert(num1 + " não é múltiplo de " + num2);
  }