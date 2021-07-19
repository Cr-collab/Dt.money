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

    --green : #33CC95;
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

body , textarea , input , button{
    font-family: Poppins , sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

button{ 
    cursor: pointer;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay{


    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0,0.5);
}

.react-modal-content{
    background: var(--background);
    width:100%;
    max-width: 576px;
    padding: 3rem;

    position: relative;
    border-radius: 0.24rem;

}

.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter  0.2s;

    &:hover{
        filter: brightness(0.8);
    }
}

`