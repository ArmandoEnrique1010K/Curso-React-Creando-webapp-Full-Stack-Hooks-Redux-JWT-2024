// Importamos las librerías necesarias de React.
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importamos el componente CounterApp que será el núcleo de nuestra aplicación.
import { CounterApp } from './CounterApp'

// Utilizamos el método createRoot para montar nuestro componente CounterApp dentro del elemento con id 'root'.
// React.StrictMode se utiliza para resaltar posibles problemas en la aplicación, como advertencias de ciclo de vida y problemas con los efectos secundarios.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Renderizamos el componente CounterApp y le pasamos una propiedad inicial llamada 'value' con un valor de 7. */}
    {/* Si se llegara a pasar "7" como un String a la prop value, al hacer clic en el botón se concatenará varios "1" en lugar de sumarlos */}
    <CounterApp value={7} />
  </React.StrictMode>
)
