import { PokemonRepository } from "./Pokemon.repository.js";

const pokemonRepository = new PokemonRepository();

const pokemons = await pokemonRepository.getPokemonsPorQuantidade(50);

colocarNaPagina(pokemons);

function criarElemento(nomeTag, listaClasses) {
  const elemento = document.createElement(nomeTag);

  listaClasses.forEach((classe) => {
    elemento.classList.add(classe);
  })

  return elemento;
}

function colocarNaPagina(listaPokemons) {
  const mainContent = document.getElementById("principalContent");

  listaPokemons.forEach((pokemon) => {
    const divPokemon = criarElemento('div', ['pokemon']);
    const labelNome = criarElemento('label', ['nome']);
    labelNome.append(document.createTextNode(pokemon.nome))

    const labelIniciaTipos = criarElemento('label', []);
    labelIniciaTipos.append(document.createTextNode('Tipo(s):'))

    const imgPokemon = criarElemento('img', ['imagem-pokemon']);
    imgPokemon.src = `https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`
    
    divPokemon.appendChild(imgPokemon);
    divPokemon.appendChild(labelNome);
    divPokemon.appendChild(labelIniciaTipos);
    pokemon.tipos.forEach((tipo, index) => {
      const labelTipo = criarElemento('label', ['tipo']);
      labelTipo.append(document.createTextNode(tipo));

      if (index === 0) {
        divPokemon.classList.add(tipo)
      }

      divPokemon.appendChild(labelTipo);
    })
    
    mainContent.appendChild(divPokemon);
  })
}
