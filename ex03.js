const prompt = require("prompt-sync")();
console.clear();

let valorSaque = +prompt("Digite um valor para saque: ");
let qtdNotas1 = 0;
let qtdNotas5 = 0;
let qtdNotas10 = 0;
let qtdNotas50 = 0;
let qtdNotas100 = 0;

while (valorSaque != 0) {
  if (valorSaque >= 100) {
    qtdNotas100++;
    valorSaque -= 100;
  } else if (valorSaque >= 50) {
    qtdNotas50++;
    valorSaque -= 50;
  } else if (valorSaque >= 10) {
    qtdNotas10++;
    valorSaque -= 10;
  } else if (valorSaque >= 5) {
    qtdNotas5++;
    valorSaque -= 5;
  } else if (valorSaque >= 1) {
    qtdNotas1++;
    valorSaque -= 1;
  }
}

console.log(
  `  Seu saque foi realizado! 
  Você recebeu ${qtdNotas1} notas de 1 Real, 
  ${qtdNotas5} notas de 5 Reais, 
  ${qtdNotas10} notas de 10 Reais, 
  ${qtdNotas50} notas de 50 Reais e 
  ${qtdNotas100} notas de 100 Reais!`
);
