import PropTypes from 'prop-types'; // Importamos PropTypes para validar las propiedades del componente.

// Recibe las propiedades id y name
export const InvoiceView = ({ id, name }) => {
    return (
        <>
            <ul className="list-group">
                {/* Mostramos el ID de la factura */}
                <li className="list-group-item">Id: {id}</li>
                {/* Mostramos el nombre de la factura */}
                <li className="list-group-item">Name: {name}</li>
            </ul>
        </>
    );
};

// Definimos las propiedades esperadas del componente InvoiceView
// Recordar ejecutar "npm install prop-types" para instalar propTypes
InvoiceView.propTypes = {
    id: PropTypes.number.isRequired,  // La propiedad 'id' debe ser un número y es requerida
    name: PropTypes.string.isRequired, // La propiedad 'name' debe ser una cadena de texto y es requerida
};
