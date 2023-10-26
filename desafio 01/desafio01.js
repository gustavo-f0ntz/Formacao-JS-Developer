
let precoGasolina = 6.79 
let precoEtanol = 5.25
let combustivelEscolhido = prompt("Qual combustível você escolhe? (GASOLINA) - (ETANOL)")
let distanciaPercorrida = prompt("Qual a distância percorrida na viagem?")
let consumoPorKM = 10


let gastoMedio = distanciaPercorrida / consumoPorKM

if (combustivelEscolhido === "ETANOL") {
    valorGasto = precoEtanol * gastoMedio
   console.log(`Tendo em vista que o Etanol tá custando R$${precoEtanol} e você percorreu ${distanciaPercorrida} Kms. O gasto medio de combustivel foi de ${gastoMedio.toFixed(2)} lts e o valor gasto foi de R$${valorGasto.toFixed(2)}`)
}else {
    valorGasto = precoGasolina * gastoMedio
    console.log(`Tendo em vista que a gasolina tá custando R$${precoGasolina} e você percorreu ${distanciaPercorrida} Kms. O gasto medio de combustivel foi de ${gastoMedio.toFixed(2)} lts e o valor gasto foi de R$${valorGasto.toFixed(2)}`)
}



