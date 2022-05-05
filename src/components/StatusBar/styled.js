import styled from "styled-components";

import poppins_medium from '../../assets/fonts/Poppins-Medium.ttf'
import poppins_bold from '../../assets/fonts/Poppins-Bold.ttf'

const StyledStatusBar = styled.div `
     @font-face {
        font-family: 'poppins_medium';
        src: url(${poppins_medium});
    }

    @font-face {
        font-family: 'poppins_bold';
        src: url(${poppins_bold});
    }
    
    .bar{
        width: 100%;
        height: 60px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row ;

        margin-bottom: 20px;

        background-color: white;

        border-radius: 20px;

    }
    .filling-bar{
        height: 100%;
     
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row ;

        background-color: red;
        
        border-radius: 20px;
    }

    .name{
        margin-left: 50px;

        font-family: 'poppins_medium';
        font-size: 24px;
        color: rgba(62, 62, 62, 0.5);
    }

    .value{
        margin-right: 80px;

        font-family: 'poppins_medium';
        font-size: 24px;
        color: rgba(62, 62, 62, 0.5);
    }
`;

export { StyledStatusBar }