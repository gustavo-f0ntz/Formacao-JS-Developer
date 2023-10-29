
/* Crie uma classe para representar pessoas.

Para cada pessoa temos os atributos nome, peso e altura.

As pessoas devem ter a capacidade de dizer o valor do seu IMC( IMC = Peso / altura (altura * altura));
Instancie uma pessoa chamada José que tenha 70kgs de peso e 1.70 de altura e peça pra Jose dizer o valor do seu IMC.

*/

class HumanoIMC {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura; 

    }

    calculoIMC(peso, altura, IMC) {
        IMC = this.peso / (Math.pow(this.altura, 2));
        console.log(`${this.nome} tem ${this.peso}kg e ${this.altura}m de altura. E seu IMC é de ${IMC.toFixed(2)}`);
    }
    
    classificarIMC() {
        const imc = this.IMC;
        if (imc > 40) {
            console.log("OBESIDADE GRAVE!");
        }else if (imc >= 30 && imc <= 40) {
            console.log("OBESO!");
        }else if (imc >= 25 && imc <= 30) {
            console.log("ACIMA DO PESO!");
        }else if (imc >= 18.5 && imc <= 25) {
            console.log("PESO NORMAL!");
        }else {
            console.log("ABAIXO DO PESO!");
        }
        
    }

}

const Jose = new HumanoIMC('Jose', 70, 1.70);
console.log(Jose);
Jose.calculoIMC();
Jose.classificarIMC();



