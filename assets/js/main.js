const pokemonList = document.getElementById('pokemonList')  //Pega a lista de pokemons
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 10
let offset = 0;
 


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {             // requisição http para buscar os pokemons 
        const newHtml = pokemons.map((pokemon) =>  `
            <li class="pokemon ${pokemon.type}">
                <span class="number"> #${pokemon.number} </span>
                <span class="name">${pokemon.name} </span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}"> ${type} </li>`).join('')}
                    </ol>   
                    <img src="${pokemon.photo}" alt="${pokemon.name}" >                   
                </div>
            </li>
            `    
        ).join('')        // converte a lista em html e junta todos os elemnentos para gerar uma lista nova

        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qntRecordNextPage = offset + limit
    
    if (qntRecordNextPage >= maxRecords) {
        const newLimit = qntRecordNextPage - maxRecords
        loadPokemonItens(offset, limit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)

    } else{
        loadPokemonItens(offset, limit)
    }
})

//pokemonList.innerHTML += '<li>teste<?li></li>' ------- adicionando um item fixo a lista

/*pokeApi.getPokemons().then((pokemons = []) => {             // requisição http para buscar os pokemons 
    const newHtml = pokemons.map(convertPokemonToLi).join('')        // converte a lista em html e junta todos os elemnentos para gerar uma lista nova
    pokemonList.innerHTML = newHtml
})
*/
   
 /* for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];  // resultado dos pokemons
        listItens.push(convertPokemonToLi(pokemon))
        //pokemonList.innerHTML += convertPokemonToLi(pokemon)   ---  convertendo a estrutura de objeto de pokemon para html
    }
    
    console.log(listItens) */