
/* Crie uma classe para representar carros.

Os carros possuem uma marca, uma cor, e um gasto medio de combustivel por KMS rodados.
Crie um metodo que dado a quantidade de quilometros e o preco do combustivel nos dê o valor gasto
em Reais para realizar este percurso.

*/

class Carro {
    marca;
    cor;
    gastoMedioCombustivel;
    


    constructor(marca, cor, kmsRodados, gastoMedioCombustivel, quantLitros, valorgastoKmsRodados) {

        let valorCombustivel = 6.79;
        this.marca = marca;
        this.cor = cor;
        this.kmsRodados = kmsRodados;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
        this.quantLitros = (kmsRodados / gastoMedioCombustivel).toFixed(2);
        this.valorgastoKmsRodados = valorgastoKmsRodados;
        this.valorgastoKmsRodados = (valorCombustivel * this.quantLitros).toFixed(2);


    }

}

const Toro = new Carro('Fiat', 'Preto',800, 10);
console.log(Toro);

const Uno = new Carro('Fiat', 'Branco', 174, 14);
console.log(Uno);