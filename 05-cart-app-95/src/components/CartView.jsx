import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";

export const CartView = ({ handlerDelete, items }) => {

    // Estado para almacenar el total del carrito.
    const [total, setTotal] = useState(0);

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
                            <td>{item.product.name}</td> {/* Nombre del producto */}
                            <td>{item.product.price}</td> {/* Precio unitario del producto */}
                            <td>{item.quantity}</td> {/* Cantidad de este producto en el carrito */}
                            <td>{item.quantity * item.product.price}</td> {/* Total para este producto */}
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => onDeleteProduct(item.product.id)}>Eliminar</button>
                            </td> {/* Botón para eliminar este producto, llama a la función onDeleteProduct pasando el id del producto */}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        <td colSpan="2" className="text-start fw-bold">{total}</td> {/* Muestra el total calculado */}
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
