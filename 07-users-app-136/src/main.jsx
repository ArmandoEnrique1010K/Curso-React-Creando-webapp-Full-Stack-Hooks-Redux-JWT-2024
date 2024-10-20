// Importamos las librerías necesarias de React
import React from 'react';
// Importamos ReactDOM para renderizar los componentes en el DOM
import ReactDOM from 'react-dom/client';
// Importamos el componente principal de la aplicación de facturas
import { UsersApp } from './UsersApp'

// Para hacer uso de la hoja de estilos personalizada la importamos aqui (ten en cuenta que los estilos pueden aplicar a cualquier componente):
import './styles.css';
import { BrowserRouter } from 'react-router-dom';

// Renderizamos la aplicación de carrito de compras en el elemento con el id 'root' en el HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Habilita las rutas definidas con React Router */}
    <BrowserRouter>
      {/* Incluimos el componente UsersApp que representa la aplicación de usuarios */}
      {/* Recordar que el comando "npm install React-router" */}
      <UsersApp />
    </BrowserRouter>
  </React.StrictMode>,
)
