// Importamos el componente Navbar para la barra de navegación
import { Navbar } from "./components/Navbar";
// Importamos el hook personalizado useItemsCart para manejar la lógica del carrito
import { useItemsCart } from "./hooks/useItemsCart";
// Importamos las rutas del carrito para manejar la navegación en la aplicación
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {
    // Usamos el hook personalizado para obtener los elementos del carrito y las funciones para agregar y eliminar productos
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            {/* Renderizamos la barra de navegación */}
            <Navbar />
            <div className="container my-4">
                <h3>Cart App</h3>
                {/* Renderizamos las rutas del carrito, pasando los elementos del carrito y las funciones de manejo como props */}
                <CartRoutes
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />
            </div>
        </>
    )
}
