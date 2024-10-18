import React from 'react'; // Importa React para utilizar sus funcionalidades
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar componentes en el DOM
import { HelloWorldApp } from './HelloWorldApp'; // Importa el componente HelloWorldApp desde su archivo correspondiente

// Renderiza el componente HelloWorldApp dentro del elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // Activa el modo estricto para ayudar a identificar problemas potenciales en la aplicación
  <React.StrictMode>
    {/* Muestra un titulo en el navegador */}
    {/* <h1>Hola mundo</h1> */}

    {/* Renderiza el componente HelloWorldApp y lo muestra en el navegador */}
    <HelloWorldApp
      // Pasa los valores a las propiedades o props que contiene el componente
      user={{ name: 'Pepe', lastName: 'Doe' }} // Prop user que contiene un objeto con el nombre y apellido del usuario
      id={1} // Prop id con un valor numérico
      title='Hola Mundo' // Prop title con un valor de texto
    />

    {/* Por lo general los valores que se pasan a las props se pueden definir */}
    {/* Con llaves: para pasar expresiones que necesitan ser evaluadas segun el tipo de dato */}
    {/* Sin llaves: para pasar valores de tipo String directamente */}

    {/* Si no se define la propiedad en el componente padre (este componente), entonces se pasa al componente hijo (<HelloWorldApp>) 'undefined' */}
    {/* En el navegador si se llegara a usar una propiedad no definida, simplemente no se muestra en el navegador */}
    {/* En este componente, intenta borrar la prop title que se pasa al componente <HelloWorldApp> y observa el resultado */}

    {/* Si una propiedad tiene un valor true, false, null o un String vacio, simplemente no se mostrara en el navegador */}
    {/* Si una propiedad se pasa sin valor, es similar a pasarlo con un valor igual a true */}

    {/* Para limpiar la consola de Chrome, haz clic derecho en ella y selecciona Clear console */}
  </React.StrictMode>
);
