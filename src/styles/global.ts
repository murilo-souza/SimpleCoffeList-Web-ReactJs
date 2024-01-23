import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    

    body {
        background-color: ${(props) => props.theme.gray800};
        color: ${(props) => props.theme.gray100};
        -webkit-font-smoothing: antialiased;
    }


    body, input, textarea, button {
        font-family: 'DM Sans', sans-serif;
        font-weight: bold;
        font-size: 1rem
    }
`
