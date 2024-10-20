import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";
import PropTypes from "prop-types";

export const CatalogView = ({ handler }) => {

    // Estado local para almacenar los productos obtenidos
    const [products, setProducts] = useState([]);

    // useEffect se utiliza para cargar los productos una vez que el componente se monta
    useEffect(() => {
        // Se llama a la función getProducts para obtener los productos del servicio
        setProducts(getProducts());
    }, []);

    return (
        <>
            <div className="row">
                {/* Iteración sobre los productos y representación de cada uno mediante ProductCardView */}
                {products.map(prod => (
                    <div className="col-4 my-2" key={prod.id}>
                        <ProductCardView
                            handler={handler} // Pasamos el manejador para agregar el producto al carrito
                            id={prod.id} // Identificador único del producto
                            name={prod.name} // Nombre del producto
                            description={prod.description} // Descripción del producto
                            price={prod.price} // Precio del producto
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

// Define propTypes para cada propiedad o prop que se pasa a este componente
CatalogView.propTypes = {
    handler: PropTypes.func.isRequired,
}