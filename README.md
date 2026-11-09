# ReMatrícula

Sistema web para **controle de rematrícula de alunos de uma escola de idiomas**.
Frontend desenvolvido em React como Fase 1 do projeto da disciplina "Criar Serviços WEB com REST".

## Integrantes
- Walter Luan Lima da Silva
- Pedro Henrique Rodrigues
- Ramon Trindade Camelo
- Thayslan da Costa
- João Vitor Vicente de Queiroz

## Descrição da ideia
Modernização de um sistema legado de acompanhamento de rematrícula. O sistema permite
visualizar estatísticas da campanha, listar e cadastrar alunos e turmas, acompanhar o
status de cada aluno (Não Contatado, Contatado, Rematriculado, Não Volta) e ver um
relatório por turma. Nesta fase, os dados são mockados em memória (sem backend).

## Tecnologias
- React (create-react-app), componentes funcionais e Hooks (useState, useEffect, useContext)
- React Router DOM v6 (rotas básicas, rota dinâmica e rota protegida)
- Context API (tema claro/escuro e autenticação)
- CSS3 puro: variáveis CSS, Flexbox, Grid, responsividade mobile-first, dark/light mode, metodologia BEM
- Fonte Inter (Google Fonts)

## Telas
- **Login** (`/login`): acesso mockado. Credencial de teste: `professor@yazigi.com` / `123456`.
- **Dashboard** (`/`): estatísticas da campanha calculadas a partir dos dados.
- **Alunos** (`/alunos`): listagem com busca e filtro por status.
- **Cadastro de aluno** (`/alunos/novo`): formulário com validação.
- **Turmas** (`/turmas`): listagem de turmas.
- **Cadastro de turma** (`/turmas/novo`): formulário com validação.
- **Detalhe da turma** (`/turmas/:id`): dados da turma + mini-relatório + alunos da turma.
- **404**: página para rotas inexistentes.

## Organização das pastas
src/ — components, pages, context, data, styles

## Como rodar
```bash
git clone https://github.com/thayslancosta/rema.git
cd rema
npm install
npm start
```
A aplicação abre em http://localhost:3000

## Desenvolvimento rápido
- Rodar em modo dev (Create React App):
```bash
npm install
npm start
# abre em http://localhost:3000 (ou porta alternativa configurada)
```
- Gerar build de produção:
```bash
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```
- Servir o build localmente para QA:
```bash
npx serve -s build -l 5001
# abre em http://localhost:5001
```

## Notas importantes (redesign v2)
- Identidade: fonte de corpo `Manrope`, títulos em `Fraunces`.
- Cor de marca: violeta (claro: `#6D5BD0`, escuro: `#9b8cf0`).
- Tema começa em `dark` e pode ser alternado pelo toggle na barra.
- Dados são mockados em memória (sem backend). Use o modal de edição de aluno para atualizar status/observações — a função `atualizarAluno` está disponível em `src/context/DadosContext.js`.

## Observações
- Dados mockados em memória: cadastros somem ao recarregar a página (F5). A persistência
  será implementada na Fase 2 com integração ao backend REST.
- O tema inicia no modo escuro e pode ser alternado pelo botão na barra de navegação.

## Evoluções futuras (Fase 2)
- Integração com API REST (substituir os dados mockados).
- Edição e exclusão de alunos/turmas.
- Relatórios com gráficos e exportação.
- Autenticação real com backend.
