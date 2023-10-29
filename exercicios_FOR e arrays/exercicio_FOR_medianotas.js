// Exercicio para praticar laço for e arrays, calcular notas adicionadas dinamicamente e em seguida calcular a media.


const notas = [];

notas.push(7);
notas.push(9);
notas.push(5);
notas.push(7);
notas.push(6);
notas.push(8);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length
console.log(media);

