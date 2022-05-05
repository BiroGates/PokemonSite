import axios from "axios"

const api = axios.create({
    baseURL: `https://pokeapi.co/api/v2`
})

export default class Api{
    async getAllPokemons(){
        // Getting all the urls from the API
        let resp = await api.get('/pokemon?limit=500&offset=0');
        let pokemonEndpoints = []
        resp.data.results.map((item) => {
            pokemonEndpoints.push(item.url);
        })
    
        // Making a GET for each url that I've found 
        let stats = await axios.all(pokemonEndpoints.map((endpoint) => axios.get(endpoint)))
        return stats

    }
}

