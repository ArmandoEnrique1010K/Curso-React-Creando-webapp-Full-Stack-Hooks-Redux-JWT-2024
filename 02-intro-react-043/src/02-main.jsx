import React from 'react'; // Importa React para poder usar sus funcionalidades
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar componentes en el DOM
import './index.css'; // Importa el archivo de estilos CSS

// React.createElement admite 3 argumentos: nombre del elemento HTML, un objeto con los atributos a definir y el contenido del elemento
// Se crea un elemento de lista no ordenada (ul) dentro de una sección
const ul = React.createElement(
  "section", // Tipo de elemento principal (section)
  null, // Props del elemento (no hay ninguna en este caso)

  // El contenido es una lista anidada a un elemento <div>
  React.createElement("div", null, // Crea un div contenedor
    React.createElement("ul", null, // Crea una lista no ordenada
      React.createElement("li", null, "1"), // Primer elemento de la lista
      React.createElement("li", null, "2"), // Segundo elemento de la lista
      React.createElement("li", null, "3"), // Tercer elemento de la lista
      React.createElement("li", null, "4"), // Cuarto elemento de la lista
      React.createElement("li", null, "5"), // Quinto elemento de la lista
      React.createElement("li", null, "6") // Sexto elemento de la lista
    )
  )
);

// Renderiza el elemento creado en el DOM dentro del elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>
  ul // Renderiza la lista no ordenada
);

// Para realizar el mismo procedimiento utilizando JavaScript puro
/*
// Crea un elemento <h2> en el documento HTML
const h2 = document.createElement("h2");

// Establece el texto que contendrá el elemento
h2.innerText = "Hola mundo";

// Agrega el elemento al contenedor con id 'root'
document.getElementById("root").append(h2);

// No se necesita la libreria ReactDOM en este contexto
*/


// Para realizar el mismo procedimiento utilizando React puro
/*
// Anida elementos HTML o componentes de React de forma directa
const h1 = <h1><ul><li>item 1</li></ul></h1>

// Utiliza ReactDOM para renderizar el componente en el navegador
ReactDOM.createRoot(document.getElementById('root')).render(
  h1
);
*/

// Puedes utilizar el compilador de Babel JS para generar el codigo que utiliza React.createElement
// https://babeljs.io/repl

// Realiza las siguientes configuraciones antes de escribir código:

// 1. En la sección "presets" marca la opción "react".

// 2. En la sección "options", en React Runtime selecciona la opción "Classic".

// 3. Intenta escribir el siguiente código en el compilador:

/*
<section>
  <div></div>
</section>
*/

// 4. Se genera el codigo que ejecuta por detras de escena React.

// /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", null));

// 5. Puedes intentarlo con el siguiente código

/*
<section>
  <div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
</section>
*/

// Recuerda que puedes ver el codigo generado en las herramientas de desarrollo de Chrome, sección Elements