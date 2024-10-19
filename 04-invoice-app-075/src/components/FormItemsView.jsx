import { useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Importamos PropTypes para validar las propiedades del componente.

// Componente para manejar la entrada de ítems de la factura (recibe una prop handler)
// Solamente se traslada desde el componente InvoiceApp la logica necesaria para manejar los campos del formulario
export const FormItemsView = ({ handler }) => {

    // Estado para almacenar los datos del formulario
    const [formItemsState, setFormItemsState] = useState({
        product: '',  // Nombre del producto
        price: '',    // Precio del producto
        quantity: '', // Cantidad del producto
    });

    // Desestructuración de los valores del estado
    const { product, price, quantity } = formItemsState;

    // Efecto para monitorear cambios en el precio
    useEffect(() => {
        // console.log('el precio cambio!')
    }, [price]);

    // Efecto para monitorear cambios en el estado del formulario
    useEffect(() => {
        // console.log('el formItemsState cambio!')
    }, [formItemsState]);

    // Función para manejar cambios en los campos de entrada
    const onInputChange = ({ target: { name, value } }) => {
        // console.log(name);
        // console.log(value);

        // Actualiza el estado del formulario con el nuevo valor
        setFormItemsState({
            ...formItemsState,
            [name]: value // Actualiza el campo específico basado en su nombre
        });
    }

    // Función para manejar el envío del formulario
    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault(); // Previene la recarga de la página al enviar el formulario

        // Validaciones de entrada
        if (product.trim().length <= 1) {
            // Verifica que el producto no este vacio
            alert('Error: el nombre del producto debe tener más de un caracter');
            return;
        };

        if (price.trim().length <= 1 || isNaN(price.trim())) { // Verifica que el precio tenga 2 cifras o que sea un número
            alert('Error: El precio debe tener más de 1 caracter y debe ser un número');
            return;
        }
        if (quantity < 1 || isNaN(quantity.trim())) { // Verifica que la cantidad sea mayor que o que sea un número
            alert('Error: La cantidad debe ser un número mayor a 0');
            return;
        }

        // Ten en cuenta que como se pasa una función al componente hijo, la función se utiliza cuando se le llama y se le pasa los argumentos correspondientes

        // Llama al manejador pasado como prop con los datos del formulario
        handler(formItemsState);

        // Reinicia el estado del formulario después de enviar
        setFormItemsState({
            product: '',
            price: '',
            quantity: '',
        });
    }

    // Renderiza el formulario
    return (
        <>
            <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
                <input
                    type="text"
                    name="product"
                    value={product}
                    placeholder="Producto"
                    className="form-control m-3"
                    onChange={onInputChange} />
                <input
                    type="text"
                    name="price"
                    value={price}
                    placeholder="Precio"
                    className="form-control m-3"
                    onChange={event => onInputChange(event)} />
                <input
                    type="text"
                    name="quantity"
                    value={quantity}
                    placeholder="Cantidad"
                    className="form-control m-3"
                    onChange={onInputChange} />

                <button
                    type="submit"
                    className="btn btn-primary m-3">
                    Nuevo Item
                </button>
            </form>
        </>
    );
}

// Definimos las propiedades esperadas del componente CompanyView
FormItemsView.propTypes = {
    handler: PropTypes.func.isRequired // La propiedad 'handler' debe ser una función y es requerida;
}
