import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Crea un punto de entrada en el DOM donde se renderizará tu aplicación
const root = createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro del elemento 'root'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
