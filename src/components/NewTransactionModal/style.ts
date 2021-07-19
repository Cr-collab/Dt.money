import styled from "styled-components";

export const Container = styled.form`
h2{ 
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
}
   input{ 
       width: 100%;
       height: 4rem;
       padding: 0 1.5rem;
       border-radius: 0.25rem;

       border: 1px solid #d7d7d7;
       background: #e7e9ee;
       font-weight: 400;
       font-size: 1rem;

       &::placeholder{
           margin-top: 1rem;
       }

       & + input {
           margin-top: 1rem ;
       }

       
    }
    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #FFF;
        border: 0;
        border-radius: 0.25rem;
        margin-top: 1.5rem;
        font-weight: 600;
        font-size: 1rem;
        transition: filter  0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`