// Importamos las librerías necesarias de React
import React from 'react';
// Importamos ReactDOM para renderizar los componentes en el DOM
import ReactDOM from 'react-dom/client';
// Importamos el componente principal de la aplicación de facturas
import { UsersApp } from './UsersApp'

// Renderizamos la aplicación de carrito de compras en el elemento con el id 'root' en el HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Incluimos el componente UsersApp que representa la aplicación de facturas */}
    <UsersApp />
  </React.StrictMode>
)
