import PropTypes from 'prop-types'; // Importamos PropTypes para validar las propiedades del componente.

export const CompanyView = ({ title, company }) => {
    return (
        <>
            {/* Mostramos el título pasado como prop */}
            <h3>{title}</h3>
            <ul className="list-group">
                {/* Mostramos el nombre de la empresa */}
                <li className="list-group-item active">{company.name}</li>
                {/* Mostramos el número fiscal de la empresa */}
                <li className="list-group-item">{company.fiscalNumber}</li>
            </ul>
        </>
    );
}

// Definimos las propiedades esperadas del componente CompanyView
CompanyView.propTypes = {
    title: PropTypes.string.isRequired, // La propiedad 'title' debe ser una cadena de texto y es requerida
    company: PropTypes.object.isRequired, // La propiedad 'company' debe ser un objeto y es requerida
};
