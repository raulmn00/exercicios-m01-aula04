const prompt = require("prompt-sync")();
console.clear();

const reajusteAte280 = 20 / 100;
const reajusteEntre280e700 = 15 / 100;
const reajusteEntre700e1500 = 10 / 100;
const reajusteAcima1500 = 10 / 100;

let salarioFuncionario = +prompt("Digite o salário atual do funcionário: ");
let novoSalario = 0;
let reajusteAplicado = 0;

if (salarioFuncionario == 280) {
  novoSalario = (salarioFuncionario * reajusteAte280) + salarioFuncionario;
  reajusteAplicado = reajusteAte280;
} else if (salarioFuncionario > 280 && salarioFuncionario < 700) {
  novoSalario = (salarioFuncionario * reajusteEntre280e700) + salarioFuncionario;
  reajusteAplicado = reajusteEntre280e700;
} else if (salarioFuncionario > 700 && salarioFuncionario < 1500) {
  novoSalario = (salarioFuncionario * reajusteEntre700e1500) + salarioFuncionario;
  reajusteAplicado = reajusteEntre700e1500;
} else if (salarioFuncionario > 1500) {
  novoSalario = (salarioFuncionario * reajusteAcima1500) + salarioFuncionario;
  reajusteAplicado = reajusteAcima1500;
}

console.log(
  `O seu salário antes do reajuste era de R$ ${salarioFuncionario.toFixed(2)}`
);
console.log(`Seu salário foi aumentado em ${reajusteAplicado * 100}%`);
console.log(
  `O valor de aumento que você recebeu foi de R$ ${(
    novoSalario - salarioFuncionario
  ).toFixed(2)} reais`
);
console.log(`E seu novo salário é de R$ ${novoSalario.toFixed(2)}`);
