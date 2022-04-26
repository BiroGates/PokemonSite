import styled from "styled-components";

// Fonts
import font1 from '../../assets/fonts/Pokemon_Solid.ttf'
import font2 from '../../assets/fonts/Poppins-Medium.ttf'

const StyledHome = styled.div `
    @font-face {
        font-family: 'poke1';
        src: url(${font1});
    }

    @font-face {
        font-family: 'font1' ;
        src: url(${font2});
    }


    .main{
        width: 100%;
        height: auto;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: white;
    }

    /* START OF INTRODUCTION*/
    .fx-one{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

        width: 100%;
        height: 500px;

        background-color: white;
    }

    .poke-image{
        display: flex;
        align-self: center;
        justify-content: center;

        width: auto;
        height: 300px;

    }
    
    .poke-title{
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: center;

        width: 300px;
        height: 300px;

        background-color: white;
    }

    .poke-text{
        width: 100%;
        height: 150px;

        font-size: 3em;
        font-family: 'poke1';
        letter-spacing: 4px;
        color: black;
    }
    .poke-phrase{
        width: 100%;
        height: 150px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 1.2em;
        font-family: 'font1';
        color: black;
    }
    
    .poke-ball{
        width: 100px;
        height: 100px;
    }

    .poke-ball img{
        width: 100%;
        height: 100%;
    }
    /* END OF INTRODUCTION*/

    /* START OF SEARCHBAR*/
    .fx-two{
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 180px;
    }

    .src-bar{
        width: 50%;
        height: 50px;
    
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;    
    }

    .src-bar input{
        width: 80%;
        height: 75%;
        
        padding-left: 20px;

        border-radius: 15px ;
        border: none;
        
        background-color: red;
        
        font-size: 1.2em;
        color: white;
    }
    .src-bar input:focus{
        outline: none;
    }

    .src-icon{
        width: 40px;
        height: 40px;
    }
    .src-icon img {
        width: 100%;
        height: 100%;
    }
    /* END OF SEARCHBAR*/

    /* START OF SHOWPOKEMONS*/
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

export { StyledHome };