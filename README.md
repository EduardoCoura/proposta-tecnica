# Proposta Técnica - Backend API (Users & Auth)

API RESTful desenvolvida em Node.js com TypeScript, focada em operações CRUD de usuários e autenticação JWT segura.

## 🚀 Tecnologias

- **Node.js** & **TypeScript**
- **Express** (Framework Web)
- **Prisma ORM** (Banco de dados e Migrations)
- **SQLite** (Banco de dados local)
- **JWT (JsonWebToken)** (Autenticação)
- **Bcryptjs** (Hashing de senhas)

## ⚙️ Pré-requisitos

Antes de começar, você precisa ter instalado:
- [Node.js](https://nodejs.org/) (v18 ou superior)
- NPM (Gerenciador de pacotes)

## 🔧 Instalação e Configuração

1. **Clone o repositório** (ou baixe o código fonte):
   ```bash
   git clone <SEU_LINK_DO_REPO_AQUI>
   cd <NOME_DA_PASTA>

2. **Instale as dependências**
    ```bash
    npm install

3. **Configure as Variáveis de Ambiente: Crie um arquivo chamado .env na raiz do projeto e adicione o seguinte conteúdo**

    DATABASE_URL="file:./dev.db"
    JWT_SECRET="sua_chave_secreta_aqui"

4. **Crie as tabelas no Banco de Dados: Execute a migration do Prisma**
    ```bash
    npx prisma migrate dev --name init

⚡ Como Rodar o Projeto
Para iniciar o servidor em modo de desenvolvimento:
    ```bash
    npm run dev
O servidor iniciará na porta 3333.
Endereço base: http://localhost:3333

📍 Documentação das Rotas
🔐 Autenticação
Método,Rota,Descrição
POST,/auth/login,Recebe email/senha e retorna o Token JWT.

👤 Usuários
Atenção: Com exceção da criação (POST), todas as rotas abaixo exigem o cabeçalho de autorização: Authorization: Bearer <SEU_TOKEN_AQUI>
    Método,Rota,Descrição
    POST,/users,Cria um novo usuário (Público).
    GET,/users,Lista usuários. Suporta paginação: ?page=1&limit=10.
    GET,/users/:id,Busca os dados de um usuário pelo ID.
    PUT,/users/:id,Atualiza o nome e/ou email do usuário.
    PATCH,/users/:id/password,Atualiza apenas a senha do usuário.
    DELETE,/users/:id,Remove o usuário do banco de dados.

🧪 Como Testar (Passo a Passo)
Criar Conta: Envie um POST para /users com name, email e password.
Login: Envie um POST para /auth/login. Copie o token retornado.
Acessar Rotas: Nas próximas requisições, adicione o Token no Header da requisição (Authorization).

Desenvolvido como parte da Avaliação Técnica Backend.