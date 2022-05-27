const prompt = require("prompt-sync")();
console.clear();

const max = 10;
const min = 0;

let num = +prompt("Tente adivinhar o número escolhido pelo computador entre 0 e 10: ");
let random = Math.floor(Math.random() * (max - min) + min);

if(num == random) {
    console.log(`O número escolhido pelo computador foi: ${random} e você escolheu: ${num}, PARABÉNS!`);
} else {
    console.log(`O número escolhido pelo computador foi: ${random} e você escolheu: ${num}, MAIS SORTE NA PRÓXIMA VEZ!`);
}

