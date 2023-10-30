
/* Aqui o exercicio resolvido utilizando um laço for para completar um array com 4 notas 
vindas das funções auxilares do arquivo funcoes_auxiliares_ex01, e depois que preencher o array com base no resultado vindo do laço for eu atribui uma variavel recebendo cada nota pelo indice no array para depois somá-las para que logo em seguida possa realizar a media das notas e estabelecer uma condição com base no resultado dessa media. Onde se a media do aluno for menor que 5 ele estará (Reprovado). Se a media for entre 5 e 7 ele estará em (Recuperação) e caso seja maior que 7 ele estará (Aprovado).

*/

const {gets, print} = require('./funcoes_auxiliares_ex01');

const notasEntradas = [];
let notaSoma = 0;


for (let i = 0; i < 4; i++) {
    const notaAdicionada = gets();
    notasEntradas.push(notaAdicionada);

};

print(notasEntradas);

notaSoma = notasEntradas[0] + notasEntradas[1] +notasEntradas[2] +notasEntradas[3];
mediaNotas = notaSoma / 4;
print(mediaNotas);

if (mediaNotas >= 7) {
    print('Aprovado!!');
}else if (mediaNotas >= 5 && mediaNotas < 7 ) {
    print('Recuperação!!');
}else if (mediaNotas < 5) {
    console.log('Reprovado');
}


// O exercicio acima funciona perfeitamente como o proposto, mas veja que dessa forma que eu fiz, ele fica mais complexo.

// Resolvendo agora de uma forma mais simples. (Considerando como media o primeiro get/ a primeira nota do array notasEntradas importada das funções auxiliares) :

// const media = gets();   

// if (media < 5) {
//     print('Reprovado!');
// }else if (media >= 5 && media < 7) {
//     print('Recuperação!');
// }else {
//     print('Aprovado!');
// }