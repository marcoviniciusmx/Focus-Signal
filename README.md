<h1 align="center">Focus Signal</h1>

<p align="center">
  Aplicação desenvolvida em React para sinalizar o estado atual de foco do usuário, oferecendo feedback rápido e sugestões simples com base em três estados principais: focado, cansado e pausa.
</p>

<p align="center">
  <a href="#-about-the-project">Sobre o projeto</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-features">Funcionalidades</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-technologies">Tecnologias</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#-project-structure">Estrutura</a>
</p>

<br>

<img src="./src/assets/Mockup - FocusSignal.png" alt="Mockup Focus Signal" width="100%">

---

## 🏠 About the project

O **Focus Signal** foi desenvolvido como uma aplicação front-end em React para ajudar o usuário a identificar rapidamente seu estado atual de energia e atenção, recebendo uma recomendação curta e objetiva com base nessa escolha.

A proposta da aplicação é simples: o usuário seleciona entre os estados **Focado**, **Cansado** e **Pausa**, e a interface atualiza dinamicamente o conteúdo exibido com uma descrição e uma sugestão correspondente.

Durante o desenvolvimento, foram praticados conceitos importantes de **React**, como uso de `useState`, renderização condicional baseada em estado, componentização de tela e estilização com `styled-components`.

---

## 🧰 Features

- Seleção de estado atual do usuário
- Três estados disponíveis:
  - Focado
  - Cansado
  - Pausa
- Atualização dinâmica do feedback exibido
- Descrição personalizada para cada estado
- Sugestão personalizada para cada estado
- Destaque visual no card selecionado
- Botão para resetar o estado
- Interface centralizada e objetiva
- Estilização com `styled-components`
- Pequena animação de hover em imagem motivacional

---

## 💻 Technologies

Este projeto foi desenvolvido com as seguintes tecnologias:

- React
- Vite
- JavaScript
- Styled Components
- HTML5
- CSS-in-JS
- ESLint

---

## 👷 Project structure

A estrutura principal do projeto está organizada da seguinte forma:

```bash id="g0x3kf"
focus-signal/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── pages/
│   │   └── Home/
│   │       ├── index.jsx
│   │       └── styles.js
│   ├── styles/
│   │   └── GlobalStyles.js
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
