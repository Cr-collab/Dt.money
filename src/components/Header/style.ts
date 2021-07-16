import  styled  from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
` 

export const Content = styled.div`
     
     max-width: 1120px;
     margin: 0 auto;
     display: flex;
     
     padding: 2rem 1rem 10rem;

     align-items: center;
     justify-content: space-between;

     button{ 
         cursor: pointer;
         font-size: 1rem;
         height:3rem;
         padding: 0 2rem;
         border: none;
         border-radius: 0.25rem;
         color: #fff;
         background: var(--blue-light);
         transition: filter 0.2s;

         &:hover {
                filter: brightness(0.9);
           }
       

     }

    

`
