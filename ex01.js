const prompt = require("prompt-sync")();
console.clear();

/**  
Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 
Salários até R$ 280,00 (incluindo): aumento de 20%. 
Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
Salários de R$ 1500,00 em diante: aumento de 5%.
Após o aumento ser realizado, informe na tela:
O salário antes do reajuste.
O percentual de aumento aplicado.
O valor do aumento.
O novo salário, após o aumento.
 */

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
