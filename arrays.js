
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

