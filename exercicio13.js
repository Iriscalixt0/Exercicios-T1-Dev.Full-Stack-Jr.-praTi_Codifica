/*13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

const prompt = require('prompt-sync')();
let soma = 0;
let contador = 0;
let num;

do {
  num = parseFloat(prompt('Digite um número (0 para sair): '));
  if (num !== 0) {
    soma += num;
    contador++;
  }
} while (num !== 0);

if (contador > 0) {
  console.log(`Média: ${soma / contador}`);
} else {
  console.log('Nenhum número válido foi inserido.');
}
