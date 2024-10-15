import { RowItemView } from "./RowItemView"; // Importamos el componente RowItemView para mostrar cada fila de item
import PropTypes from 'prop-types'; // Importamos PropTypes para validar las propiedades del componente.

export const ListItemsView = ({ title, items }) => {
    return (
        <>
            {/* Mostramos el título de la sección de productos */}
            <h4>{title}</h4>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapeamos los items para crear una fila por cada producto */}
                    {items.map(({ id, product, price, quantity }) => (
                        // Usamos el componente RowItemView para cada item
                        <RowItemView
                            key={id}
                            product={product}
                            price={price}
                            quantity={quantity}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
}

// Definimos las propiedades esperadas del componente ListItemsView
ListItemsView.propTypes = {
    title: PropTypes.string.isRequired, // La propiedad 'title' debe ser una cadena de texto y es requerida
    items: PropTypes.array.isRequired, // La propiedad 'items' debe ser un array y es requerida
};
