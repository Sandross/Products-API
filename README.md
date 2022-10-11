# Products-API
 API for product website, with all standard features
# TrybeSmith

<h1 align="center">Projeto Products Api</h1>
<p align="center">Neste projeto, foi desenvolvida uma API para simular uma loja <strong>Typescript</strong>.</p>

---

<br>

<h2 align="center">📃 Sobre o Projeto</h2>

<p align="center">Foram desenvolvidas todas as camadas da aplicação (Models, Service e Controllers), e por meio desta aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: CRUD.
</p>

<br>

### 🛠 Tecnologias e Bibliotecas utilizadas no desenvolvimento do projeto

- **[Node.js](https://nodejs.org/en/)**

- **[Express](http://expressjs.com/pt-br/)**

- **[Nodemon](https://www.npmjs.com/package/nodemon)**

- **[TypeScript](https://www.typescriptlang.org/pt/)**

  **[MONGODB](https://www.typescriptlang.org/pt/)**
  

---

### 🚀 Como executar o projeto

_Pré-requisitos_

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Mysql](https://www.mysql.com/) para rodar local ou [Docker](https://docs.docker.com/get-docker/) para rodar em container.


É recomendado utilizar algum cliente HTTP, como [Postman](https://www.postman.com/) ou o [Insomnia](https://insomnia.rest/download).

Também é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

---

_1- Clonar o repositorio_

```jsx
git clone git@github.com:Sandrosss/Products-API.git
```

---


<details>
  <summary><strong>:whale: Rodando no Docker</strong></summary><br />
  
  ## Com Docker
 
 
_Rode o serviço `node` com o comando_

```jsx
  docker-compose up -d
```

- Esse serviço irá inicializar dois containers chamados `trybesmith` e outro chamado `trybesmith_db`.
  - A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

_Via CLI use o comando_
```jsx
docker exec -it blogs_api bash
```
- Ele te dará acesso ao terminal interativo do container blogs_api(node) criado pelo compose, que está rodando em segundo plano.

_Instale as dependências `dentro do container` com_

```jsx
npm install
```

⚠️Atenção: Caso opte por utilizar o Docker, TODOS os scripts disponíveis no package.json devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec.
  
  </details>
  
---
  
<details>
  <summary><strong>:computer: Rodando Localmente</strong></summary><br />
 
 _Instale as dependências com o comando_
 
 ```jsx
npm install
```
- Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
  - Recomenda-se a versão `^16`
  
 ⚠️Atenção: Não esqueça de renomear/configurar o arquivo .env example
</details>

---


### 💡 Scripts prontos
<details>
  <summary><strong>Scripts</strong></summary><br />

  - Criar o banco de dados e gerar as tabelas:
  ```sh
    npm run dbcreate
  ```

  - Iniciar o servidor Node:
  ```sh
    npm start
  ```

  - Iniciar o servidor Node com nodemon:
  ```sh
    npm run dev
  ```

  <br />
</details>

---

<details>
  <summary><strong>🎲 Diagrama Entidade Relacionamento do projeto</strong></summary><br />

  O banco de dados do projeto segue a estrutura abaixo:

  <img src="diagram-der.png" width="200px" >
</details>
