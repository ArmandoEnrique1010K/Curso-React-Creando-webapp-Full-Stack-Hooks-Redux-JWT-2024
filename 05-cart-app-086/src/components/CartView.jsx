import PropTypes from "prop-types"

export const CartView = ({ items }) => {
    return (
        <>
            {/* Título para la sección del carrito de compras */}
            <h3>Carro de compras</h3>

            {/* Tabla para mostrar los productos añadidos al carrito */}
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>

                <tbody>
                    {/* Iteración sobre los elementos del carrito para mostrarlos en la tabla */}
                    {items.map(item => (
                        <tr key={item.product.id} // Identificador unico asociado
                        >
                            {/* Nombre del producto */}
                            <td>{item.product.name}</td>
                            {/* Precio unitario del producto */}
                            <td>{item.product.price}</td>
                            {/* Cantidad de este producto en el carrito */}
                            <td>{item.quantity}</td>
                            {/* Total para este producto */}
                            <td>{item.quantity * item.product.price}</td>
                            {/* Espacio reservado para la futura implementación del botón de eliminación */}
                            <td>eliminar</td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        {/* Fila que muestra el total acumulado del carrito */}
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        {/* Valor total provisional */}
                        <td colSpan="2" className="text-start fw-bold">12345</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

// Es normal que ocurra un error en la consola si se agrega el mismo item más de una vez al carrito, porque se repite el id del producto
// Por ahora, se puede agregar productos al carrito de compras

// Define propTypes para cada propiedad o prop que se pasa a este componente
CartView.propTypes = {
    items: PropTypes.array.isRequired,
}