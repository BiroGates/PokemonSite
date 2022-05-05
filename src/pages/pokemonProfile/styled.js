import styled from "styled-components";

// Fonts
import poppins_medium from '../../assets/fonts/Poppins-Medium.ttf'
import poppins_bold from '../../assets/fonts/Poppins-Bold.ttf'

const StyledPokemonProfile = styled.div `
    
    @font-face {
        font-family: 'poppins_medium';
        src: url(${poppins_medium});
    }

    @font-face {
        font-family: 'poppins_bold';
        src: url(${poppins_bold});
    }

    .main{
        width: 100%;
        height: auto;
        
        display: flex ;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .container{
        width: 1720px;
        height: auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    .profile{
        width: 500px;
        height: 800px;

        margin-top: 90px;
        margin-bottom: 150px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }

    .pf-id{
        width: 100%;
        height: auto;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        font-family: 'poppins_medium';
        font-size: 2em ;
    }

    .pf-img{
        width: 490px;
        height: 490px ;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        background-color: white;

        border-radius: 100%;
    }

    .pf-img img{
        width: 50%;
        height: 50%;
    }

    .pf-name{
        width: 100%;
        height: auto;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row ;

        font-size: 3em;
        font-family: 'poppins_bold';
        color: #3D3D3D ;
    }

    .pf-type{
        width: auto;
        height: auto;
        
        padding: 10px 40px;

        border-radius: 55px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row ;

        font-family: 'poppins_medium';

    }

    .stats{
        width: 100%;
        height: 100%;
    
        margin-bottom: 80px ;
    }

`;

export { StyledPokemonProfile }