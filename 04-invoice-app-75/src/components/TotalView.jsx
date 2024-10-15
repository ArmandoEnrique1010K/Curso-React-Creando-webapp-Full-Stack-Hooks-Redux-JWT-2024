import PropTypes from 'prop-types'; // Importa PropTypes para la validación de propiedades

export const TotalView = ({ total }) => {
    return (
        <>
            <div className="text-end"> {/* Utilizamos Bootstrap para alinear el texto a la derecha */}
                <span className="badge bg-success">{total}</span> {/* Mostramos el total en una etiqueta de badge con un fondo verde */}
            </div>
        </>
    );
}

// Validación de las propiedades del componente
TotalView.propTypes = {
    total: PropTypes.number.isRequired, // total es un número obligatorio
}