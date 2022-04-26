import axios from "axios"
import { hasUncaughtExceptionCaptureCallback } from "process"

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
})

export default api

/*
export default class Api{
    async showPokemons(){
        let resp = await api.get('pikachu');
        console.log(resp.data.sprites.front_default);
        return resp.data
    }
}
*/