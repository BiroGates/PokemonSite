import { type } from "@testing-library/user-event/dist/type";
import axios from "axios"

const api = axios.create({
    baseURL: `https://pokeapi.co/api/v2`
})

export default class Api{
    async getAllPokemons(name, types){
        // Getting all the urls from the API
        let resp = await api.get('/pokemon?limit=500&offset=0');
        let pokemonEndpoints = []
        resp.data.results.map((item) => {
            pokemonEndpoints.push(item.url);
        })
    
        // Making a GET for each url that I've found 
        let stats = await axios.all(pokemonEndpoints.map((endpoint) => axios.get(endpoint)))
        return stats
        stats.map((item) => {
            console.log(item.data.types[0].type.name);
        });

        // Filtering by the type
        if(types){
            return stats.filter((item) => item.data.types[0].type.name.includes(types));
        }
        
        // Filtering by search
        return stats.filter((item) => item.data.name.substr(0, 3).includes([name]) === true);
    }
}

