import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
// Importa el hook personalizado para manejar el estado del carrito
import { useItemsCart } from "./hooks/useItemsCart";

export const CartApp = () => {

    // En lugar de utilizar toda la logica JavaScript definida en este componente, se utiliza el hook personalizado useItemsCart (se traslado toda la logica JavaScript hacia ese componente)

    // Utiliza el hook personalizado para obtener los elementos del carrito y las funciones para manejar la adición y eliminación de productos
    // Sigue la sintaxis de un objeto desestructurado que contiene solamente los modulos del hook personalizado que se van a utilizar en este componente y sus componentes hijos
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            <div className="container my-4">
                <h3>Cart App</h3>
                {/* Muestra la vista del catálogo y pasa el manejador de adición de productos */}
                <CatalogView handler={handlerAddProductCart} />

                {cartItems?.length <= 0 || (
                    <div className="my-4 w-50">
                        {/* Si hay elementos en el carrito, muestra la vista del carrito */}
                        <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                    </div>
                )}
            </div>
        </>
    );
};

// Hasta este momento la aplicación web debe ejecutarse correctamente sin errores de tal manera que pueda agregar un producto al carrito y al actualizar la pagina web, los productos se queden almacenados en el sessionStorage del navegador. Por otro lado, al eliminar todos los productos del carrito y recargar la pagina web, no deberia mostrar el carrito porque no hay productos en el carrito.