// Importamos las librerías necesarias de React
import React from 'react';
// Importamos ReactDOM para renderizar los componentes en el DOM
import ReactDOM from 'react-dom/client';
// Importamos el componente principal de la aplicación de facturas
import { InvoiceApp } from './InvoiceApp';

// Renderizamos la aplicación de facturas en el elemento con el id 'root' en el HTML
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Incluimos el componente InvoiceApp que representa la aplicación de facturas */}
    {/* Recuerda que puedes eliminar <React.StrictMode> para evitar que se imprima en la consola el mismo mensaje 2 veces, solamente para pruebas */}
    {/* En la consola de Chrome, puedes marcar la opción de "Agrupar mensajes similares en la consola para no repetir los mismos mensajes una y otra vez" */}
    <InvoiceApp />
  </React.StrictMode>
);
