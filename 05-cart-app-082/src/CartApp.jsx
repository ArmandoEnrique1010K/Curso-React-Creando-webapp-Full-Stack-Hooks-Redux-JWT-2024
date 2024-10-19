import { useEffect, useState } from "react";
import { getProducts } from "./services/productService"

// Componente principal de la aplicación de carrito de compras
export const CartApp = () => {

    // Estado para almacenar los productos disponibles
    const [products, setProducts] = useState([]);

    // useEffect para cargar los productos al montar el componente
    useEffect(() => {
        // Obtiene la lista de productos utilizando el servicio y actualiza el estado
        setProducts(getProducts());
    }, []); // Se ejecuta solo una vez al montar el componente

    return (
        <>
            <div className="container">
                <h3>Cart App</h3>
                <div className="row">
                    {/* Renderiza cada producto dentro de una tarjeta */}
                    {products.map(prod => (
                        // La clase col-4 define un contenedor de tipo columna que mide 4 unidades de largo (como máximo puede haber 3 contenedores con la misma clase 'col-4' en una fila)
                        <div className="col-4 my-2" key={prod.id}>
                            {/* Se aplica el estilo de card de Bootstrap para cada producto */}
                            <div className="card">
                                <div className="card-body">
                                    {/* Muestra los valores de las propiedades de cada uno de los objetos del arreglo products */}
                                    <h5 className="card-title">{prod.name}</h5>
                                    <p className="card-text">{prod.description}</p>
                                    <p className="card-text">$ {prod.price}</p>
                                    <button className="btn btn-primary">Agregar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="my-4 w-50">
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
                            {/* Aquí se mostrarán los productos agregados al carrito */}
                            <tr>
                                <td>nombre</td>
                                <td>precio</td>
                                <td>cantidad</td>
                                <td>total</td>
                                <td>eliminar</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            {/* Mostrar el total de la compra */}
                            <tr>
                                {/* El atributo colSpan combina celdas de forma horizontal */}
                                {/* Las clases text-end y text-start sirve para alinear el texto a la derecha y a la izquierda. La clas fw-bold aplica negrita al texto */}
                                <td colSpan="3" className="text-end fw-bold">Total</td>
                                <td colSpan="2" className="text-start fw-bold">12345</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </>
    )
}
