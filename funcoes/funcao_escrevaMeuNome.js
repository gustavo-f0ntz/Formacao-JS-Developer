
function escrevaMeuNome(nome) {
   return ("Meu nome é " + nome)
}

escrevaMeuNome("Gustavo");
escrevaMeuNome("João");
escrevaMeuNome('Maria Joaquina');



function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Gustavo') + " sou maior de idade");
    }else {
        console.log(escrevaMeuNome('Gustavo') + " sou menor de idade");
    }
            // invocando funcao dentro de uma outra funcao
} 

verificarIdade(12);
verificarIdade(20);

