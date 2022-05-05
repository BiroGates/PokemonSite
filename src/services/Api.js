import axios from "axios"

const api = axios.create({
    baseURL: `https://pokeapi.co/api/v2`
})

export default class Api{
    async getAllPokemons(setProgress, progress){
        // Getting all the urls from the API
        let resp = await api.get('/pokemon?limit=1000&offset=0');
        let pokemonEndpoints = []
        resp.data.results.map((item) => {
            pokemonEndpoints.push(item.url);
        })
    
        // Making a GET for each url that I've found
        // Creating a counter to increase the Loading bar !!! ONLY WORKS FOR 500 POKEMONS !!!
        let counter = 0
        let stats = await axios.all(pokemonEndpoints.map((endpoint) => {
            counter += 0.2
            //Setting the progress bar;
            setProgress(progress + counter);
            return axios.get(endpoint);
        }));
        return stats;
    }
}

