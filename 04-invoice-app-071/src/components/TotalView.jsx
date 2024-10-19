import PropTypes from "prop-types";

export const TotalView = ({ total }) => {
    return (
        <>
            <div className="text-end"> {/* Utilizamos Bootstrap para alinear el texto a la derecha */}
                <span className="badge bg-success">{total}</span> {/* Mostramos el total en una etiqueta de badge con un fondo verde */}
            </div>
        </>
    );
}

// Es necesario definir prop-types
TotalView.propTypes = {
    total: PropTypes.number
}