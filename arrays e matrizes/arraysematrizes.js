let pokemons = ["Pikachu", "Charmander", "Bulbassaur", "Raichu"]

pokemons.unshift("Mewtwoo") // para colocar algo no começo do array
console.log(pokemons)

pokemons.push("Abracadabra") // Para colocar algo no final do array
console.log(pokemons)

indice = pokemons.indexOf("Pikachu") // Para procurar o indice de um determinado elemento no array
console.log(indice)


let timePokemon = [["Pikachu", "M", "Level 20"], 
                   ["Charmander", "M", "Level 13"]
                    ]

console.log(timePokemon[1]) // para o timePokemon no índice 0 (Pikahu, M, Level 20)
console.log(timePokemon[0]) // para o timePokemon no indice 1 (Charmander, M, Level 13)


console.log(timePokemon[0][2])
console.log(`O pokemon ${timePokemon[1][0]} do ${timePokemon[1][2]} foi selecionado.`)

console.log(pokemons.length)
console.log(timePokemon.length)

// tem varios outros metodos tambem para aerrays e matrizes 