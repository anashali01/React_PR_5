# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

This project converts a Bootstrap static template into a React app (Vite + React). It modernizes the UI and organizes the template into React components while preserving the original assets in `public`.

![Output screenshot](public/assets/img/screenshot.png)

**Live Demo**: https://your-deployment-url.example.com  
**Local (dev)**: `http://localhost:5173`

**Overview**
- **What:** Convert a Bootstrap template into a React app and modernize the UI.
- **Tech:** `React`, `Vite`, plain CSS/Bootstrap assets kept under `public`.

**Quick Start**
- **Install:**

```bash
npm install
```

- **Run (dev):**

```bash
npm run dev
```

- **Build:**

```bash
npm run build
```

**Project Structure (key files)**
- **Main entry:** [src/main.jsx](src/main.jsx)
- **App root:** [src/App.jsx](src/App.jsx)
- **Primary component(s):** [src/components/Home.jsx](src/components/Home.jsx)
- **Public assets:** [public/assets](public/assets)

**Features**
- Componentized Bootstrap markup.
- Preserved vendor assets (Bootstrap, Swiper, GLightbox, etc.) under `public/vendor`.
- Vite dev server for fast local development.

**Deployment / Live Link**
- Deploy to Vercel, Netlify, or GitHub Pages. Replace the Live Demo URL above with your deployment URL after publishing.

**Screenshot / Output Image**
- Place a screenshot of the running app at `public/assets/img/screenshot.png` (used above). If you prefer another path, update the image path in this README.

**Notes / Next steps**
- Replace the placeholder live URL with the actual deployment link.
- Add the real output screenshot to `public/assets/img/screenshot.png`.
- Optionally: add a short demo GIF under `public/assets/img` and reference it here.

**Contributing**
- Make changes in `src/components` and keep static assets in `public`.

If you want, I can create a screenshot placeholder image, or prepare a simple deployment guide for Vercel or Netlify.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
