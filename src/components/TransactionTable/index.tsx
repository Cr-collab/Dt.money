import {  useContext, useEffect } from "react";
import { Container } from "./style";
import{ TransactionsContext } from '../../TransactionsContext'


export function TransactionTable(){

         
   const {transactions} = useContext(TransactionsContext)


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

                     {transactions.map((transaction) => (
                         <tr key={transaction.id}>

                         <td>{transaction.title} </td>
                         <td className={transaction.type}> {
                             new Intl.NumberFormat('pt-BR', {
                                 style: 'currency',
                                 currency: 'BRL'
                             }).format(transaction.amount)
                         } </td>
                         <td> {transaction.category} </td>
                         <td>{ new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt)) } </td>
     
                         </tr>
                     ))}

                     
                 </tbody>
             </table>
         </Container>

    ) 

}

function TransactionContext(TransactionContext: any) {
    throw new Error("Function not implemented.");
}
