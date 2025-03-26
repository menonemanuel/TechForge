const prompt = require("prompt-sync")();
//let Numero = prompt("Diga um número inteiro");
//Numero = Numero /2;
//console.log("O resultado do calculo é: " + Numero);

let primeiroValor = prompt("Informe o primeiro valor: ");
let segundoValor = prompt("Informe o segundo valor: ");
let calculo = primeiroValor / segundoValor;
console.log("A divisão de " + primeiroValor + "segundo valor " + segundoValor + "é: " + calculo);