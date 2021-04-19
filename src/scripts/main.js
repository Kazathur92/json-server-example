import ApiManager from "./apiManager";

let createPokemonInput = document.getElementById("createPokemonInput");
let createPokemonButton = document.getElementById("createPokemonButton");
let deletePokemonInput = document.getElementById("deletePokemonInput");
let deletePokemonButton = document.getElementById("deletePokemonButton");
let editPokemonButton = document.getElementById("editPokemonButton");
let pokemonHeader = document.getElementById("pokemonShowcase");

let newPokemon = {};
let pokemonId = '';
let apiManager = new ApiManager();
let pokemonData;

const changeInput = (event) => {
    if (event.target.id === 'createPokemonInput') {
        newPokemon[event.target.name] = event.target.value;
    } else {
        pokemonId = event.target.value;
    }
};


createPokemonInput.addEventListener('change', changeInput);
deletePokemonInput.addEventListener('change', changeInput);
createPokemonButton.addEventListener('click', () =>  {apiManager.addPokemon(newPokemon)});
deletePokemonButton.addEventListener('click', () =>  {apiManager.deletePokemon(pokemonId)});
editPokemonButton.addEventListener('click', () => {apiManager.editPokemon(newPokemon, pokemonId)});


let initialize = new Promise((resolve, reject) => {
    apiManager.getPokemon().then(data => {
        pokemonData = data;
        resolve(pokemonData);
    });
});

initialize.then((data) => {

    pokemonData.forEach(pokemon => {
        let newPokemonElement = document.createElement('p')
        newPokemonElement.innerText = pokemon.name
        pokemonHeader.appendChild(newPokemonElement);
    })

});

