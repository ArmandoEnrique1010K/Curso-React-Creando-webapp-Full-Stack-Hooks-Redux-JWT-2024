// Importamos las librerías necesarias de React
import React from 'react';
// Importamos ReactDOM para renderizar los componentes en el DOM
import ReactDOM from 'react-dom/client';
// Importamos el componente principal de la aplicación de facturas
import { InvoiceApp } from './components/InvoiceApp';

// Renderizamos la aplicación de facturas en el elemento con el id 'root' en el HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Incluimos el componente InvoiceApp que representa la aplicación de facturas */}
    <InvoiceApp />
  </React.StrictMode>
);
