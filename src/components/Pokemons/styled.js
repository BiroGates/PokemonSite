import styled from "styled-components";

// Fonts
import font1 from '../../assets/fonts/Pokemon_Solid.ttf'
import font2 from '../../assets/fonts/Poppins-Medium.ttf'

const StyledPokemon = styled.div `
    @font-face {
        font-family: 'poke1';
        src: url(${font1});
    }

    @font-face {
        font-family: 'Poppins' ;
        src: url(${font2});
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    .card{
        width: 250px;
        height: 300px;
    
        border-radius: 15px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        background-color: #95CEA5;
    
    }

    .card > *{
        margin-bottom: 15px;
    }



    .card-img{
        width: 150px;
        height: 150px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row ;

        border-radius: 100%;

        background-color: white;
    }

    .card-img img{
        width: 70%;
        height: 70%;
    }
    
    .card-name{
        font-family: 'Poppins';
        font-size: 1em;
        text-transform: capitalize;
    }

    .card-type{
        font-size: 12px;
        font-family: 'Poppins';
        text-transform: capitalize;
    }

`

export { StyledPokemon }