let num = parseInt(prompt("Digite o mês que queira saber de 1 até 12"));

if(num === 1) {
    alert("Janeiro");
}else if(num === 2) {
    alert("Fevereiro");
}else if(num === 3) {
    alert("Março");
}else if(num === 4) {
    alert("Abril");
}else if(num === 5) {
    alert("Maio");
}else if(num === 6) {
    alert("Junho");
}else if(num === 7) {
    alert("Julho");
}else if(num === 8) {
    alert("Agosto");
}else if(num === 9) {
    alert("Setembro");
}else if(num === 10) {
    alert("Outubro");
}else if(num === 11) {
    alert("Novembro");
}else if(num === 12) {
    alert("Dezembro");
}else if(num < 1 || num > 12 ) {
    alert("Esse mês não existe");
}