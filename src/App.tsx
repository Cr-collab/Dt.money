import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal'
import { useState } from 'react'
import { GlobalStyle } from './styles/global'

 
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
    <>
       <Header onHandleOpenNewTransactioModal={handleOpenNewTransactioModal}/>
       <Dashboard/>
       < Modal isOpen={isNewTrasactionModalOpen} onRequestClose={handleCloseTransactionModal} >
                <h2> Modal Funcionou </h2>
      </Modal>
      < GlobalStyle/>
    </>
  );
}

