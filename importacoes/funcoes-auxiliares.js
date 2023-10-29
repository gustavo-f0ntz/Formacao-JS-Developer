
function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

// eu tenho que exportar o que está aqui nesse arquivo

// e para isso, posso fazer da seguinte forma:

module.exports = {gets, print};

// essa basicamente é a forma mais simples de fazer export no node