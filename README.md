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
          











