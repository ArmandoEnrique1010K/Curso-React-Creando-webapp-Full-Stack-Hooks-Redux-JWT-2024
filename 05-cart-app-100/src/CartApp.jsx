// Importamos el componente Navbar para la barra de navegación
import { Navbar } from "./components/Navbar";
// Importamos el hook personalizado useItemsCart para manejar la lógica del carrito
import { useItemsCart } from "./hooks/useItemsCart";
// Importamos las rutas del carrito para manejar la navegación en la aplicación
import { CartRoutes } from "./routes/CartRoutes";

// Componente principal de la aplicación web
export const CartApp = () => {
    // Usamos el hook personalizado para obtener los elementos del carrito y las funciones para agregar y eliminar productos
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            {/* Este es el componente principal de la aplicación web, se tiene en cuenta el orden en que se definen los componentes */}
            {/* Renderizamos la barra de navegación */}
            <Navbar />

            {/* Todo el contenido estatico como el contenedor y el titulo con <h3> estaran presente en toda pagina web que se renderiza */}
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

// Hasta el momento se puede decir que hay 2 paginas web en la aplicación web, pero en el codigo fuente se han definidos 2 endpoints principales: "/catalog" y "/cart" para gestionar los componentes que se renderizaran cuando se acceda esos endpoints