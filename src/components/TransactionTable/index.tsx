import { Container } from "./style";

export function TransactionTable(){

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