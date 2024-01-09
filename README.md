# Encontre seu candidato!

Essa aplicação implementa um sistema de cadastro de candidatos e possibilita encontrar o mais apto por meio de suas habilidades

### Tecnologias utilizadas

- Typescript
- Next.js
  - React
  - Tailwind
  - React-icons
  - Axios
- Node.js
  - Express
  - Prisma
  - Zod
  - Cors
  - Nodemon
  - Ts-node
  - Jest
- MySQL
- NPM
- Docker
- Docker-compose

## Como executar

### Pré requisitos

- [Docker](https://www.docker.com/)
- [Docker-compose](https://docs.docker.com/compose/)

### Execução

Primeiramente será necessário executar o `docker-compose`, dessa forma será executado os serviços necessários para o projeto, sendo eles o serviço do `back`, `front` e `database`.

    docker-compose up -d

Em seguida será possível você acessar a aplicação diretamente pelo seu navegador [Clicando Aqui](http://localhost:3000/).

## API

### Request

`GET /candidates/search?javascript,express,mongodb`

Encontra e retorna o candidato que possui a maioria das habilidades do conjunto fornecido (separadas por vírgulas). Se um candidato possuir todas as habilidades listadas (3 de 3) ou tiver mais do que os outros candidatos, ele é considerado o melhor e é retornado.

Response:

```json
{
  "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
  "name": "John Coder",
  "skills": ["javascript", "es6", "nodejs", "express"]
}
```

**Importante:** Se a solicitação for inválida (não tiver ?skills=...), o código de status 400 (Bad Request) é retornado.

---

`POST /candidates`

Adiciona um candidato ao banco de dados.

Request:

```json
{
  "name": "Jimmy Coder",
  "skills": ["javascript", "es6", "nodejs", "express"]
}
```

Response:

```json
{
  "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
  "name": "Jimmy Coder",
  "skills": ["javascript", "es6", "nodejs", "express"]
}
```

**Importante:** Se a solicitação for inválida (não tiver corpo), o código de status 400 (Bad Request) é retornado.
