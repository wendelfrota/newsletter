# Newsletter 
### (Em desenvolvimento)

Uma aplicação simples de newsletter criada com **Node.js**, **Express**, e **Sequelize**. Esta aplicação permite a gestão de usuários, escritores e postagens, com persistência de dados usando banco de dados relacional.

---

## Recursos

- **Usuários e Escritores**: Escritores herdam as propriedades de usuários.
- **Postagens**: Cada postagem pertence a um escritor.
- **Banco de Dados Relacional**: Usando Sequelize para abstração do banco de dados.
- **Ambientes de Desenvolvimento e Produção**: Configuração adaptável via `NODE_ENV`.
- **Estrutura Modular**: Código organizado e escalável.

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## Instalação e Configuração

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/wendelfrota/newsletter.git
   cd newsletter
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**

   Utilize o arquivo `configure.sh`, ou crie um arquivo `.env` na raiz do projeto e adicione:

   ```env
   NODE_ENV=development
   DB_HOST=localhost
   DB_USER=seu_usuario
   DB_PASS=sua_senha
   DB_NAME=newsletter
   DB_DIALECT=mysql
   ```

4. **Sincronize o banco de dados:**

   ```bash
   node config/sync.js
   ```

5. **Inicie o servidor:**

   ```bash
   npm start
   ```

---

## Estrutura do Projeto

```plaintext
newsletter/
├── config/
│   ├── database.js      # Configuração do Sequelize
│   └── sync.js          # Script para sincronizar tabelas no banco de dados
├── models/
│   ├── User.js          # Modelo de Usuário
│   ├── Post.js          # Modelo de Postagem
│   └── Writer.js        # Modelo de Escritor
├── routes/
│   └── userRoutes.js    # Arquivo para gerenciar rotas de usuário
├── configure.sh         # Script de configuração de variáveis
├── index.js             # Configuração do servidor Express
├── LICENSE              # Licença do projeto
├── package.json         # Configurações do projeto Node.js
└── README.md            # Arquivo de documentação
```

---

## Contato

Desenvolvido por **Wendel Frota**

Entre em contato pelas seguintes plataformas: [GitHub](https://github.com/wendelfrota) | [LinkedIn](https://www.linkedin.com/in/wendel-frota-11649b279)
