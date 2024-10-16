// Importamos el hook useNavigate desde react-router-dom para manejar la navegación
import { useNavigate } from "react-router-dom";

export const ProductCardView = ({ handler, id, name, description, price }) => {

    // Inicializamos el hook useNavigate para poder navegar entre rutas
    const navigate = useNavigate();

    // Función para manejar la adición de un producto al carrito
    const onAddProduct = (product) => {
        console.log(product); // Imprimimos el producto en la consola para verificar
        handler(product); // Llamamos al manejador para agregar el producto al carrito
        navigate('/cart'); // Navegamos a la ruta del carrito después de agregar el producto
    }

    return (
        <>
            {/* Contenedor de la tarjeta del producto */}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5> {/* Nombre del producto */}
                    <p className="card-text">{description}</p> {/* Descripción del producto */}
                    <p className="card-text">$ {price}</p> {/* Precio del producto */}
                    <button className="btn btn-primary"
                        onClick={() => onAddProduct({ id, name, description, price })}>Agregar</button> {/* Botón para agregar el producto al carrito */}
                </div>
            </div>
        </>
    )
}
