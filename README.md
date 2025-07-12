# Carros App

**SPA** em React + Vite + TypeScript que permite cadastrar e listar carros em tempo real via socket.io

---

## Pré-requisitos

- Node.js ≥ 18

---

## Como rodar

1. Clone o repositório e instale dependências:
   ```bash
   git clone <seu-repo-url>
   cd carros-app
   npm install
   ```

2. Inicie o servidor WebSocket:
   ```bash
   npm run server
   ```
   *(ou: `node src/api/server.js`)*

3. Em outra aba/terminal, inicie o front-end:
   ```bash
   npm run dev
   ```

4. Abra `http://localhost:5173` no navegador.

---

## 📁 Estrutura de pastas

```
carros-app/
├ public/
├ src/
│  ├ api/
│  │  ├ server.js
│  │  └ socket.ts
│  ├ assets/
│  │  └ react.svg
│  ├ components/
│  │  ├ CarForm/
│  │  │  └ index.tsx
│  │  └ CarList/
│  │     └ index.tsx
│  ├ layouts/
│  │  └ layout.tsx
│  ├ pages/
│  │  ├ home/
│  │  │  └ page.tsx
│  │  └ cars/
│  │     └ page.tsx
│  ├ schema/
│  │  └ car.ts
│  ├ styles.css
│  ├ index.css
│  ├ App.css
│  ├ App.tsx
│  ├ main.tsx
│  └ vite-env.d.ts
├ package.json
└ README.md
```


