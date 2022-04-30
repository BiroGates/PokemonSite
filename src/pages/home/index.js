// Styled Components
import { StyledHome } from './styled'

//Components
import ListPokemon from '../../components/Pokemons/index'

// Images
import pokedex from '../../assets/images/pokedex.jpg';
import pokeBola from '../../assets/images/pokeBola.png'
import lupa from '../../assets/images/lupa.png'

// Hooks
import { useState } from 'react';
import { useEffect } from 'react';

// Api
import Api from '../../services/Api';
//import api from '../../services/Api';
const showPokemons = new Api();


export default function Home(){    
    const [listedPokemons, setListedPokemons] = useState([]);

    const [inputText, setInputText] = useState('');
    const handleSearch = (e) => setInputText(e.target.value);

    
    async function getResult() {
        try{
            let r = await showPokemons.showPokemons(inputText);
            setListedPokemons([...listedPokemons, r])
        }catch(err){
            console.log(err.message);
        }
    }
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
                        <button onClick={getResult}> BUSCAR </button>
                    </div>
                </div>     
                    {listedPokemons.map((item)=>{
                        return(
                            <ListPokemon
                            pokemonImage = {item.sprites.front_default}
                            pokemonName = {item.name}
                            pokemonHp = {item.stats[0].base_stat}
                            pokemonAttack = {item.stats[1].base_stat}
                            pokemonDefense = {item.stats[2].base_stat}
                            />
                        )
                    })}
            </div>
        </StyledHome>    
    );
}