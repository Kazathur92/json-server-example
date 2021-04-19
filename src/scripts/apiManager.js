

export default class ApiManager {

    constructor() {

    }

    getPokemon() {
        return fetch('http://localhost:8088/pokemon').then(response => { return response.json()})
    }

    getUsers() {
        return fetch('http://localhost:8088/users').then(response => { return response.json()})
    }

    addPokemon(bodyToReceive) {
        console.log(bodyToReceive)
        return fetch('http://localhost:8088/pokemon', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bodyToReceive)
        }).then(response => {return response.json()})
    }

    deletePokemon(pokemonId) {
        return fetch(`http://localhost:8088/pokemon/${pokemonId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        }).then(response => {return response.json()});
    }

    editPokemon(bodyToReceive, pokemonId) {
        return fetch(`http://localhost:8088/pokemon/${pokemonId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(bodyToReceive)
        }).then(response => {return response.json()});
    }

}


