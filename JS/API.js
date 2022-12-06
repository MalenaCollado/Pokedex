async function obtenerPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return data
}

async function init() {
    const pokemon = await obtenerPokemon(7)
    window.PokeImg.setAttribute('src', pokemon.sprites.front_default)
    window.PokeName.textContent = pokemon.name
}

init()