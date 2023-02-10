const maxTentativas = 3;
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

console.log(`Você tem ${maxTentativas} tentativas para adivinhar o número de 1 a 10.`);

function fazerChute() {
  let chute = parseInt(prompt("Chute um número:"));

  if (chute === null) {
    console.log("Jogo cancelado.");
    return;
  }

  tentativas++;

  if (chute === numeroAleatorio) {
    console.log(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
    return;
  } else if (chute < numeroAleatorio) {
    console.log("Seu chute foi muito baixo.");
  } else if (chute > numeroAleatorio) {
    console.log("Seu chute foi muito alto.");
  }

  if (tentativas === maxTentativas) {
    console.log(`Foi mal, você atingiu o número máximo de tentativas. O número certo era ${numeroAleatorio}.`);
    return;
  }

  fazerChute();
};

fazerChute();