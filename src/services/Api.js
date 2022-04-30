import axios from "axios"
import { hasUncaughtExceptionCaptureCallback } from "process"

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
})

export default class Api{
    async showPokemons(pokemonName){
        let resp = await api.get(`/${pokemonName}`);
        return resp.data
    }
}
