import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        margin: 0;
        padding:0;
        background: #FFFFFF;
        height:100%; 
        width: 100%;
    }
`

export default GlobalStyle