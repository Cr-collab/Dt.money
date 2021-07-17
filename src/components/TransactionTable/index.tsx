import { useEffect } from "react";
import { Container } from "./style";

export function TransactionTable(){

    useEffect(()=>{
           fetch('http://localhost:3000/api/transaction')
           .then(response => response.json())
           .then(data => {console.log(data)})
           /** forma que fizemos no capitulo 1   */
    }, [])

    return (
    
         <Container>
             <table>
                 <thead>
                    <tr>
                        <th> Titulo </th>
                        <th> Valor </th>
                        <th> Categoria </th>
                        <th> Data </th>        
                    </tr>
                 </thead>

                 <tbody>

                     <tr>

                     <td>Densenvolvimento de website</td>
                     <td className="deposit">R$ 12.0000 </td>
                     <td >Densenvolvimento </td>
                     <td>20/12/2021 </td>

                     </tr>

                     <tr>

                    <td>Aluguel </td>
                    <td className="withdraw"> - R$ 1.0000 </td>
                    <td>Casa </td>
                    <td>21/12/2021 </td>

                    </tr>
                 </tbody>
             </table>
         </Container>

    ) 

}