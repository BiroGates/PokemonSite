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
    }
/*==========================START OF FX-ONE==================================*/
    .fx-one{
        width: 100%;
        height: 350px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .src-bar{
        width: 320px;
        height: 220px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    .src-bar input{
        width: 320px;
        height: 30px;

        border-radius: 50px;
        padding: 10px 20px;
    
        font-size: 1em;
        font-family: 'font1';
        border: none ;
    }

    .src-bar input:focus{
        outline: none;
    }

    .pikachu-img{
        width: 150px;
        height: 150px;
    }
    .pikachu-img img{
        width: 100%;
        height: 100%;
    }
/*=======================END OF FX-ONE=================================*/

/*=======================SRTART OF FX-ONE=================================*/
    .fx-two{
        width: 100%;
        height: auto;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row ;
    }

    .pokemons-container{
        width: 1060px;
        height: auto;
    
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .pokemons-container > *{
        margin-bottom: 15px;
    }
`

export { StyledHome };