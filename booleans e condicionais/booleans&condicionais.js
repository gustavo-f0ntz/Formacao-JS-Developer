

// let - Para variaveis que possam ser reatribuidas/modificadas
// const - Para variaveis que não podem ser modificadas/reatribuidas

const camisaAzul = true;
const camisaPreta = false;
const camisaBranca = true;

console.log( 10 <= 5);

const number = 300;
const enumeroPar = (number % 2) === 0 ; 

if (number === 0) {
    console.log("É invalido")
}
else if (enumeroPar) {
    console.log("É Par!");
}else {
    console.log("Não é Par! :(");
}



console.log(`O número ${number} é par? ${enumeroPar}`);


