

// criando e trabalhando com funcoes

function teste() {
    console.log("Isso é um teste rapido de uma funcao.")
}

function sayMyName(name) {
    console.log(`Olá ${name}!`)
}

function quadrado(valor) {
    return valor * valor
    
}

const quadradoDeDez = quadrado(10);
console.log((quadradoDeDez) + (quadradoDeDez));

sayMyName('Gustavo');
sayMyName('Maria');
teste();
teste();


function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;

}

console.log(incrementarJuros(180, 20));

