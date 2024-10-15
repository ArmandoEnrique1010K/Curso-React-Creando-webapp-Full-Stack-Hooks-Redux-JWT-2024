// Importamos el hook useState de React para manejar el estado del contador.
import { useState } from "react";

// Definimos el componente CounterApp, que recibe una propiedad 'value'.
export const CounterApp = ({ value }) => {

    // Usamos el hook useState para crear una variable de estado llamada 'counter'
    // y una función para actualizarla llamada 'setCounter', inicializándola con el valor recibido como prop.
    const [counter, setCounter] = useState(value);

    // Definimos una función que incrementa el valor del contador en 1.
    const counterIncrement = () => setCounter(c => c + 1);

    // El componente devuelve un fragmento de JSX que muestra el valor actual del contador
    // y un botón que llama a la función counterIncrement cuando se hace clic.
    return (
        <>
            <h2>El valor del contador es {counter}</h2>
            <button onClick={counterIncrement}>incrementar contador +1</button>
        </>
    );
}
