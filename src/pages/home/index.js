// Styled Components
import { StyledHome } from './styled'

//Components
import ListPokemon from '../../components/Pokemons/index'

// Styled Components
import { Button } from '../../components/styled/Button.js';

// Images
import pokedex from '../../assets/images/pokedex.jpg';
import pokeBola from '../../assets/images/pokeBola.png'
import lupa from '../../assets/images/lupa.png'

// Hooks
import { useState } from 'react';
import { useEffect } from 'react';

// Api
import Api from '../../services/Api';
import { type } from '@testing-library/user-event/dist/type';
//import api from '../../services/Api';
const showPokemons = new Api();


export default function Home(){    
    // Getting pokemon's stats
    const [pokemonStats, setPokemonStats] = useState([]);

    // Change the input's value field
    const [inputText, setInputText] = useState('');
    const handleSearch = (e) => setInputText(e.target.value);

    // Getting All the endpoints
    async function getPokemonStats(){
        let endpoints = await showPokemons.getAllPokemons(inputText)
        setPokemonStats(endpoints);
    }

    // Getting all the data from the API
    useEffect(()=>{
        getPokemonStats();
    }, [])
    
    return(
        <StyledHome>
            <div className='main'>
                <div className='fx-one'>
                    <div className='poke-image'>
                        <img src={pokedex} />
                    </div>
                    <div className='poke-title'>
                        <div className='poke-text'>Biro's Dex</div>
                        <div className='poke-phrase'>Sua PokeDex Online e gratuita!</div>
                        <div className='poke-ball'><img src={pokeBola}/></div>
                    </div>
                </div>
                <div className='fx-two'>
                    <div className='src-bar'>
                        <div className='src-icon'><img src={lupa}/></div>
                        <input type='text' onChange={handleSearch} value={inputText}></input>
                    </div>
                    <div className='buttons'>
                        <Button> BUSCAR </Button>
                    </div>
                </div>     
                    {pokemonStats.map((item) => {
                        if(item.data.name.includes(inputText)){
                            return(
                                <ListPokemon
                                    pokemonImage={item.data.sprites.front_default}
                                    pokemonName={item.data.name}
                                    pokemonHp={item.data.stats[0].base_stat}
                                    pokemonAttack={item.data.stats[1].base_stat}
                                    pokemonDefense={item.data.stats[2].base_stat}
                                />
                            );
                        }
                    })}
            </div>
        </StyledHome>    
    );
}