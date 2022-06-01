const prompt = require("prompt-sync")();
console.clear();

/*
 Caixa Eletrônico - Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
 */

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
