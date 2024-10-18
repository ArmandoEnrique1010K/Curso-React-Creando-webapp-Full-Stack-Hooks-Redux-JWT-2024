import PropTypes from "prop-types";

// Define el componente funcional Book
export const Book = ({ book }) => (
    <div>
        {/* Renderiza el contenido de la prop book dentro de un div */}
        {book}
    </div>
);

{/* Es necesario definir valores por defecto entre subcomponentes */ }
Book.propTypes = {
    book: PropTypes.string // Opcionalmente se podria utilizar isRequired porque se pasa un valor por defecto estatico
}