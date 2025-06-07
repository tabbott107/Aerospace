// src/main.tsx  (React 18 + TypeScript)

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

// BASE_URL is injected by Vite:
//   • dev server → "/"            (npm run dev)
//   • prod build  → "/Aerospace/" (npm run build)
const rootEl = document.getElementById("root")!;

createRoot(rootEl).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
