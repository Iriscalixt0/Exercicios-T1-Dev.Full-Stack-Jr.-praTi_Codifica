/*8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */

const prompt = require('prompt-sync')();
let a = parseFloat(prompt('Digite o primeiro valor: '));
let b = parseFloat(prompt('Digite o segundo valor: '));

if (a > b) [a, b] = [b, a];

console.log(`Ordem crescente: ${a}, ${b}`);
