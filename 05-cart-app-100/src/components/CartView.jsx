// Importamos las librerías necesarias de React y el hook useNavigate desde react-router-dom
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Importamos la función calculateTotal desde el servicio de productos
import { calculateTotal } from "../services/productService";

export const CartView = ({ handlerDelete, items }) => {
    // Estado para almacenar el total del carrito
    const [total, setTotal] = useState(0);
    // Inicializamos el hook useNavigate para manejar la navegación
    const navigate = useNavigate();

    // useEffect que se ejecuta cada vez que cambian los elementos del carrito
    useEffect(() => {
        // Calcula el total usando la función calculateTotal
        setTotal(calculateTotal(items));
    }, [items]); // Dependencia: se ejecuta cuando 'items' cambia

    // Manejador para eliminar un producto del carrito
    const onDeleteProduct = (id) => {
        // console.log('eliminado producto') // Comentado para depuración
        handlerDelete(id); // Llama al manejador de eliminación pasado como prop
    }

    // Función para navegar de vuelta al catálogo de productos
    const onCatalog = () => {
        navigate('/catalog'); // Navegamos a la ruta del catálogo
    }

    return (
        <>
            <h3>Carro de compras</h3> {/* Título del carrito */}
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        {/* Encabezado de la columna de nombre */}
                        <th>Nombre</th>
                        {/* Encabezado de la columna de precio */}
                        <th>Precio</th>
                        {/* Encabezado de la columna de cantidad */}
                        <th>Cantidad</th>
                        {/* Encabezado de la columna de total */}
                        <th>Total</th>
                        {/* Encabezado de la columna de eliminación */}
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Iteración sobre los elementos del carrito para mostrarlos en la tabla */}
                    {items.map(item => (
                        // Cada fila representa un producto
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
                                    onClick={() => onDeleteProduct(item.product.id)}>eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        {/* Total acumulado */}
                        <td colSpan="3" className="text-end fw-bold">Total</td>
                        {/* Muestra el total calculado */}
                        <td colSpan="2" className="text-start fw-bold">{total}</td>
                    </tr>
                </tfoot>
            </table>
            {/* Botón para continuar comprando, que navega al catálogo */}
            <button
                className="btn btn-success"
                onClick={onCatalog}
            >Seguir comprando</button>
        </>
    )
}
