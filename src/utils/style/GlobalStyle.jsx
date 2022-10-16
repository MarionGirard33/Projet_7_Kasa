import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        margin: 0;
        background: #FFFFFF;
    }
`

export default GlobalStyle