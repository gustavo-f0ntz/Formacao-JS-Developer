const notasEntradas = [7,10,5,0];
let i = 0;

function gets() {
    const notasRecebidas = notasEntradas[i];
    i++;
    return notasRecebidas;
};

function print(texto) {
    console.log(texto);
};

module.exports = {gets , print};