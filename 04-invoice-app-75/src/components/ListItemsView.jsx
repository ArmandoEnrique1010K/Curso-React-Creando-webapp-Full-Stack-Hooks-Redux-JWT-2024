import { RowItemView } from "./RowItemView"; // Importa el componente que representa cada fila de ítem
import PropTypes from 'prop-types'; // Importa PropTypes para la validación de propiedades

// Componente para mostrar la lista de ítems de la factura
export const ListItemsView = ({ title, items, handlerDeleteItem }) => {

    return (
        <>
            <h4>{title}</h4> 
            {/* Muestra el título de la sección */}
            <table className="table table-striped table-hover">
                {/* Tabla para mostrar ítems */}
                <thead>
                    <tr>
                         {/* Cabecera de la columna Producto */}
                        <th>Producto</th>
                        {/* Cabecera de la columna Precio */}
                        <th>Precio</th> 
                        {/* Cabecera de la columna Cantidad */}
                        <th>Cantidad</th> 
                         {/* Cabecera de la columna para eliminar ítems */}
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapea los ítems y genera una fila para cada uno */}
                    {items.map(({ id, product, price, quantity }) => (
                        <RowItemView
                            key={id} // Asigna una clave única para cada fila
                            id={id}
                            product={product}
                            price={price}
                            quantity={quantity}
                            handlerDeleteItem={id => handlerDeleteItem(id)} // Pasa el manejador de eliminación
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
}

// Validación de las propiedades del componente
ListItemsView.propTypes = {
    title: PropTypes.string.isRequired, // title es una cadena obligatoria
    items: PropTypes.array.isRequired, // items es un array obligatorio
    handlerDeleteItem: PropTypes.func.isRequired // handlerDeleteItem es una función obligatoria
};
