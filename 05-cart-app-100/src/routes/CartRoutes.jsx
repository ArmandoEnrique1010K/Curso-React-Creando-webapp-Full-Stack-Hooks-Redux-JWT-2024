// Importamos los componentes necesarios desde react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "../components/CartView"; // Importamos el componente para mostrar el carrito
import { CatalogView } from "../components/CatalogView"; // Importamos el componente para mostrar el catálogo

export const CartRoutes = ({ handlerAddProductCart, handlerDeleteProductCart, cartItems }) => {
    return (
        // Instalar react-router con el comando npm install react-router
        <Routes>
            {/* Ruta para el catálogo de productos */}
            <Route
                path="catalog"
                element={<CatalogView handler={handlerAddProductCart} />} // Pasamos el manejador para agregar productos al carrito
            />

            {/* Ruta para el carrito de compras */}
            <Route
                path="cart"
                element={
                    // Verificamos si hay productos en el carrito
                    cartItems?.length <= 0 ? (
                        <div className="alert alert-warning">No hay productos en el carrito de compras!</div>
                    ) : (
                        // Si hay productos, renderizamos el componente CartView
                        <div className="my-4 w-50">
                            <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                        </div>
                    )
                }
            />

            {/* Ruta por defecto que redirige al catálogo si no hay coincidencias */}
            <Route path="/" element={<Navigate to={'/catalog'} />} />
        </Routes>
    );
}
