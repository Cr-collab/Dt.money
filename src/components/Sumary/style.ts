import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-top:-110px;

   div {
       background: var(--shape);
       padding: 1.5rem 2rem;
       color: var(--text-title);
       border-radius: 0.25rem;

       header {
           display:flex;
           align-items:center;
           justify-content:space-between;
       }

       strong {
           display:block;
           margin-top: 1rem;
           font-weight: 500;
           line-height: 3rem;
           font-size: 2rem;
       }

       &.highlight-background{
           background: var(--green);
           color: #FFF;
       }



   }
 
`