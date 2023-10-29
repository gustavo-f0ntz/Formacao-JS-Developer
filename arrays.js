
// Agora vamos manipular arrays, adicionando e removendo elementos, utilizando metodos e etc.

const nomes = ['Julio', 'Gabriel', 'Marcos', 'Marina', 'Ana']

nomes.push('Junior'); // adiciona um novo elemento no fim do array


console.log(nomes.length); 
console.log(nomes);

nomes.shift(); //remove o primeiro elemento de um array
console.log(nomes);

nomes.unshift('Paulo'); // insere um novo elemento no inicio do array
console.log(nomes);

nomes.pop(); // remove o ultimo elemento do array
console.log(nomes);

const numeros = [1, 2, 3 ,4 ,5];

numeros.pop();
console.log(numeros);
delete numeros[3]; // utilizando desta forma posso deletar o elemento diretamente, mas no retorno vai constar que tem um elemento nulo na lista/array

delete numeros[2];
console.log(numeros);



const notas = [];

notas.push(5);
notas.push(6);
notas.push(7);
notas.push(2);
notas.push(8);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
console.log(notas.length);
console.log(soma / 5);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }


const nome = 'Gustavo Kelsey De Fontes Nunes';

for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
}

// Percorrendo todo o array nome com um loop for.



