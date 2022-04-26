// Styled Components
import { StyledHome } from './styled'

//Components
import Pokemons from '../../components/Pokemons/index'

// Images
import pokedex from '../../assets/images/pokedex.jpg';
import pokeBola from '../../assets/images/pokeBola.png'
import lupa from '../../assets/images/lupa.png'

// Hooks
import { useState } from 'react';
import { useEffect } from 'react';

// Api
//import Api from '../../services/Api';
import api from '../../services/Api';
//const showPokemons = new Api();



export default function Home(){
    
    const [pokemonImage, setPokemonImage] = useState('');
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonAttack, setPokemonAttack] = useState('');
    const [pokemonHp, setPokemonHp] = useState('');
    const [pokemonDefense, setPokemonDefense] = useState('');
   
    const [listedPokemons, setListedPokemons] = useState([]);
    const handleList = () => setListedPokemons([...listedPokemons, 
        { nome: pokemonName, imagem: pokemonImage, hp: pokemonHp,
        attack: pokemonAttack,
        defense: pokemonDefense,
    }]);

    
    const [inputText, setInputText] = useState('');
    const handleSearch = (e) => setInputText(e.target.value);
    
    const [search, setSearch] = useState(true);
    const changePokemon = () => {
        setSearch(!search)
    }
    useEffect(()=>{
        api.get(inputText.toLowerCase().trim()).then(({ data }) => {
            setPokemonImage(data.sprites.front_default)
            setPokemonName(data.name)
            setPokemonHp(data.stats[0].base_stat)         
            setPokemonAttack(data.stats[1].base_stat);
            setPokemonDefense(data.stats[2].base_stat);
            handleList();
        })
    }, [search])
    
    console.log(listedPokemons);

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
                        <button onClick={changePokemon}> BUSCAR </button>
                    </div>
                </div>     
                    {listedPokemons && 
                        <Pokemons
                            pokemonImage = {pokemonImage}
                            pokemonName = {pokemonName}
                            pokemonHp = {pokemonHp}
                            pokemonAttack = {pokemonAttack}
                            pokemonDefense = {pokemonDefense}
                        />
                    }
            </div>
        </StyledHome>    
    );
}