import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style'

interface PropsHeader {
    onHandleOpenNewTransactioModal: ()=> void;
}

export function Header({ onHandleOpenNewTransactioModal } : PropsHeader){
     

    return(
        <Container>
            <Content>
            <img src={ logoImg}  alt="dt money" />
            <button type="button" onClick={onHandleOpenNewTransactioModal} >
                Nova Transação
            </button>

           
            </Content>
        </Container>
    )
}