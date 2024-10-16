import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
// Importa el hook personalizado para manejar el estado del carrito
import { useItemsCart } from "./hooks/useItemsCart";

export const CartApp = () => {
    // Utiliza el hook para obtener los elementos del carrito y las funciones para manejar la adición y eliminación de productos
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
