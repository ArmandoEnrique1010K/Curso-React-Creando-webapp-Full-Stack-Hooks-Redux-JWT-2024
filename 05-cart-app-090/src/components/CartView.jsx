import { useEffect, useState } from "react";
// Importa la función para calcular el total
import { calculateTotal } from "../services/productService";
import PropTypes from "prop-types";

// Se recibe la prop handlerDelete
export const CartView = ({ handlerDelete, items }) => {

    // Estado para almacenar el total del carrito.
    const [total, setTotal] = useState(0);

    // useEffect que se ejecuta cada vez que cambian los elementos del carrito.
    useEffect(() => {
        // Se podria definir la logica para calcular el precio total de los productos en el carrito
        // setTotal(items.reduce((accumulator, item) => accumulator + item.product.price * item.quantity, 0))

        // Pero como solamente requiere datos, se traslada al servicio productService

        // Calcula el total usando la función calculateTotal, requiere de un argumento de tipo arreglo, los items.
        setTotal(calculateTotal(items));

        // SessionStorage es una propiedad nativa del navegador en JavaScript, permite acceder a un objeto de almacenamiento asociado a la sesión actual del usuario

        // Los datos almacenados en sessionStorage se eliminan automaticamente cuando se cierra la ventana o pestaña del navegador.

        // Existen alternativas como las cookies (actualmente no se recomienda usar cookies) o localStorage (no se eliminan los datos luego de cerrar el navegador).

        // Sintaxis de sessionStorage (no decomentar):

        // Almacena la información
        // sessionStorage.setItem("key", "value");

        // Obtiene la información almacenada
        // var data = sessionStorage.getItem("key")

        // el argumento 'key' es el identificador con el que se llama al valor almacenado y 'value' el valor que contiene el 'key' generalmente es de tipo String, pero existe una forma de convertir un String a un objeto y viceversa.

        // Recuerda que el método JSON.stringify convierte un objeto en una cadena de texto JSON.

        // Un detalle importante es que un arreglo en JavaScript es un tipo especial de objeto. Un objeto en JavaScript es una colección de pares clave-valor, y un arreglo es esencialmente eso, pero con claves numéricas (índices) en orden secuencial.

        // Almacena el carrito actualizado en sessionStorage para persistencia, se asigna dentro del key 'cart'.
        sessionStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    // Manejador para eliminar un producto del carrito.
    const onDeleteProduct = (id) => {
        // console.log(`producto con el id ${id} eliminado`)
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
                                {/* Botón con estilos de Bootstrap para eliminar este producto, llama a la función onDeleteProduct pasando el id del producto */}
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
    handlerDelete: PropTypes.func.isRequired // Recordar que 'func' sirve para propiedades de tipo función
}