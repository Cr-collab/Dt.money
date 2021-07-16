import {Container} from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
 
export function Sumary(){
    return(
        <Container>
             <div>
                 <header>
                     <p>Entrada</p>
                     <img src={incomeImg} alt="Entrada" />
                 </header>
                 <strong>
                     R$ 1.000
                 </strong>
             </div>
             {/*  */}
             <div>
                 <header>
                     <p>Saida</p>
                     <img src={outcomeImg} alt="Entrada" />
                 </header>
                 <strong>
                     R$ 1.000
                 </strong>
             </div>
             {/*  */}
             <div className="highlight-background">
                 <header>
                     <p>Entrada</p>
                     <img src={totalImg} alt="Entrada" />
                 </header>
                 <strong>
                     R$ 1.000
                 </strong>
             </div>
        </Container>
    )
}