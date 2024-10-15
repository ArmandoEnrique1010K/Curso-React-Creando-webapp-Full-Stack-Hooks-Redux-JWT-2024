import PropTypes from 'prop-types'; // Importa PropTypes para validar las propiedades de los componentes
import { Book } from './components/Book'; // Importa el componente Book desde su archivo correspondiente
import { Title } from './components/Title'; // Importa el componente Title desde su archivo correspondiente
import { UserDetails } from './components/UserDetails'; // Importa el componente UserDetails desde su archivo correspondiente

// Define el componente HelloWorldApp
export const HelloWorldApp = ({ user, id, title, book }) => {

    console.log(title); // Imprime el título en la consola (útil para depuración)

    // const name = 'Pepe'; // Línea comentada que podría usarse para establecer un nombre

    return (
        <>

            <Title title={title} /> {/* Renderiza el componente Title pasando el prop title */}
            <UserDetails user={user} id={id} /> {/* Renderiza el componente UserDetails pasando user e id */}
            <Book book={book} />{/* Renderiza el componente Book pasando el prop book */}
        </>
    );
}

// Define las validaciones de las propiedades del componente HelloWorldApp
HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired, // title debe ser una cadena y es requerido
    id: PropTypes.number.isRequired, // id debe ser un número y es requerido
    user: PropTypes.object.isRequired, // user debe ser un objeto y es requerido
}

// Define los valores por defecto de las propiedades del componente HelloWorldApp
HelloWorldApp.defaultProps = {
    title: 'Hola mundo por defecto!', // Valor por defecto para title si no se proporciona
    book: 'UMl got a gota' // Valor por defecto para book si no se proporciona
}
