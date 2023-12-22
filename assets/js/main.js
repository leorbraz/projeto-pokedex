

/*function convertPokemonTypesToLi (pokemonTypes) {
    return pokemonTypes.map((typeSlot) => `<li class="type"> ${typeSlot.type.name} </li>`)
}*/
 
function convertPokemonToLi (pokemon) {
    return `
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

}

const pokemonList = document.getElementById('pokemonList')  //Pega a lista de pokemons

//pokemonList.innerHTML += '<li>teste<?li></li>' adicionando um item fixo a lista

pokeApi.getPokemons().then((pokemons = []) => {             // requisição http para buscar os pokemons 
    const newHtml = pokemons.map(convertPokemonToLi).join('')        // converte a lista em html e junta todos os elemnentos para gerar uma lista nova
    pokemonList.innerHTML = newHtml
})

   
 /* for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];  // resultado dos pokemons
        listItens.push(convertPokemonToLi(pokemon))
        //pokemonList.innerHTML += convertPokemonToLi(pokemon)   ---  convertendo a estrutura de objeto de pokemon para html
    }
    
    console.log(listItens) */