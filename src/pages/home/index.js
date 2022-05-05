// Framer Motion
import { AnimateSharedLayout } from 'framer-motion';
import { motion } from 'framer-motion';

//React Things
import LoadingBar from 'react-top-loading-bar';

//Components
import ListPokemon from '../../components/Pokemons/index'
import NotFound from '../../components/NotFound';

// Styled Components
import { Button } from '../../components/styled/Button.js';
import { StyledHome } from './styled'

// Images
import pikachu from '../../assets/images/pikachu.png';

// Hooks
import { useState } from 'react';
import { useEffect } from 'react';

// Api
import Api from '../../services/Api';
const showPokemons = new Api();


export default function Home(){    
    //Loading Bar
    const [progress, setProgress] = useState(0);
    
    // Getting pokemon's stats
    const [pokemonStats, setPokemonStats] = useState([]);

    // Change the input's value field
    const [inputText, setInputText] = useState('');
    const handleSearch = (e) => setInputText(e.target.value);

    // Getting All the endpoints
    async function getPokemonStats(){
        let endpoints = await showPokemons.getAllPokemons(setProgress, progress)
        setPokemonStats(endpoints);
    }

    // Getting all the data from the API
    useEffect(()=>{
        getPokemonStats();
    },[])

    console.log(pokemonStats);

    return(
        <StyledHome>
            <LoadingBar
                color='#f11946'
                progress= {progress}
                onLoaderFinished={() => setProgress(0)}
            />
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
                            if(item.data.name.includes(inputText.toLowerCase().trim())){
                                return(
                                    <ListPokemon                                        
                                        id={item.data.id}
                                        pokemonImage={item.data.sprites.other["official-artwork"].front_default}
                                        pokemonName={item.data.name}
                                        pokemonHp={item.data.stats[0].base_stat}
                                        stats={item.data.stats}
                                        type={item.data.types[0].type.name}
                                        
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