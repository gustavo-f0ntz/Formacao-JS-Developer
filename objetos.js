
const Gustavo = {
    nome: "Gustavo Kesley",         // no objeto tem relação chave e valor
    idade: 18,
    // podemos utilizar tambem funcoes dentro do nosso objeto, quando utilizamos funcoes dentro de um objeto, chamamos de método.

    // exemplo:

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

    // da pra acessar esses valores de uma forma mais dinamica

    // exemplo: 

Gustavo['nome'] = 'Teste'
console.log(Gustavo.nome);
Gustavo['nome'] = 'Gustavo'
console.log(Gustavo['nome']);




Gustavo.nome;
Gustavo.idade;
Gustavo.descrever();



console.log(Gustavo.nome);
console.log(Gustavo.idade);
console.log(Gustavo);

// uma vez que criamos um objeto literal, podemos incrementá-lo dinamicamente

// considerar um objeto como uma coleção dinamica de chave-valor ( posso adicionar e posso remover)

Gustavo.altura = 1.73;

console.log(Gustavo);

// exemplo deletando uma chave
delete Gustavo.altura;
console.log(Gustavo);


// agora vamos utilizar classes e instancias

class Pessoa {
    nome;
    idade; 


    descrever() { // quando eu for declarar um metodo eu não preciso declarar/ usar a palavra function
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);

    }     

} // tem como objetivo definir como é a pessoa por exemplo, para que ela seja instanciada.


// agora um exemplo de como instanciar um objeto (pessoa):

const Maria = new Pessoa();
Maria.nome = 'Maria Do Carmo';
Maria.idade = 54;
console.log(Maria);

const Joao = new Pessoa();
Joao.nome = 'Joao Batista';
Joao.idade = 43;
console.log(Joao);
Joao.descrever();


// classe é a definição , e instância é a ocorrência
// a classe é como um objeto deve ser, já a instância é a ocorrencia daquele objeto


