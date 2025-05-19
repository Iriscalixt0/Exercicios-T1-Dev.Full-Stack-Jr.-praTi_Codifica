/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

const prompt = require('prompt-sync')();
console.log('1 - Dizer Olá');
console.log('2 - Mostrar Data');
console.log('3 - Sair');

const opcao = prompt('Escolha uma opção: ');

switch (opcao) {
  case '1':
    console.log('Olá!');
    break;
  case '2':
    console.log('Data atual:', new Date().toLocaleDateString());
    break;
  case '3':
    console.log('Saindo...');
    break;
  default:
    console.log('Opção inválida.');
}
