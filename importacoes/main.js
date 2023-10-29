

// como nos temos que usar as funcoes auxiliares do outro arquivo, teremos que importá-las.

// da seguinte forma: 

const {gets, print} = require('./funcoes-auxiliares');  // essa basicamente é uma das formas mais simples de fazer import no node

// aplicando o destructuring no meu require para as funcoes gets e print:

print(gets());


// console.log(funcoes);

// pronto, importamos as funções gets e print do arquivo funcoes auxiliares.

// OBS: ficar esperto ao exportar e importar com relação aos caminhos, comandos, etc.

// console.log(funcoes.gets()); // para chamar a funcao gets e retornar no console o seu valor.


// quando a gente tem um objeto, podemos fazer o object Destructuring, ou seja, destruir um objeto

const pessoa = {
    nome: 'vitor'
};

const { nome } = pessoa; // o que seria igual a : const nome = pessoa.nome;




