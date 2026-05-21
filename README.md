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

## Commit e histórico
- Faça commits pequenos e frequentes com mensagens descritivas, por exemplo: `feat: redesign — Fase 3 componentes` ou `chore: build production`.

## Observações
- Dados mockados em memória: cadastros somem ao recarregar a página (F5). A persistência
  será implementada na Fase 2 com integração ao backend REST.
- O tema inicia no modo escuro e pode ser alternado pelo botão na barra de navegação.
 - Após concluir cada fase: faça um commit Git com uma mensagem clara descrevendo a mudança (por exemplo: "feat: ReMatrícula - Fase 1").
 - Após concluir cada fase: faça um commit Git com uma mensagem clara descrevendo a mudança (por exemplo: "feat: ReMatrícula - Fase 1"). Commit e push frequentes ajudam a manter ponto de restauração e histórico claro.

## Evoluções futuras (Fase 2)
- Integração com API REST (substituir os dados mockados).
- Edição e exclusão de alunos/turmas.
- Relatórios com gráficos e exportação.
- Autenticação real com backend.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
