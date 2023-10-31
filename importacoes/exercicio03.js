
// Faça um programa que calcule e imprima o salario a ser transferido para um funcionario.

// Para realziar o calculo receba o valor bruto do salario e o adicional dos beneficios.
// O salario a ser transferido é calulado da seguinte maneira:

// valor bruto do salário - percentual de imposto mediante a faixa salarial adicionada dos beneficios

// para calcular o imposto segue a aliquota:

// De R$ 0.00 a R$ 1100.00 = 5.00%
// De R$ 1100.01 a R$ 2500.00 = 10.00%
// Maior que R$ 2500.00 = 15.00%

// Exemplo: 
//      Entrada:
//          2500
//          250


//      Saída:
//          2050.00


const {gets , print } = require('./funcoes_auxiliaresEX03');

const salarioBruto = gets();
const valorBeneficios = gets();

function calcularPorcentagem(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {

    if (salario >= 0 && salario < 1100 ) {
        return 5;
    }else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    }else {
        return 15;
    }
}


// print(pegarPercentualImpostoComBaseNoSalario(valorSalarioBruto)); // Retornando: 10 (Com salario 2000) * FUNCIONANDO CORRETAMENTE*

//Falta implementar resto do codigo e calcular o valor completo com percentual
// Limpar mais o nome grande das variaveis e funcoes

const aliquotaDoImposto = pegarAliquota(salarioBruto);
const valorImposto = calcularPorcentagem(salarioBruto, aliquotaDoImposto)

const valorATransferir = salarioBruto - valorImposto + valorBeneficios;

print(valorATransferir);

// Concluído!!

