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
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td> {/* Nombre del producto */}
                            <td>{item.product.price}</td> {/* Precio unitario del producto */}
                            <td>{item.quantity}</td> {/* Cantidad de este producto en el carrito */}
                            <td>{item.quantity * item.product.price}</td> {/* Total para este producto */}
                            <td>eliminar</td> {/* Espacio reservado para la futura implementación del botón de eliminación */}
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        {/* Fila que muestra el total acumulado del carrito */}
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">12345</td> {/* Valor total provisional */}
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
