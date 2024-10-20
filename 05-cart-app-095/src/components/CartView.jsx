import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import PropTypes from "prop-types";

export const CartView = ({ handlerDelete, items }) => {

    // Estado para almacenar el total del carrito.
    const [total, setTotal] = useState(0);

    // Este efecto secundario permanece para calcular el total de los items agregados en el carrito
    // useEffect que se ejecuta cada vez que cambian los elementos del carrito.
    useEffect(() => {
        // Calcula el total usando la función calculateTotal.
        setTotal(calculateTotal(items));
        // En esta sección no se utiliza sessionStorage
    }, [items]);

    // Manejador para eliminar un producto del carrito.
    const onDeleteProduct = (id) => {
        // console.log('eliminado producto')
        handlerDelete(id);  // Llama al manejador de eliminación pasado como prop.
    }

    return (
        <>
            <h3>Carro de compras</h3>
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
                            {/* Nombre del producto */}
                            <td>{item.product.name}</td>
                            {/* Precio unitario del producto */}
                            <td>{item.product.price}</td>
                            {/* Cantidad de este producto en el carrito */}
                            <td>{item.quantity}</td>
                            {/* Total para este producto */}
                            <td>{item.quantity * item.product.price}</td>
                            <td>
                                {/* Botón para eliminar este producto, llama a la función onDeleteProduct pasando el id del producto */}
                                <button
                                    className="btn btn-danger"
                                    onClick={() => onDeleteProduct(item.product.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        {/* Muestra el total calculado */}
                        <td colSpan="2" className="text-start fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

// Define propTypes para cada propiedad o prop que se pasa a este componente
CartView.propTypes = {
    items: PropTypes.array.isRequired,
    handlerDelete: PropTypes.func.isRequired
}