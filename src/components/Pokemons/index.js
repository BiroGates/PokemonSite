import  { styledPokemon }  from './styled'

export default function ListPokemon({ pokemonImage, pokemonName, pokemonHp, pokemonAttack, pokemonDefense }){
    return (
        <styledPokemon>
            <div className='pokemons'> 
                        {pokemonImage && 
                            <div className='pokemon-img'> <img src={pokemonImage} /> </div>
                        }
                        <div className='pokemon-stats'>
                            <div className='title'> { pokemonName } </div>
                            <div className='attack'> HP: { pokemonHp } </div>
                            <div className='attack'> ATTACK: { pokemonAttack } </div>
                            <div className='attack'> DEFENSE: { pokemonDefense } </div>
                        </div>
            </div>
        </styledPokemon>
    )
}