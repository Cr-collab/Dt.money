# Sobre o dt.money 
 ## Tela  Principal.
 ![Captura de tela 2021-07-15 094302](https://user-images.githubusercontent.com/65018066/125789905-c1730dad-7208-402a-8f6b-4d0b83f4a6f1.png)
## Tela de Cadastro de despesas e ganhos.
 ![Captura de tela 2021-07-16 094424](https://user-images.githubusercontent.com/65018066/125790165-cc6449a6-aaf9-42ba-9cf3-ed10696930a9.png)

### Desnselvolveu o template foi o Thiago  Luchtenberg  UI da Rocketseat 
---

O dt.money é um projeto que vai gerir os gastos de uma pessoa baseada na entrada do dinheiro e na saida para ver o patrimonio liquido da pessoa.

* Cadastro de novas transações 
 * no formulario o usario vai ?
   *  Nome da Transação 
   * o Preço da transação 
   * vai poder escolher se a transação
    é uma entrada ou uma saida.
   * escolhera a Categoria da transação  

---   
----------------------------------------------------------------
# Modulo 1
---------------

# 1 Aula : Configurando a estrutura do nosso projeto 
* Vamos utilizar para nossa estrutura o create react app
  *  O que é o create react app ?
      * è basicamente uma estrura pronta do projeto react, para agente se preocupar somente com o código e não  com restante das configuraçãoes do nosso projeto por exemplo o webpack.
      * como criar essa etrurura ?
        *  atráves do terminal pelo comando :`` npx create-react-app {nome do seu projeto }``
* criando a estrutura do dt.money :
  * primeiro passo : `` npx create-react-app dtmoney --template typescript``      
     * por que usar ``--template typescript``:
       * por que por padrão o a criação do nosso template vai ser usando javascript dessa forma deixamos bem claro que estamos querendo utilizar um template typescript.
* Analisando a estrutura de paginas do create react app
  * node_modules
  * public/ > deixar só index.html 
  * src/ 
    * deixar arquivos 
     * App.tsx
     * index.tsx
     * react-app-env.d.ts
       * se agente deletar ele vai criar novamente, ele serve para trazer umas tipagens do javascript .
  * .gitignore
  * package.json
  * Readme.md
  * tsconfig.json
  * npm.lock 
----
  `` por que criar criar com exports e não com exports default ? ``
   por que quando eu uso o export default que difine o nome do componenete não é que ta exportando e sim que ta importando, se usar o export que ta usando aquele componenete por padrão não pode definir um nome.

----

`` Outro ponto importante é que as configurações do webpack e do babel não estão na raiz, essa configuração fica dentro do pacote instalado pelo create react app que se chama react-scripts  por isso se analisar os scripts de colocar em ambiente de desenvolvimento e de produção e de fazer o build da nossa aplicação ele estão chamando react-scripts , toda configuração fica dentro desse carinha ``

---

"se eu executar scripts eject ele vai trazer toda a configuração do nosso projeto para dentro da raiz e ele não tem mais volta, qual desvantagem de ficar atualizando tudo na mão , bem diferente de atualizar o só react-scprit que vai fazer todo trabalho pra gente"

* package.json
 * dividir as dependecies que estão em tudo em lugar
  uma parte para devdependecies.
  
  `` denpedencias que ficaram o resto é tudo  denpedencias de desenvolvimento :       "dependencies": { "react": "^17.0.1","^react-dom": "17.0.1","react-scripts": "4.0.1",  "web-vitals":"^0.2.4"}``

  -----
  # Aula 2 - Exportando assets do Figma
    Vamos baixar os arquivos svg para nossa aplicação ,
    na pasta src vai ficar assim
    * src
     * assets 
        * close.svg
        * income.svg
        * logo.svg
        * outcome.svg
        * total.svg
      nas pasta public vamos adicionar o favincon
      * public 
         * index.html
         * favicon.png

------ 

# Aula 3 - Instalando Styled Components

Uma das estrategias mais utilizadas pelo React JS e React Native e otros frameworkd do fronternd é "css in js".

`` O que é CSS IN JS ?``

Se formaos traduzir para portugues o seignificado é css dentro do javascript.

--------------------------------
Inicialmente vamos comparar o modo como fazemos no css para depois fazer a comparação com css in js.
  * inicialmente criamos arquivo css no assets 
    * fazemos nossa estilização 
    * depois importamos no arquivo js 
    * adicionamos a nossa estilização atráves de seltores  no nosso componente
---
* Primiro passo instalar uma blibioteca de css in js que é Styled-Components umas das mais utilizadas para essa estrategia.
   * comando para instalar Styled-Components :
      * ``npm add styled-components ``
      * depois importamos no arquivo js o nosso styled components   `` import styled from styled-components ``
      * após o import perceberemos que a nossa importação esta dando erro, por que ?
        * porque o arquivo principal do styled components  esta separado do seu arquivo de tipagem typescript.
        * instalar arquivo de tipagem typescript.
         * comando : `` npm add @types/style-components ``
         * prontinho erro arumado.
   *    vamos criar um components estilizado :
      * `` const Title  =  styled.h1` color: #red ` ``
      * agora para aplicar o nosso style fazemos isso :
      * `` < Title> Hello World </Title>``
   * `` Vantagens do Styled Components é que ele suporta encadeamento de estilos , Estilazação por escopo em tão não razão para um css sobrescrever o outro  `` 
   * CSS Scoped- a classes css do nosso são gerados diferente para não sobescrever as outras.  
   ----------------------------------------------------------------
   # Aula 4 - Criando stilos Globais 


  Vamos aprender como criar estilização globais com styled components , então vamos criar estilização de fonts , background,são coisas que não são de um components especifico mais de toda aplicação e agente chama isso de estilos globais.
  
 * colocar o favicom na nossa pagina html , pagina html esta na pasta public.
    * ``<link rel="shortcut icon" href="favicon.png" type="image/png">``
 * vamos criar a nossos estilos globais, vamos fazer passo a passo:
   * primeiro vamos na pasta ``src``   e dentro dela  criar a pasta ``styles`` e dentro dele ``global.ts``  
    * dento de global.ts vamos codar nosso estilo global:
     * vamos importar de dentro styled components a função `` createGlobalStyle ``:
       * codigo completo de importação : `` import { createGlobalStyle } from 'styled-components'  ``
     *  vamos criar uma variavel ``GlobalStyle`` com letra maiscula porque futuramente essa variavel vai ser convertido para componente react. depois disso colocamos o operador de atribuição e isso chamamos a função importada de style-components que no caso é o `` createGlobalStyle ``  e encostado nessa função declaramos um template string.
     codigo resultado dessas ações:
      `` import { createGlobalStyle } from 'styled-components'   const GlobalStyle =  createGlobalStyle` #aqui{ vem : codigo css } `  ``
     * Vamos da um export antes da nossa variavel GlobalStyle para que tenhamos acesso a ela depois,  codigo resultado dessas ações: `` import { createGlobalStyle } from 'styled-components'  export  const GlobalStyle =  createGlobalStyle` #aqui{ vem : codigo css } `  ``

     * estilização globa dentro da variavel `` GlobalStyle `` os codigo css:
     `` :root { --background: #f0f2f5 } * { margin: 0; padding:0; box-sizing: border-box; } body{ background: var(--background); --webkit-font-smoothing: antialiased; }   ``
         * --webkit-font-smoothing: antialiased -> Vai deixar a fontes mais nitidas no navegadores que usam engine do chrome por debaixo dos panos.
         * Configurar o Tamnho de font da nossa aplicação.
            * por padrão  o tamanho de fonte da nossa aplicação e de 16px o tamanho ideal para desktop.
            * na tag html vamos adicionar uma estilização :
             `` @media (max-width: 1000px) { font-size: 93.75% } ``
               * font-size: 93.75% isso aqui vai dar 15px é so fazer calculo baseado no valor padrão `` 16 * 0,9375``
            `` @media (max-width: 720px) { font-size: 87.5% } ``  
               * font-size: 87.5% isso aqui vai dar 14px é so fazer calculo baseado no valor padrão `` 16 * 0,875``
             *  por que diminuir a fonte ?
                *  primeiro obviamente em dispositivos menores a fonte tem que ser menor.
                *  segundo vamos utilizar uma medida do css chamada REM . 
                   * o que REM ?
                      * 1 rem igual ao tamanho do font-size da nossa pagina, ou seja dependendo do tamanho da tela ele vai se adaptar ajudando na adaptabilidade da nossa aplicação.
                * terceiro ponto.
                   * por que utilizar porcentual e não pixels?
                     *  caso o  usuario   esteja com a configuração de aumentar a fonte, ou percentual vai  aumentar dependo da configuração do usuario. 
             * Configuração do button:
               `` button{ cursor: pointer; } ``
             * tags disabiltadas:
               * `` [disabled]{ opacity: 0.6; cursor: not-allowes; } ``  
                 * cursor: not-allowes; -> o button vai ficar com a plaquinha de não fume;
             * adicionando variavel de cor no root:
               * `` :root { --background: #f8f2f5; --red: #E52E4D; --blue: #5429CC;  --blue-light: #6933FF; --text-title: #363F5F; --text-body: #969CB3; --shape: #FFFFFF;} ``    
         --------------------------------
         * utilizando o GlobalStyle :
           * vamos no arquivo App.tsx:
            `` import { GlobalStyle } from './styles/global';  export function App(){ return ( <div> <h1> Hello World </h1> < GlobalStyke/>// assim que importa o style components criado </div> )}``
----------------------------------------------------------------
# Aula 5  - Fontes do Google Fonts
----------------------------------------------------------------
Vamos configurar uma Fonte customizada no nosso projetos:
fontes disponivel no goohle fonts >  
Fonte poppins regular 400 e Semi-bold 600 :

<link rel="preconnect" href="https://fonts.googleapis.com"> 
`` adicionar bem no inicio  por que ? vai abri uma conexão com cdn da google que entrega  os arquivos da fontes para gente , ele vai deixar essa conecxão pré aberta par ser muito mais rapido,
vai ser excutado antes de tudo    ``
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet"> ``    

vamo  no arquivo global do css adicionamos um novos estilos globais:
 ``` body, button , textarea, input { font-family: Poppins, sans-serif; font-weight: 400; } ``
 `` h1,h2,h3,h4,h5, strong { font-weight: 600; } ``
 * por que eu não coloquei só no body ? 
   *por que por padrão o utton , textarea, input eles não importão o estilo do body 
   eles tem sua propria fonte dessa forma eu sobescrevo todos eles.


----
----------------------------------------------------------------
# Modulo 2
----------------------------------------------------------------

## Aula 1 -  Componente Header
----------------------------------------------------------------
Vamos começar  a  criar  nosso components , passo a passo:
 * Primerio passo cria na pasta `` src `` ourta pasta dentro dela que é a pasta `` components ``.
    * e dEntro da pasta `` components `` vamos criar uma pasta ``Header``
       * Dentro de `` Header `` vamos criar um arquivo `` index.tsx``
          * dentro do arquivo `` index.tsx``, codigo  abaixo:
          ~~~javascript
          import logoImg from '../../../assets/logo.svg'
          import {Container} from './styles'
          
           export function Header(){
              return (
                <Container>
                  <Content>
                    <img src-"{logoImg}" alt="dt money" >
                    <button>
                      Nova Transação 
                    </button>
                  </Content>
                <Container/>
              )
            }
          ~~~

          * vamos ao arquivo ``App.tsx``, e vamos importar nosso header:

          ~~~javascript
           import {Header , Content} from "./components/Header";
           import { Global } from "./styles/global";

           export function App(){
              return (
                <>
                      /* vou utilizar o tag fragment que é uma tag sem conteudo, por 
                      que se deixarmos uma div poder atrapalhar nosso layout  */
                 <Header />
                 <GlobalStyle/> //Meu estilo de css global 
                   
                </>
              )
            }
          ~~~

       *  Dentro do `` Header `` vamos criar um arquivo `` styles.ts``
      ~~~javascript

          /*  por que não estamos utilizando styled-components dentro do arquivo index.tsx ?
               por que nossos estilos ficar muito grande e como queremos deixar a nossa aplicação organizada e de facil manutenção essa m,elhor forma 
          */
         import styled from "styled-components"

         export const Container = styled.header`
              background: var(--blue)

         `

        export const Container = styled.div`
         
           max-width: 1120px;
           /* vamos colocar um largura maxima para termos espaço para centralizalo*/ 
           margin: 0 auto;

           padding: 2rem 1rem 12rem;

           display: flex;
           align-center: center;
           justify-content : space-between;


           button{
               font-size: 1rem;
               color: #FFF;
               background: var(--blue-light);
               border: 0;
               padding: 0 2rem;
               border-radius: 0.25rem;
               height: 3rem;

               transition: filter 0.

                &:hover {
                filter: brigthness(0.9);
           }

           }
           
                   
        `
      ~~~
----------------------
# Aula 2 -  Componente Sumary

* Na pasta ``components`` .
   * Criar pasta ``Dashboard``
       * Criar `` index.tsx ``
        ~~~ javascript
         import { Container } from './styles'
         import {Sumary} from '../Sumary'
           export function Dashboard()
             { 
                return(
                     <Container>
                     </Sumary>
                     </Container>
                ) 
             }
        ~~~
      * Criar `` style.ts``
        ~~~ javascript
           import styled from 'styled-components'
           export const Container =  styled.main`
                max-width: 1120px;
                margin: 0 auto;
                padding: 2.5rem , 1rem;

           `
        ~~~
       
------------------------------------------------------------------------------

* Na pasta ``components`` .
   * Criar pasta ``Sumary``
      * Criar `` index.tsx ``
         ~~~ javascript
          import { Container } from './styles';
          import incomeImg from '../../assets/income.svg'
          import outcomeImg from '../../assets/outcome.svg'
          import totalImg from '../../assets/total.svg'

          export function Sumary (){
            return (

                <Container>
                    <div>
                       <header>  
                           <p>Entradas</p>
                          <img src={incomeImg} alt="Entradas">
                     </header>
                     <strong>R$ 1.000</strong>
                    </div>

                    <!--  -->

                    <div>
                       <header>  
                           <p>Saidas</p>
                          <img src={incomeImg} alt="Saidas">
                     </header>
                     <strong>R$ 500</strong>
                    </div>

                    <!--  -->

                    <div className="highlight-background">
                       <header>  
                           <p>Total</p>
                          <img src={totalImg} alt="Total">
                     </header>
                     <strong>R$ 500</strong>
                    </div>

                </Container>

            )
          }
        ~~~
      * Criar `` style.ts``
         ~~~ javascript
         import styled from ' styled-components';

         export const Container = styled.div`
         display:grid;
         grid-template-colluns: repeat(3 1fr);
         gap: 2rem;
         margin: -10px;

         div { 
           background: var(--shape);
           padding: 1.5rem 2rem;
           border-radius: 0.25rem;
           color: var(--text-title);

                header { 

                display: flex;
                align-itens: center;
                justify-content: space-between;
                       }

                       strong { 
                         display: block;
                         margin-top: 1rem;
                         font-weight: 500;
                         font-size: 2rem;
                         line-height: 3rem;
                       }

                       &.highlight-background {
                         background: var(--green);
                         color: #FFF;
                       }
         }

       

         `
          
         ~~~

--------- -----------------------
 * App.tsx
   ~~~ javascript
    
    import { Header } from './components/Header'
    import { GlobalStyle } from './styles/global'
    import { Sumary } from './components/Sumary'

    export function App(){
      return (
        <>
           <Header/>
           <Dashboard/>
           <GlobalStyle/>
        </>
      )
    }
 
   ~~~       


   ----------
   # aula 3  -   Componente: TransactionsTable

   * Criar pasta TransactionTable.tsx
      * index.tsx
           ~~~ javascript
           import { Container } from "./style";

          export function TransactionTable(){

              return (
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
           ~~~
      * styles.ts
          ~~~ javascript
          import styled from 'styled-components';

              export  const Container = styled.div`
                      margin-top: 4rem;

                      table{ 
                          width: 100%;
                          border-spacing: 0 0.5rem ;

                          th{ 
                              color: var(--text-body);
                              font-weight :  400;
                              padding: 1rem 2rem;
                              text-align: left;
                              line-height: 1.5rem;
                          }

                          td{ 
                              padding: 1rem 2rem;
                              border: 0;
                              background: var(--shape);
                              color: var(--text-body);
                              border-radius: 0.25rem;

                              &:first-child{
                                  color: var(--text-title); 
                              }

                              &.deposit{
                                  color: var(--green);
                              }

                              &.withdraw {
                                  color: var(--red);
                              }
                          }
                        
                      }

              `
                        
         ~~~

-------------------------------------------
    # Criando front-end sem back-end
                              Agora que agente terminou  uma boa parte visual da nossa aplicação a gente teria que fazer ela funcionar realmente os dados virem de alguma API de um banco de dados eu consegui cadastrar novas transações e essas transações ficarem persistidas para a gente conseguir ter acesso a ela depois, ou seja, a gente precisa realmente fazer aplicação realmente funcionar. Nesse momento a gente vai fazer a conexão com  back-end da nossa aplicação.
                        então na maioria das vezes a gente vai ter um back-end uma API REST ou API  graphql  que vai servir dados para  o nosso front-end vai então listar esse dados, cadastrar novos dados na API e tudo mais .
                        Nessa aplicação exatamente em trabalhar como  não tendo back-end pronto.
                        Isso acontece muito no  ambiente de trabalho.
                        Um exemplo temos dois times um trabalhando com front-end e outro com back end. pode acontecer de o front-end Ter entregue uma featured ,   o back end ainda não ter entregue a
                        api para fazer os testes no front-end.
                        Então não é recomendável deixarmos o  Front-end  estático  porque consumir uma aí   API
                        é totalmente diferente então é melhor deixar preparado com uma ferramenta que simula uma api. 

                        JSON SERVER  
                                  O que o JSON SERVER FAZ ?
                                          o  json server faz basicamente  permite que ao gente criar um arquivo json com  uma estrutura de um objeto cada chave  do objeto ele vai coverter em uma rota da nossa aplicação então como a posts é uma propriedade que armazena um  array,  ele vai entender automaticamente que essa propriedade aqui armazena um array de posts e vai criar pra gente todo  um crud  , vai criar uma estrutura para agente criar um novo post e deletar , e atualizar, listar.        
                        Mirage 
                                    Tem mais funcionalidades.

 -------------------------   
  
 #  Configurando MirageJS
 -----------


  forma que fizemos no capitulo 1 

        * fazendo o fetch da nossa API.
         --------------------------------

              ~~~javascript
                                  
                  export function TransactionTable(){

                      useEffect(()=>{
                            fetch('http://localhost:3000/api/transaction')
                            .then(response => response.json())
                            .then(data => {console.log(data)})
                            
                      }, [])
              ~~~
        
* por enquanto não esta retornadno nada vamos fazer o que  ? 
    *  * instalar mirage js ```npm add miragejs `` 
      * Configurando nosso server com miragejs, no index.tsx de renderização
         ~~~~javascript 
             import React from 'react';
             import ReactDOM from 'react-dom';
             import { createServer } from 'miragejs'

                          

              createServer({
                routes(){
                  this.namespace = 'api'; // aqui vai inteceptar a rota que tiver api na sua url 

                  this.get('/transaction', ()=>{// caso faça uma requisiçao get eu to reornando um array de objetos
                    return [
                      {
                        id: 1,
                        title: 'Transaction1',
                        amount: 400,
                        type: 'deposit',
                        category: 'Food',
                        createsAt: new Date()


                      }

                    ]
                  })
                }
              })
              
         ~~~~ 
  ----------------------
# Configurando Cliente HTTPS  para agente não utilizar o fetch que api nativa 

* por que não utilzar o fetch ?
  * Primreio por que o fetch tem que colocar todo endereco em cad requisição que fizermos  
  * trasformar a nossa requisoção em json toda vez que agente faz uma requisição 
*por que utilizar a blibioteca de requisição AXIOS ?
   agente consegue interceptar requisição e resposta para nossa api.
   ou seja eu consigo adicionar uma regra no axios que cada requisção que eu envie para o nosso back-end eu consiga interceptar antes de chegar no backend e mudar algun dado, enviar algun token de autenticação  para enviar alguma informação que eu tenha aqui na minha aplicação e também nas respostas interceptar todas respostas que chegam na minha aplicação, para fazer tratamentos de erros.

   * instalar o AXIOS : `` npm add axios `` 
    * criar pasta para axios vai se  chamar ``services``
      * criar dentro de `` services `` o arquivo ``api.ts``
      * ~~~~javascript
            import axios from "axios"

            export const api = axios.create(
              // criar algumas informção padrões que vão ser igual para toda nossas requisiçãoe 
              baseURL: 'http://localhost:3000/api'
            )
        ~~~~ 

         * fazendo o requisição  da nossa API com axios.
         --------------------------------

    ~~~javascript                      
                  export function TransactionTable(){
                    useEffect(()=>{

                      api.get(('/transaction')=>{
                            .then(data => {console.log(data);   
                      }, [])
    ~~~ 
                    }, [])
 -----------------------------------------
  # Aula Configurando Modal de criação 
  -----------------------------------------
    O que agente vai fazer nessa aula é começar configurar o nosso modal  para cadastrar uma nova transação, e para configurar esse modal agente vai usar uma biblioteca externa chamada  React-Modal, e qual é a vantagem de utilizar uma biblioteca externa para nosso modal?  
  È por que já tem algumas funcionalidades prontas, por exemplo ao apertar a tecla esc a modal fecha , ou a clickar na parte escura da modal ela fechar, são varias funcionalidades que agente tentasse reproduzir levaria um tempo, como ja vem pronto é bem melhor para nossa produtividade.

  Passo a passo para criar nossa react-modal?
  Instalando a biblioteca: 
  Comando para instalação via terminal:  ``npm add react-modal``   
  Vamos criar nossa modal onde abriremos ela no caso o botão esta no header.
  ~~~javascript
            import logoImg from '../../../assets/logo.svg'
            import {Container} from './styles'
            import Modal from 'react-modal'; 
            /* como ja criamos nosso estado e nossa funções que vão setar o estado dependendo de qu querer fechar o meu modal ou não esta na hora de importar a nossa modal
            vai dar um erro de tipagem com typescript 
            é so instalar a npm add @types/react-modal  -D
              
            */

            
            export function Header(){
                const    [isNewTrasactionModalOpen,setIsNewTrasactionModalOpen] = useState(false);
                /// Aqui vai gardar o valor do nosso modal se ele esta aberto ou fechado 

                function handleOpenNewTransactionModal (){
                  setIsNewTransactionModalOpen(true);
                }
                function handleCloseTransactionModal (){
                  setIsNewTransactionModal(false)
                }

                // um partner que eu uso é caso uma função que vais ser chamda dependendo de uma ação ele vai começar com handle -> que significa lidar com ;


                return (
                  <Container>
                    <Content>
                      <img src={logoImg} alt="dt money" >
                      <button onClick={handleOpenNewTransactioModal} /* a primeira vez que eu clickar eu tenho que abria a modal por que por padrão ela esta fechada */>
                        Nova Transação 
                      </button>
                      <Modal isOpen={isNewTrasactionModalOpen}  onRequestClose={handleCloseTransactionModal}>
                      {/* se eu testar na aplicação , vai abrir o modal mais não vai fechar ,
                      para fechar precisaremos passar para nosso modal a propriedade onRequestClose
                      passando nossa função  */}
                          <h2> Cadastrar Nova transação  </h2>
                      </Modal>
                      {/* O modal pode ir em qualque lugar */}
                    </Content>
                  <Container/>
                )
              }
     { /*  
         será que o modal ele deveria esta no header?
         Assim como modal ele ocupa a pagina toda concerteza não o modal é outro componente ,
         ele deveria ficar na pagina principal.

         O que agente pode fazer nesses caso ? 
         o repasse de propriedades para nosso components, vou fazer o modal fazer parte da nossa aplicação e não do cabeçalho em si. 
         no caso o header é só responsavel  por abrir o modal. 
         o modal não faz parte do nosso conteudo do nosso Header ,  o que agentre vai fazer a gente vai migrar o nosso modal para dentro da nosso arquivo app onde centraliza os nossos components en cima do globalstyle 
      **/ }     
   ~~~

 
      --------------
      # Componente: NewTransactionModal
      --------------------------------
Nessa aula vamos trabalhar na estrutura do nosso modal , para não acabar ficando muito conteudo dentro do nosso proprio app vamos criar um componente para nosso modal.
* vamos criar uma pasta NewTransactionModal 
* vamos criar um arquivo index.tsx
~~~javascript 
import Modal from 'react-modal'
      interface NewTransactionModalProps {
        isOpen: boolean;
        onrequestClose: ()=> void;
      }

export function NewTransactionModal({isOpen , onRequestClose} = NewTransactionModalProps){
  return (
                  <Modal isOpen={isOpen}  onRequestClose={onRequestClose}>
                      {/* se eu testar na aplicação , vai abrir o modal mais não vai fechar ,
                      para fechar precisaremos passar para nosso modal a propriedade onRequestClose
                      passando nossa função  */}
                          <h2> Cadastrar Nova transação  </h2>
                      </Modal>
                      {/* O modal pode ir em qualque lugar */}
   
  )
}
~~~

* vamos criar um arquivo style.ts
~~~javascript

import styled from 'styled-components'

export const Container = styled.div`
`
{/*
   Um conceito que vamos uilizar muito é o conceito de deixar algumas informção que seream compartilhas com mais com componentes em componente que esta acima dos demais. como do modal e do header , que precisam das mesmas informações.
*/}
~~~
----------------------------------------------------------------
   --------------
      # Estrutura do formulário
      --------------------------------
Nessa aula vamos trabalhar na estrutura do Html do nosso Formulario .
*  NewTransactionModal 
* index.tsx
~~~javascript 
import Modal from 'react-modal'
      interface NewTransactionModalProps {
        isOpen: boolean;
        onrequestClose: ()=> void;
      }

export function NewTransactionModal({isOpen , onRequestClose} = NewTransactionModalProps){
  return (
                  <Modal isOpen={isOpen}  onRequestClose={onRequestClose} overlayClassName="react-modal-overlay"  {/* a propriedade do lado esquerdo ela atribui uma nova classe para overlay da nossa classe */ } className="react-modal-content" {/* a propriedade do lado esquerdo ela atribui uma nova formatação de estilo para conteudo da nossa modal que vamos passar esse estilo no nosso arquivo global*/} > 

                     <Container> {/* Aqui no nosso container vamos ter nosso form assim matando dois coelhos com uma cajadada só  */}

                          <h2> Cadastrar Nova transação  </h2>
                          <input placeholder="Titulo">
                          <input type="number" placeholder="Valor">
                          <input placeholder="Categoria">

                          <button type="submit">
                               Cadastrar
                          </button>
                     </Container>
                 </Modal>
                 
   
  )
}
~~~

*  style.ts
~~~javascript

import styled from 'styled-components'

export const Container = styled.form`
  


`

~~~


### Estilazação Global para nosso modal 
------------
~~~~javascript 
 
  import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

.react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-itens: center;
    justify-content: center;


}

.react-modal-content{

   width: 100%;
   max-width: 576px;
   padding: 3rem;
   position: relative;
   border-radius: 0.24rem;

}


`

~~~~


----------------------------------------------------------------
# Estilizando Modal 
______________


*  style.ts
~~~javascript

import styled from 'styled-components'

export const Container = styled.form`
  
h2 {  
  color : var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

input { 
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border:  1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      margin-top: 1rem;
    }

    & + input {
      margin-top: 1rem;
    }
}

button[type="submit"] { 

  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background: var(--green);
  color: #FFF;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  font-weight: 600;
  transition: filter 0.2s;

  &:hover{
    filter: brigthness(0.9);
  }

}

`

~~~

----------------------------------------------------------------
Criando botões de Tipo
----------------------------------------------------------------

* index.tsx
   ~~~javascript 
      
      <TransactionTypeContainer>
              <button type="button">
                  <img src={incomeImg} alt="Entrada">
                  <span> Entrada </span>
              <button/>

               <button type="button">
                  <img src={outcomeImg} alt="Saida">
                  <span> Saida </span>
              <button/>
      <TransactionTypeContainer/>

   ~~~

* style.ts
 ~~~javascript
 
    export const TransactionTypeTable = styled.div`
     margin: 1rem 0;
     display:grid;
     grid-template-colluns: 1fr 1fr;
     gap : 0.5rem;

     button{ 
       height: 4rem;
       border: 1px solid #d7d7d7;
       border-radius: 0.25rem;
       ]
       background : transparent;
       display: flex;
       align-itens: center;
       justify-content: center;

       &:hover{
         border-color: #aaa;
       }

       img {
         width: 20px;
         height: 20px;
       }

       span{ 
         display: inline-block;
         margin-left: 1rem;
         font-size: 1rem;
         color: var(--text-title);
       }

     }
    `
       

    `
 ~~~   
---------------
# Funcionamento dos Botões
---------------
O que agente vai fazer nessa aula é dar funcionalidades para botão de tipos de entrada e saida,
então quando eu clickar neles quero que mantenha a informação de qual eu clikei e deixar uma cor de fundo para usuario saber qual doi selecionado.

*  NewTransactionModal 
* index.tsx
~~~javascript 
import Modal from 'react-modal'
      interface NewTransactionModalProps {
        isOpen: boolean;
        onrequestClose: ()=> void;
      }

export function NewTransactionModal({isOpen , onRequestClose} = NewTransactionModalProps){
    const [type . setType] = useState('deposit')
    /* vamos criar  um estado para armaxenar  o tipo da transaction se é uma entrada ou uma saida */
  return (
                  <Modal isOpen={isOpen}  onRequestClose={onRequestClose} overlayClassName="react-modal-overlay"  {/* a propriedade do lado esquerdo ela atribui uma nova classe para overlay da nossa classe */ } className="react-modal-content" {/* a propriedade do lado esquerdo ela atribui uma nova formatação de estilo para conteudo da nossa modal que vamos passar esse estilo no nosso arquivo global*/} > 

                     <Container> {/* Aqui no nosso container vamos ter nosso form assim matando dois coelhos com uma cajadada só  */}

                          <h2> Cadastrar Nova transação  </h2>
                          <input placeholder="Titulo">
                             
                        <TransactionTypeContainer>
                            <RadioBox type="button" 
                             onClick={()=>{ setType('deposit') }}
                             isActive={type === 'deposit'}
                            >
                                <img src={incomeImg} alt="Entrada">
                                <span> Entrada </span>
                            <RadioBox/>

                            <RadioBox type="button" 
                            onClick={()=>{ setType('withdraw') }}
                            isActive={type === 'withdraw'}>
                                <img src={outcomeImg} alt="Saida">
                                <span> Saida </span>
                            <RadioBox/>
                         <TransactionTypeContainer/>

                          <input type="number" placeholder="Valor">
                          <input placeholder="Categoria">

                          <button type="submit">
                               Cadastrar
                          </button>
                     </Container>
                 </Modal>
                 
   
  )
}
~~~



                  

  





           



     
      













