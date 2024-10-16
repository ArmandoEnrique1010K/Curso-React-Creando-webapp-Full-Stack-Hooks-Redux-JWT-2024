// Importamos las librerías necesarias de React
import React from 'react';
// Importamos ReactDOM para renderizar los componentes en el DOM
import ReactDOM from 'react-dom/client';
// Importamos el componente BrowserRouter para manejar las rutas en la aplicación
import { BrowserRouter } from 'react-router-dom';
// Importamos el componente principal de la aplicación de carrito de compras
import { CartApp } from './CartApp';

// Renderizamos la aplicación de carrito de compras en el elemento con el id 'root' en el HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Instalar react-router-dom con el comando npm install react-router-dom */}
    <BrowserRouter>
      {/* Incluimos el componente CartApp que representa la aplicación de carrito de compras */}
      <CartApp />
    </BrowserRouter>
  </React.StrictMode>
);
