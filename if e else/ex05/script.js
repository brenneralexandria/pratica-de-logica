let num = parseInt(prompt('Digite o número'));

if(num % 5 === 0 && num % 3 === 0) {
    alert(`O número ${num} é divisivel por 5 e por 3`);
} if (num % 5 === 0) {
    alert(`O número ${num} é divisivel por 5`)
}else {
    alert(`O número ${num} é divisivel por 3`);
}