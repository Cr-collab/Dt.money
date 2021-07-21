import {Container} from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransaction } from "../hooks/useTransactions";
 
export function Sumary(){

    const { transactions } = useTransaction()
   

     const sumary = transactions.reduce((acc, transaction)=>{
         if(transaction.type === 'deposit'){

            acc.deposit += transaction.amount
            acc.total += transaction.amount
         }else{
             acc.withdraw += transaction.amount
             acc.total -= transaction.amount
         }
         return acc
     }, { deposit: 0, withdraw: 0, total:0 })

    return(
        <Container>
             <div>
                 <header>
                     <p>Entrada</p>
                     <img src={incomeImg} alt="Entrada" />
                 </header>
                 <strong>
                     {new Intl.NumberFormat('pt-BR', { style:'currency', currency: 'BRL'}).format(sumary.deposit)}
                 </strong>
             </div>
             {/*  */}
             <div>
                 <header>
                     <p>Saida</p>
                     <img src={outcomeImg} alt="Entrada" />
                 </header>
                 <strong>
                    - {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(sumary.withdraw)}
                 </strong>
             </div>
             {/*  */}
             <div className="highlight-background">
                 <header>
                     <p>Total</p>
                     <img src={totalImg} alt="Total" />
                 </header>
                 <strong>
                     R$ {new Intl.NumberFormat('pt-BR', { style: "currency", currency:"BRL" }).format(sumary.total)}
                 </strong>
             </div>
        </Container>
    )
}

function useTransactions(): { transactions: any; } {
    throw new Error("Function not implemented.");
}
