export class PokemonRepository {
  getPokemonsPorQuantidade(quantidade) {
    const listaPokemons = []

    for (let index = 1; index <= quantidade; index++) {
      listaPokemons.push(fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`).then(response => response.json()));
    }

    return Promise.all(listaPokemons)
      .then(pokemons => {
        const pokemonsComNomesAndTipos = []
        pokemons.forEach((poke) => {
          const tiposPokemon = poke.types.map((tipo) => tipo.type.name);
          const pokemon = {
            id: poke.id,
            nome: poke.name,
            tipos: tiposPokemon,
          }
          pokemonsComNomesAndTipos.push(pokemon)
        })

        return pokemonsComNomesAndTipos;
      })
  }
}