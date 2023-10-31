/* Faça um programa que receba N (Quantidade de numeros) e seus respectivos valores

E imprima o maior numero par e o menor numero impar.

Exemplo: 

    Entrada:
        5
        3
        4
        1
        10
        8

    Saída: 
        Maior número Par: 10
        Menor número Ímpar: 1
    
*/


// Exercicio para verificação do maior numero par dentro de um array. Utilizando laço for e import e export de funções.


const { gets, print } = require('./funcoes_auxiliaresEX02');

const numerosDeEntrada = [];
let maiorPar = null;
let menorImpar = null;


for (let i = 0; i < 6; i++) {
    const numero = gets();
    numerosDeEntrada.push(numero);
    if (numero % 2 === 0) {
        if (maiorPar === null || numero > maiorPar) {
            maiorPar = numero;
        }

    }else {
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero;
        }

    }
};

print(`Maior número Par: ${maiorPar}`);
print(`Menor número Ímpar: ${menorImpar}`);

