const numerosDeEntrada = [5, 3, 4, 1, 10, 8];
let i = 0;
function gets() {
    const numEntradas = numerosDeEntrada[i];
    i++;
    return numEntradas;
};

function print(texto) {
    console.log(texto);
};

module.exports = {gets , print};