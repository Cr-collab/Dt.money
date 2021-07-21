import { useEffect, ReactNode, useState ,createContext} from 'react';
import { api } from './services/api'


interface TransactionProps {
    transactions: Transaction[];
    createTransaction : (transaction: TransactionInput) => void;
}

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput =  Omit<Transaction , 'id' | "createdAt">

export const TransactionsContext = createContext<TransactionProps>({} as TransactionProps);

interface TransactionsProviderProps{
    children: ReactNode;
}

function createTransaction(transaction : TransactionInput){
    // const data = {
    //     title,
    //     value, 
    //     category,
    //     type
    //   };


      api.post('/transactions', transaction);
}





export function TransactionsProvider({ children } : TransactionsProviderProps){


    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(()=>{
           api.get('transactions')
           .then(response => setTransactions(response.data.transactions))    
    }, [])

    return(
        <TransactionsContext.Provider value={{transactions , createTransaction}}> 
           {children}
        </TransactionsContext.Provider>
    )

}
