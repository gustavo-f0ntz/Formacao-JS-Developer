// faça um algoritmo que calcule as 3 notas de um aluno na faculdade e com base nessas notas imprima 
// a sua media e sua classificação conforme a tabela abaixo: 

// Classificação:
// -- Media menor que 5 é REPROVADO
// -- Media entre 5 e 7 ta em RECUPERAÇÃO
// -- Media acima de 7, passou por MEDIA

let nota1 = 8
let nota2 = 7
let nota3 = 7

let mediaGeral = (nota1 + nota2 + nota3) / 3;
console.log(mediaGeral.toFixed(2))

if (mediaGeral <5 ) {
    console.log("Aluno Reprovado!");
}else if (mediaGeral >= 5 && mediaGeral < 7) {
    console.log("Em Recuperação!");
}else {
    console.log("Aprovado!!")
}