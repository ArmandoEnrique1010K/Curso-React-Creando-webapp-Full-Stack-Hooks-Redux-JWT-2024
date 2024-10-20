// Importamos el hook useState de React para manejar el estado del contador.
import PropTypes from "prop-types";
import { useState } from "react";

// Definimos el componente CounterApp, que recibe una propiedad 'value'.
export const CounterApp = ({ value }) => {

    // Solamente para pruebas, se declara una variable counter y se imprime su valor en la consola
    /*
    let counter = 0

    const counterIncrement = () => {
        counter = counter + 1;
        console.log("click " + counter)
    }
    */

    // Usamos el hook useState para crear una variable de estado llamada 'counter' y una función para actualizarla llamada 'setCounter', inicializándola con el valor recibido como prop.

    // Si no se define el valor inicial que tendra counter, el navegador mostrara NaN luego de hacer clic en el botón
    const [counter, setCounter] = useState(value);

    // Definimos una función que incrementa el valor del contador en 1.
    // setCounter es la función que permite actualizar el valor de counter.
    const counterIncrement = () => setCounter(c => c + 1);

    // El componente devuelve un fragmento de JSX que muestra el valor actual del contador
    // y un botón que llama a la función counterIncrement cuando se hace clic.
    return (
        <>
            {/* Muestra el valor actual de counter en el titulo*/}
            <h2>El valor del contador es {counter}</h2>

            {/* El evento onClick llama a una función cuando se hace clic en el botón desde la aplicación web */}
            {/* <button onClick={() => counterIncrement()}>incrementar contador +1</button> */}

            {/* Forma simplificada al llamar a una función */}
            <button onClick={counterIncrement}>incrementar contador +1</button>
        </>
    );
}

// Es necesario definir propTypes
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}