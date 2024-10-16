import { useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"

// Estado inicial del carrito de compras, que es un arreglo vacío ya que no hay productos seleccionados al inicio
const inititalCartItems = [
    // {
    //     product: {},   // Detalles del producto que se añadirá al carrito
    //     quantity: 0,   // Cantidad del producto que se añadirá al carrito
    //     total: 0       // Precio total del producto basado en la cantidad
    // }
];

export const CartApp = () => {

    // Estado para manejar los items en el carrito de compras
    const [cartItems, setCartItems] = useState(inititalCartItems);

    // Función para manejar la acción de agregar un producto al carrito
    const handlerAddProductCart = (product) => {
        // Actualiza el estado del carrito agregando un nuevo producto con cantidad y total calculado
        setCartItems([
            ...cartItems,   // Mantiene los productos actuales del carrito
            {
                product,    // Añade el nuevo producto seleccionado
                quantity: 1,    // Inicializa la cantidad del producto en 1
                total: product.price * 1   // Calcula el precio total (producto.precio * cantidad)
            }
        ]);
    }

    return (
        <>
            <div className="container">
                {/* Título principal de la aplicación */}
                <h3>Cart App</h3>

                {/* Componente para mostrar el catálogo de productos, pasando la función handler para agregar productos al carrito */}
                <CatalogView handler={handlerAddProductCart} />

                <div className="my-4 w-50">
                    {/* Componente para mostrar la vista del carrito de compras con los productos seleccionados */}
                    <CartView items={cartItems} />
                </div>
            </div>
        </>
    )
}
