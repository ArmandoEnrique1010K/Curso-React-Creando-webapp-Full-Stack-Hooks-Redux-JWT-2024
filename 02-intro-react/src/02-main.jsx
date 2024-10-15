import React from 'react'; // Importa React para poder usar sus funcionalidades
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar componentes en el DOM
import './index.css'; // Importa el archivo de estilos CSS

// Se crea un elemento de lista no ordenada (ul) dentro de una sección
const ul = React.createElement(
  "section", // Tipo de elemento principal (section)
  null, // Props del elemento (no hay ninguna en este caso)
  /*#__PURE__*/React.createElement("div", null, // Crea un div contenedor
    /*#__PURE__*/React.createElement("ul", null, // Crea una lista no ordenada
      /*#__PURE__*/React.createElement("li", null, "1"), // Primer elemento de la lista
      /*#__PURE__*/React.createElement("li", null, "2"), // Segundo elemento de la lista
      /*#__PURE__*/React.createElement("li", null, "3"), // Tercer elemento de la lista
      /*#__PURE__*/React.createElement("li", null, "4"), // Cuarto elemento de la lista
      /*#__PURE__*/React.createElement("li", null, "5"), // Quinto elemento de la lista
      /*#__PURE__*/React.createElement("li", null, "6") // Sexto elemento de la lista
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
