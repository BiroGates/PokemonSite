import styled from "styled-components";

// Fonts
import font1 from '../../assets/fonts/Pokemon_Solid.ttf'
import font2 from '../../assets/fonts/Poppins-Medium.ttf'

const styledPokemon = styled.div `
    @font-face {
        font-family: 'poke1';
        src: url(${font1});
    }

    @font-face {
        font-family: 'font1' ;
        src: url(${font2});
    }
    
    .pokemons{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;

        width: auto;
        height: 150px;
    }

    .pokemons .pokemon-img{
        width : 150px ;
        height: 150px ;
    }
    .pokemons .pokemon-img img{
        width: 100%;
        height: 100%;
    }

    .pokemons .pokemon-stats{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        
        width: 150px;
        height: 100%;
        
        

    }
    .pokemons .pokemon-stats .title{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        width: 100%;
        height: auto;

        font-family: 'poke1';
        font-size: 1.15em;
        letter-spacing: 2px;
        text-transform: capitalize;
    }

    .hp, .attack, .defense{
        font-family: 'font1';
    }


`

export { styledPokemon }