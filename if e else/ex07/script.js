let nota1 = parseFloat(prompt('Digite a primeira nota'));
let nota2 = parseFloat(prompt('Digite a segunda nota'));
let nota3 = parseFloat(prompt('Digite a terceira nota'));

let media = (nota1 + nota2 + nota3)/3;
let resultado = media.toFixed(1);

if(media >= 7) {
    alert(`Parabéns, a sua média foi ${resultado} e você PASSOU!`);
}else {
    alert(`Você precisa estudar mais, sua média foi ${resultado} e você foi REPROVADO!`);
}