// Importamos los componentes necesarios desde react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";
import { CartView } from "../components/CartView"; // Importamos el componente para mostrar el carrito
import { CatalogView } from "../components/CatalogView"; // Importamos el componente para mostrar el catálogo
import PropTypes from "prop-types";

// Este componente se utilizara para definir el sistema de rutas de la aplicación web
export const CartRoutes = ({ handlerAddProductCart, handlerDeleteProductCart, cartItems }) => {
    return (
        // Instalar react-router con el comando npm install react-router
        // El componente <Routes></Routes> contiene una lista de rutas definidas con <Route/> por cada ruta
        <Routes>
            {/* Ruta para el catálogo de productos */}

            {/* Conviene utilizar <Route/> en lugar de <Route></Route> */}
            {/* Contiene los atributos path (define el endpoint, no comienza con un slash "/") y element (contiene el nombre del componente que se renderizara) */}
            <Route
                path="catalog"
                element={<CatalogView handler={handlerAddProductCart} />} // Pasamos el manejador para agregar productos al carrito
            />

            {/* Ruta para el carrito de compras */}
            <Route
                path="cart"
                // En este caso se utiliza un operador ternario para definir el componente que se renderizara
                element={
                    // Verificamos si hay productos en el carrito
                    // Recuerda que se utiliza el operador Optional Chaining porque la propiedad length podria no existir si no se ha definido el arreglo cartItems
                    cartItems?.length <= 0 ? (
                        // Si no hay productos, se renderiza un contenedor con un mensaje
                        <div className="alert alert-warning">No hay productos en el carrito de compras!</div>
                    ) : (
                        // Si hay productos, renderizamos el componente CartView
                        <div className="my-4 w-50">
                            <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                        </div>
                    )
                }
            />

            {/* Obligatoriamente se tiene que definir una ruta raíz que vendria a ser como el componente que se mapeara al endpoint de inicio, si no se define aparecera una advertencia en la consola indicando que no hay una ruta que contenga el endpoint "/" */}

            {/* El componente <Navigate/> sirve para redirigir a otra ruta por medio del atributo 'to' (contiene el endpoint) */}

            {/* Por lo general, para definir un endpoint se utiliza comillas simples '' o se puede utilizar unas llaves que contenga el endpoint como un String */}

            {/* Ruta por defecto que redirige al catálogo si no hay coincidencias */}
            <Route path="/" element={<Navigate to={'/catalog'} />} />
        </Routes>
    );
}

CartRoutes.propTypes = {
    handlerAddProductCart: PropTypes.func.isRequired,
    handlerDeleteProductCart: PropTypes.func.isRequired,
    cartItems: PropTypes.array.isRequired
}