import PropTypes from 'prop-types'; // Importa PropTypes para validar las propiedades de los componentes

// Define el componente funcional Title
export const Title = ({ title }) => {
    // Renderiza un elemento <h1> que muestra el prop title
    return <h1>{title}</h1>;
}

{/* Puedes visualizar los componentes utilizando React Developer Tools */ }
{/* 1. Abre las herramientas de desarrollo de Chrome y ve a la seccion "components" */ }
{/* 2. Puedes seleccionar el componente HelloWorldApp para visualizar sus componentes y las props con sus valores que se pasan entre ellos */ }

{/* Es necesario definir valores por defecto entre subcomponentes */ }
Title.propTypes = {
    title: PropTypes.string.isRequired
}