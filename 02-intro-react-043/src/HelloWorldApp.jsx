import PropTypes from 'prop-types'; // Importa PropTypes para validar las propiedades de los componentes
import { Book } from './components/Book'; // Importa el componente Book desde su archivo correspondiente
import { Title } from './components/Title'; // Importa el componente Title desde su archivo correspondiente
import { UserDetails } from './components/UserDetails'; // Importa el componente UserDetails desde su archivo correspondiente

// Define el componente HelloWorldApp (se utiliza la sintaxis CamelCase para el nombre del componente)
// Recuerda colocar el termino export para hacer que el módulo sea exportable hacia otros componentes
// Se utiliza la desestructuración en el parametro de la función para extraer las propiedades requeridas
export const HelloWorldApp = ({ user, id, title, book }) => {

    // Este es el cuerpo del componente, contiene codigo JavaScript
    console.log(title); // Imprime el título en la consola (útil para depuración)

    // Línea comentada que podría usarse para establecer un nombre
    // const name = 'Pepe'; 

    // Para incluir varios elementos HTML o de React, se envuelven entre parentesis y deben estar contenidos dentro de un elemento principal
    return (
        // Se utiliza un fragmento como elemento principal
        // Existen 2 formas de definir un fragmento en React: <></> y <Fragment></Fragment>, este ultimo requiere importar el módulo Fragment de la siguiente manera:
        // import { Fragment } from "react";
        <>
            {/* Para imprimir el valor de name se utiliza la siguiente sintaxis */}
            {/* <div>Que tal! {name}</div> */}

            <Title title={title} /> {/* Renderiza el componente Title pasando el prop title */}
            <UserDetails user={user} id={id} /> {/* Renderiza el componente UserDetails pasando user e id */}
            <Book book={book} />{/* Renderiza el componente Book pasando el prop book */}
        </>
    );
}

// Si no se aplica la desestructuración para obtener las propiedades recibidas, se tendria que usar la siguiente sintaxis:
/*
export function HelloWorldApp(props) {

    // Imprime el objeto props con todas las propiedades definidas
    console.log(props)

    // Muestra el valor obtenido en la propiedad
    return (<>
        <div>
            Que tal! {props.user}
        </div>
    </>)
}
*/
// No se recomienda de esa forma, una practica común en React es definir la función del componente principal con una función de flecha

// Define las validaciones de las propiedades del componente HelloWorldApp
// El comando "npm install prop-types" sirve para instalar propTypes (y defaultProps)
HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired, // title debe ser una cadena y es requerido
    id: PropTypes.number.isRequired, // id debe ser un número y es requerido
    user: PropTypes.object.isRequired, // user debe ser un objeto y es requerido
    book: PropTypes.string.isRequired // book debe ser una cadena
}

// Define los valores por defecto de las propiedades del componente HelloWorldApp
HelloWorldApp.defaultProps = {
    title: 'Hola mundo por defecto!', // Valor por defecto para title si no se proporciona
    book: 'UMl got a gota' // Valor por defecto para book si no se proporciona
}

// Recuerda que ese valor por defecto se muestra si no se ha definido la prop en el componente padre (main.jsx) y se recibe en el componente hijo (este componente).
// Si se define el tipo de valor y el valor por defecto con propTypes y defaultProps, ambos deben coincidir en tipo de dato.

// El tipo de dato definido con propTypes se aplica si se define el valor por defecto con defaultProps y no se define la prop desde el componente padre (solamente el componente hijo recibe esa prop).

// Aunque hoy en dia no es recomendable utilizar defaultProps para definir el valor por defecto, en su lugar se tendria que definir en el parametro de la función principal
/*
export const HelloWorldApp = ({ title = "Hola mundo" }) => {
    return (<>
        <h1>
            {title}
        </h1>
    </>)
}
*/
// Si se elimina la prop title que se pasa desde el componente padre (main.jsx) en este contexto, se mostrara el valor definido por defecto. 

