# 🧠 Sistema de Gestão para Psicólogos

Um sistema desenvolvido em **Node.js + TypeScript** para apoiar psicólogos na **gestão de atendimentos**, incluindo **cadastro de pacientes, agenda, sessões **, com autenticação de usuários e persistência em banco de dados via **Prisma + PostgreSQL**.

---

## 🚀 Tecnologias Utilizadas

- Node.js + Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT (autenticação)
- Zod (validação de dados)
- Jest (testes automatizados)

---

## 📂 Estrutura de Pastas

- **src/database** → Configuração do Prisma
- **src/modules** → Domínios do sistema
  - appointments
  - auth
  - patient
  - psychologist
  - session
- **src/shared** → Recursos compartilhados
  - middlewares
  - routes
  - utils

---

## ⚙️ Instalação e Configuração

1. Clone o repositório
2. Instale as dependências com `yarn install`
3. Configure o arquivo `.env` com:
   - `DATABASE_URL="postgresql://user:password@localhost:5432/sistema_psicologos"`
   - `JWT_SECRET="sua_chave_secreta"`
4. Rode as migrations do Prisma com `yarn prisma migrate dev --name init`

---

## ▶️ Executando o Projeto

- **Ambiente de desenvolvimento**: `yarn dev`
- **Produção**: `yarn build` seguido de `yarn start`

---

## 📡 Exemplos de Endpoints

### Cadastro de Paciente

**POST /patients**  
Body:

- name
- email
- birth
- phone

### Criar Sessão

**POST /sessions**  
Headers: Authorization Bearer Token  
Body:

- sessionDate
- patientId
- psychologistId
- summary

### Listar Agenda

**GET /appointments**  
Headers: Authorization Bearer Token

---

## 🧪 Testes

- Rodar todos os testes: `yarn test`
- Rodar com coverage: `yarn test --coverage`

---

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`feature/minha-feature`)
3. Commit suas alterações
4. Faça push para sua branch
5. Abra um Pull Request 🚀

---

## 📄 Licença

Este projeto está sob a licença **MIT**.  
Sinta-se livre para usar, modificar e compartilhar.
