import { useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"

// Inicializa el estado del carrito de compras a partir de sessionStorage o un array vacío.
const inititalCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const CartApp = () => {
    // Estado para almacenar los elementos del carrito de compras.
    const [cartItems, setCartItems] = useState(inititalCartItems);

    // Manejador para añadir un producto al carrito.
    const handlerAddProductCart = (product) => {
        // Verifica si el producto ya está en el carrito.
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            // Si el producto ya existe, incrementa su cantidad.

            // setCartItems([
            //     ...cartItems.filter((i) => i.product.id !== product.id),
            //     {
            //         product,
            //         quantity: hasItem.quantity + 1,
            //     }
            // ])

            // Se utiliza el metodo map en lugar de un filter, porque alteraria el orden de los items en el que se agrega al carrito
            setCartItems(
                cartItems.map((i) => {
                    if (i.product.id === product.id) {
                        i.quantity = i.quantity + 1; // Aumenta la cantidad en 1.
                    }
                    return i; // Devuelve el objeto actualizado.
                })
            );
        } else {
            // Si no existe, añade el nuevo producto con cantidad 1.
            setCartItems([
                ...cartItems,
                {
                    product,
                    quantity: 1, // Inicializa la cantidad en 1.
                }
            ]);
        }
    }

    // Manejador para eliminar un producto del carrito.
    const handlerDeleteProductCart = (id) => {
        // Filtra el carrito para eliminar el producto cuyo id coincida.
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ]);
    }

    return (
        <>
            <div className="container my-4">
                <h3>Cart App</h3>
                {/* Renderiza la vista del catálogo y pasa el manejador de añadir productos */}
                <CatalogView handler={handlerAddProductCart} />

                {/* Solo renderiza el carrito si hay productos en él */}
                {cartItems?.length <= 0 || (
                    <div className="my-4 w-50">
                        {/* Renderiza la vista del carrito y pasa el manejador de eliminar productos */}
                        <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                    </div>
                )}
            </div>
        </>
    )
}
