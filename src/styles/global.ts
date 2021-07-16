import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    
    --background: #F8F2F5;

    --red: #E52E4d;

    --blue: #5429FF;

    --blue-light: #6933FF;

    --text-title: #363F5F;

    --text-body: #969CB3;

    --shape: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{ 
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width:720px){
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

button{ 
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

`