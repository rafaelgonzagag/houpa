import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FAFAFA;

        --450887: #450887;
        --5F12B6: #5F12B6;
        --3F0B6D: #3F0B6D;

        --000000: #000000;
        --222222: #222222;

        --FFFFFF: #FFFFFF;
        --E5E5E5: #E5E5E5;
        --FAFAFA: #FAFAFA;
        --E9E9E9: #E9E9E9;

        --B5B5B5: #B5B5B5;
        --C8C8C8: #C8C8C8;
        --525252: #525252;
    
        --707070: #707070;
        --838C91: #838C91;
        
        --C5C5C5: #C5C5C5;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media(max-width: 720px) {
            font-size: 87.5%;
        }
    }
    
    body {
        backgroung: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }    
    
    
`