# Goapp-desafio
Uma aplicação que realiza um CRUD simples de usuários com React Js e React Native.

![goapp-desafio](https://user-images.githubusercontent.com/37816505/153796657-16658ccb-2eaa-4e10-b2e8-7e157cae578f.png)
![go-app-mobile](https://user-images.githubusercontent.com/37816505/153799571-30c2873f-00d0-4a1f-9fcf-25bbef504a26.jpeg)

<!-- 
1. Descrição do projeto
2. Tecnologias utilizadas
3. Organização do projeto
4. Build e deploy
5. Desenvolvimento 
-->


## 1. Descrição do projeto
## 1.1. Tecnologias

Principais tecnologias utilizadas neste projeto são apresentadas na tabela abaixo.

| Tecnologia                               | Descrição                                                                     |
| :--------------------------------------- | :---------------------------------------------------------------------------- |          
| [React JS](https://pt-br.reactjs.org/)    | Biblioteca JavaScript para criar interfaces de usuário.                       |
| [React Native](https://reactnative.dev/)    | Biblioteca JavaScript para criação de aplicações móveis.                       |
| [React Prime](https://www.primefaces.org/primereact/)        | Biblioteca para auxiliar nas criação de componentes de interface.             |
| [Toastify](https://fkhadra.github.io/react-toastify/introduction)| Recurso para auxiliar na demonstração de mensagens para o usuário             |
| [Netlify](https://www.netlify.com/)       | Tecnologia para realizar o deploy da aplicação.                              |
| [Sass](https://sass-lang.com/)  | Pré-processador CSS.                                                                   |


## 1.2. Organização do projeto

O projeto é dividido em Webapp e Mobile app, onde o **WebApp** está organizado como:

     ├── src
        ├── assets
        ├── components
           ├── Logo
           ├── Menu
           ├── ModalDialogDelete
           ├── ModalDialogEdit
           ├── ModalDialogRegister
        ├── pages
           ├── Home
        ├── services
        └── README.md
        
E a segunda parte é o **Mobile app** que está organizado como:

     ├── src
        ├── @types
        ├── assets
        ├── components
           ├── Form
           ├── Logo
           ├── Photo
           ├── UserCard
        ├── global
        ├── hooks
        ├── routes
        ├── screens
           ├── Dash
           ├── Home
           ├── Register
           ├── Splash
           ├── User
        ├── services
        ├── utils
        └── README.md

| Pasta                     | Descrição                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| webapp                    | Contém a aplicação para web.                                                                                                    |
| mobile-app                | Contém a aplicação para dispositivos móveis                                                                                     |

------------------------------------------------------------------------------------------------------------------------------------------------------------
# Webapp
| Pasta                     | Descrição                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| assets                    | Contém os elementos visuais da aplicação, como imagens, etc...                                                                  |
| components                | Contém componentes reutilizáveis ao decorrer da aplicação                                                                       |
| pages                     | Contém as páginas da aplicação                                                                                                  |
| services                  | Contém a comunicação da aplicação com a Api                                                                                     |

------------------------------------------------------------------------------------------------------------------------------------------------------------

| Arquivo                   | Descrição                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Button                    | Botão utilizado na aplicação                                                        |
| ModalDialogDelete         | Contém o modal utilizado para deletar informçaões do usuário.                       |
| ModalDialogEdit           | Contém o modal utilizado para atualizar informçaões do usuário.                     |
| ModalDialogRegister       | Contém o modal utilizado para cadastrar informçaões do usuário.                     |
| Menu                      | Contém o menu da aplicação.                                                         |
| Logo                      | Estilização do logo da aplicação                                                    |
| Home                      | Página inicial onde é listado os usuários e as opções mencionadas na seção 1.3      |

# Mobileapp
| Pasta                     | Descrição                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| @types                    | Contém os elementos de tipagem da aplicação.                                                                                    |
| assets                    | Contém os elementos visuais da aplicação, como imagens, etc...                                                                  |
| components                | Contém componentes reutilizáveis ao decorrer da aplicação.                                                                      |
| global                    | Contém os elementos utilizados globalmente pela aplicação, como a definição de estilos.                                         |
| hooks                     | Contém os hooks da aplicação.                                                                                                   |
| routes                    | Contém as configurações de rotas da aplicação.                                                                                  |
| screens                   | Contém as páginas da aplicação.                                                                                                 |
| services                  | Contém a comunicação da aplicação com a Api.                                                                                    |

------------------------------------------------------------------------------------------------------------------------------------------------------------

| Arquivo                   | Descrição                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------- |
| Forms                     | Contém os componentes de formulário da aplicação                                    |
| Photo                     | Contém o componente para visualizar a foto do usuário.                              |
| UserCard                  | Contém o card utilizado para visualizar informações do usuário.                     |
| Register                  | Contém a página utilizada para cadastrar o usuário.                                 |
| Splash                    | Contém a tela de splash.                                                            |
| Logo                      | Estilização do logo da aplicação                                                    |
| Home                      | Página inicial onde é listado os usuários e as opções mencionadas na seção 1.3      |
| User                      | contém a página com informações do usuário podendo atualizá-lo e excluí-lo.         |
                                                                                            

## 1.3. Específicações sobre as funcionalidades
É possível fazer algumas operações sobre os indexadores, tais como, criar, editar,
excluir, atualizar e filtrar. A seguir veja com mais detalhes cada uma delas.

|Operação     | Descrição
|------------ | -----------------------
| Criar       | É possível criar usuários.
| Editar      | É possível editar usuários
| Excluir     | Os usuários também podem ser apagados de forma permanente.
| Listas      | Listagem de usuários.
  
## 2.  Como executar

# Webapp

Clone o projeto e acesse a pasta **Webapp** onde foi clonado.
Para iniciá-lo usando o **yarn**, siga os passos abaixo:

```
# Instalar as dependências com yarn 
$ yarn
# Iniciar o projeto
$ yarn start
```

Para iniciá-lo usando o **npm**, siga os passos abaixo:

```
# Instalar as dependências com npm 
$ npm install
# Iniciar o projeto
$ npm start
```
Para acessá-lo, basta acessar pelo seu browser pelo endereço http://localhost:3000.

# Mobileapp

Clone o projeto e acesse a pasta **Mobile** onde foi clonado.
Para iniciá-lo usando o **yarn**, siga os passos abaixo:

```
# Instalar as dependências com yarn 
$ yarn
```

Para iniciá-lo usando o **npm**, siga os passos abaixo:

```
# Instalar as dependências com npm 
$ npm install
```

Por fim para executá-lo, rode:
```
expo start
```

## 3. Aplicação - pode ser acessada pelo link: https://goapp-desafio.netlify.app/
