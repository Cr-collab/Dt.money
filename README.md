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










