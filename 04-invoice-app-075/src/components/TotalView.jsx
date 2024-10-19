import PropTypes from 'prop-types'; // Importa PropTypes para la validación de propiedades

export const TotalView = ({ total }) => {
    return (
        <>
            {/* Utilizamos Bootstrap para alinear el texto a la derecha */}
            <div className="text-end">
                {/* Mostramos el total en una etiqueta de badge con un fondo verde */}
                <span className="badge bg-success">{total}</span>
            </div>
        </>
    );
}

// Validación de las propiedades del componente
TotalView.propTypes = {
    total: PropTypes.number.isRequired, // total es un número
}