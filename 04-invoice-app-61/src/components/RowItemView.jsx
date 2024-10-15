import PropTypes from 'prop-types'; // Importamos PropTypes para validar las propiedades del componente.

export const RowItemView = ({ product, price, quantity }) => {
    return (
        <>
            <tr>
                {/* Mostramos el nombre del producto en la primera celda de la fila */}
                <td>{product}</td>
                {/* Mostramos el precio del producto en la segunda celda de la fila */}
                <td>{price}</td>
                {/* Mostramos la cantidad del producto en la tercera celda de la fila */}
                <td>{quantity}</td>
            </tr>
        </>
    );
}

// Definimos las propiedades esperadas del componente RowItemView
RowItemView.propTypes = {
    product: PropTypes.string.isRequired, // La propiedad 'product' debe ser una cadena de texto y es requerida
    price: PropTypes.number.isRequired, // La propiedad 'price' debe ser un número y es requerida
    quantity: PropTypes.number.isRequired, // La propiedad 'quantity' debe ser un número y es requerida
};
