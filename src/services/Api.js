import axios from "axios"

// Api urls
const allPokemons =`pokemon?limit=10&offset=0`
const onlyOnePokemon = `pokemon`

const api = axios.create({
    baseURL: `https://pokeapi.co/api/v2`
})

export default class Api{
    async getAllPokemons(name){
        let resp = await api.get('/pokemon?limit=500&offset=0');
        let pokemonEndpoints = []
        resp.data.results.map((item)=>{
            pokemonEndpoints.push(item.url);
        })
    
        let stats = await axios.all(pokemonEndpoints.map((endpoint) => axios.get(endpoint)))
        
        return stats.filter((item) => item.data.name.includes([name]) === true );
    }
}

