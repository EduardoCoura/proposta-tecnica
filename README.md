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
