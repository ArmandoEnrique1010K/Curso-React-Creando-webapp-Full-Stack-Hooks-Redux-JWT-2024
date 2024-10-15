import PropTypes from 'prop-types'; // Importamos PropTypes para validar las propiedades del componente.

export const ClientView = ({ title, client }) => {
    // Desestructuramos las propiedades del objeto client
    const {
        name: nameClient, // Renombramos 'name' a 'nameClient'
        lastName,
        address: {
            country,
            city,
            street,
            number
        }
    } = client;

    return (
        <>
            {/* Mostramos el título pasado como prop */}
            <h3>{title}</h3>
            <ul className="list-group">
                {/* Mostramos el nombre completo del cliente */}
                <li className="list-group-item active">{nameClient} {lastName}</li>
                {/* Mostramos la dirección del cliente */}
                <li className="list-group-item">{country} / {city}</li>
                <li className="list-group-item">{street} {number}</li>
            </ul>
        </>
    );
}

// Definimos las propiedades esperadas del componente ClientView
ClientView.propTypes = {
    title: PropTypes.string.isRequired, // La propiedad 'title' debe ser una cadena de texto y es requerida
    client: PropTypes.object.isRequired, // La propiedad 'client' debe ser un objeto y es requerida
};
