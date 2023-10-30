// crie um exercicio que contenha os dados de entrada:

//DADOS DE ENTRADA:

/*
5
50
10
98
23

E com base nesses numeros, seja printado o maior valor contido nos dados de entrada.

SAÍDA ESPERADA: 

98
*/

const { gets, print } = require('./exerc_maiornumero');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

print(numerosSorteados);

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;

    }
}

print(maiorValor);


// simplificando o exercicio:

// let maiorValorEncontrado = 0;

// for (let i = 0; i < 5; i++) {
//     const numeroSort = gets();
//     if (numeroSort > maiorValorEncontrado) {
//         maiorValorEncontrado = numeroSort;
//     }
    
// }

// print(maiorValorEncontrado);
