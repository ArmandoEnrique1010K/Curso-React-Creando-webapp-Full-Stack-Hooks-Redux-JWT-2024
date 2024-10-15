import React from 'react'; // Importa React para utilizar sus funcionalidades
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar componentes en el DOM
import { HelloWorldApp } from './HelloWorldApp'; // Importa el componente HelloWorldApp desde su archivo correspondiente

// Renderiza el componente HelloWorldApp dentro del elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // Activa el modo estricto para ayudar a identificar problemas potenciales en la aplicación
  <React.StrictMode>
    <HelloWorldApp // Renderiza el componente HelloWorldApp
      user={{ name: 'Pepe', lastName: 'Doe' }} // Prop user que contiene un objeto con el nombre y apellido del usuario
      id={1} // Prop id con un valor numérico
      title='Hola Mundo' // Prop title con un valor de texto
    />
  </React.StrictMode>
);
