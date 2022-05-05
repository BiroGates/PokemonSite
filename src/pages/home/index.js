// Styled Components
import { StyledHome } from './styled'

//Components
import ListPokemon from '../../components/Pokemons/index'
import NotFound from '../../components/NotFound';

// Styled Components
import { Button } from '../../components/styled/Button.js';

// Images
import pikachu from '../../assets/images/pikachu.png';

// Hooks
import { useState } from 'react';
import { useEffect } from 'react';

// Api
import Api from '../../services/Api';
//import api from '../../services/Api';
const showPokemons = new Api();


export default function Home(){    
    // Showing the NotFound Components
    const [found, setFound] = useState(true);
    const handleFound = () => setFound(false);


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
                    <div className='src-bar'>
                        <div className='pikachu-img'><img src={pikachu} alt="" /></div>
                        <input type="text" name='src-bar' onChange={handleSearch} value={inputText} placeholder='Informe Seu Pokemon' />
                    </div>
                </div>
                <div className='fx-two'>
                    <div className='pokemons-container'>
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
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </StyledHome>    
    );
}