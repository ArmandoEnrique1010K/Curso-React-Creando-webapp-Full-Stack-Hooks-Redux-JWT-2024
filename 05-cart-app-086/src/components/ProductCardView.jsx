export const ProductCardView = ({ handler, id, name, description, price }) => {
    // Función para manejar el evento de agregar un producto al carrito
    const onAddProduct = (product) => {
        console.log(product); // Se imprime en consola el producto que se va a agregar
        handler(product); // Se llama al manejador recibido desde el componente padre para procesar el producto
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5> {/* Muestra el nombre del producto */}
                    <p className="card-text">{description}</p> {/* Muestra la descripción del producto */}
                    <p className="card-text">$ {price}</p> {/* Muestra el precio del producto */}
                    <button
                        className="btn btn-primary"
                        onClick={() => onAddProduct({ id, name, description, price })}> {/* Botón para agregar el producto al carrito */}
                        Agregar
                    </button>
                </div>
            </div>
        </>
    )
}
