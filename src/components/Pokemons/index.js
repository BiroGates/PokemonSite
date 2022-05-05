import  { StyledPokemon }  from './styled'



export default function ListPokemon({ pokemonImage, pokemonName}){
    return (
        <StyledPokemon>
            <div className='card'> 
                <div className='card-img'> <img src={pokemonImage} alt="" /> </div>
                <div className='card-name'> {pokemonName} </div>
                <div className='card-type'> Folha </div>
            </div>
        </StyledPokemon>
    )
}