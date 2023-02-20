  ##                      ##
###### *CURSO JS UDEMY* ######
  ##                      ##

###### *SESSAO 1*             #####
###### *COMANDOS DO TERMINAL* #####
######                        #####

  #### **TEMPLATE**
      npm comand

  ##
  ##
  ###### **INICIANDO NPM NO REPOSITÓRIO**
      npm init -y

  ##
  ##
  #### **LE O ARQUIVO "package.json" E INSTALA TODAS AS DEPENDENCIAS DO PROJETO**
      npm install / - npm i

  ##
  ##
  #### **INSTALAÇÃO BABEL** 
      npm install --save-dev @babel/cli @babel/core @babel/preset-env

  ##
  ##    
  #### **INSTALANDO WEBPACK COM BABEL (LER SESSAO 2)**
      npm install --save-dev @babel/cli @babel/core @babel/preset-env babel-loader webpack webpack-cli regenerator-runtime core-js@2

###### *SESSAO 2*             #####
###### *CONFIGURANDO WEBPACK* #####
######                        #####

  #### **CRIAR ARQUIVO DE CONFIGURAÇÃO NA RAIZ**
      ../webpack.config.js

###### *SESSAO 3*             #####
###### *EJS SINTAXE*          #####
######                        #####

  #### **<% %> | Controle de Fluxo**
      <% if(...), for(...), array.forEach(...) %>

  #### **<%= %> | Imprime conteúdo (escapa caracteres, não reconhece HTML)**
      <%= titulo %> saída: <h1>Titulo</h1>
  #### **<%- %> | Imprime conteúdo (não escapa caracteres, reconhece HTML)**
      <%- titulo %> saída: Titulo

  #### **<%# %> | Comentários**
      <%# Algum comentário %>

  #### **<%- %> | includes**
      <%- include('CAMINHO/ARQUIVO') %>


  

