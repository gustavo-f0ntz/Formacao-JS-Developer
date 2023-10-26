
// Exercicio para Calcular o IMC


altura = parseFloat(prompt("Qual a sua altura? "));
peso = parseFloat(prompt("Digite o seu peso: "));

IMC = peso / Math.pow(altura, 2);
console.log(IMC.toFixed(2));



if (IMC > 40) {
    console.log("OBESIDADE GRAVE!");
}else if (IMC >= 30 && IMC <= 40) {
    console.log("OBESO!");
}else if (IMC >= 25 && IMC <= 30) {
    console.log("ACIMA DO PESO!");
}else if (IMC >= 18.5 && IMC <= 25) {
    console.log("PESO NORMAL!");
}else {
    console.log("ABAIXO DO PESO!");
}



