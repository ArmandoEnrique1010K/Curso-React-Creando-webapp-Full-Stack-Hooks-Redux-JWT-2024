import PropTypes from "prop-types";

export const ProductCardView = ({ handler, id, name, description, price }) => {
    // Función para manejar el evento de agregar un producto al carrito
    const onAddProduct = (product) => {
        // Se imprime en consola el producto que se va a agregar
        console.log(product);
        // Se llama al manejador recibido desde el componente padre para procesar el producto
        handler(product);
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5> {/* Muestra el nombre del producto */}
                    <p className="card-text">{description}</p> {/* Muestra la descripción del producto */}
                    <p className="card-text">$ {price}</p> {/* Muestra el precio del producto */}
                    {/* Botón para agregar el producto al carrito, se pasa las propiedades recibidas por este componente */}
                    <button
                        className="btn btn-primary"
                        // Recordar que el evento onClick contiene una función anonima que se activa luego de hacer clic en el botón
                        onClick={() => onAddProduct({ id, name, description, price })}>
                        Agregar
                    </button>
                </div>
            </div>
        </>
    )
}

// Define propTypes para cada propiedad o prop que se pasa a este componente
ProductCardView.propTypes = {
    handler: PropTypes.func,
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
}