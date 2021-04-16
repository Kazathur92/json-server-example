

export default class ApiManager {

    constructor() {

    }

    getData() {
        return fetch('http://localhost:8088/pokemon')
    }






}


