import PropTypes from 'prop-types'; // Importa PropTypes para la validación de propiedades

// Componente que representa una fila de un ítem en la tabla de productos
export const RowItemView = ({ id, product, price, quantity, handlerDeleteItem }) => {
    return (
        <>
            <tr>
                <td>{product}</td> {/* Muestra el nombre del producto */}
                <td>{price}</td> {/* Muestra el precio del producto */}
                <td>{quantity}</td> {/* Muestra la cantidad del producto */}
                <td>
                    <button
                        className='btn btn-danger' // Botón con estilo de peligro para eliminar
                        onClick={() => handlerDeleteItem(id)} // Llama a handlerDeleteItem con el id del ítem
                    >
                        eliminar
                    </button>
                </td>
            </tr>
        </>
    );
}


// Validación de las propiedades del componente
RowItemView.propTypes = {
    id: PropTypes.number.isRequired, // id es un número obligatorio (agregado para mantener la claridad)
    product: PropTypes.string.isRequired, // product es una cadena obligatoria
    price: PropTypes.number.isRequired, // price es un número obligatorio
}