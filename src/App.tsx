import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal'
import { useState } from 'react'
import { GlobalStyle } from './styles/global'
import {TransactionsProvider} from './components/hooks/useTransactions'

 
export function App() {
  Modal.setAppElement('#root');

  const [isNewTrasactionModalOpen,setIsNewTrasactionModalOpen] = useState(false);

  function handleOpenNewTransactioModal(){
    setIsNewTrasactionModalOpen(true);
}

function handleCloseTransactionModal(){
    setIsNewTrasactionModalOpen(false);
}

  return (
    <TransactionsProvider >
       <Header 
       onHandleOpenNewTransactioModal={handleOpenNewTransactioModal}
       />
       
       <Dashboard/>

       < NewTransactionModal 
        isOpen={isNewTrasactionModalOpen} 
        onRequestClose={handleCloseTransactionModal}/>

       < GlobalStyle/>
    </TransactionsProvider>
  );
}

