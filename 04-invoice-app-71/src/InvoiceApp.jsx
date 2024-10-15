// Importamos useEffect de React
import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

// Estado inicial de la factura, es un objeto
const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
};

export const InvoiceApp = () => {

    // Estado para el total, contador y datos de la factura
    const [total, setTotal] = useState(0);
    const [counter, setCounter] = useState(4);
    const [invoice, setInvoice] = useState(invoiceInitial);
    // El valor inicial de items es un arreglo vacio
    const [items, setItems] = useState([]);

    // Estado para manejar los valores del formulario de ítems
    // Se renombra productValue por product, se realiza el mismo procedimiento con las demás variables de estado
    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    // Desestructuración de los datos de la factura
    // Se elimina la propiedad items
    const { id, name, client, company } = invoice;

    // Desestructuración del objeto formItemsState
    const { product, price, quantity } = formItemsState;

    // useEffect para cargar la factura inicial cuando el componente se monta
    useEffect(() => {
        const data = getInvoice(); // Obtener los datos de la factura
        console.log(data); // Mostrar los datos en consola
        setInvoice(data); // Guardar los datos de la factura en el estado
        setItems(data.items); // Guardar los ítems en el estado
    }, []);

    // useEffect para pruebas, la función se ejecuta cuando el valor de la dependencia cambia
    useEffect(() => {
        // console.log('el precio cambio!')
    }, [price]);

    useEffect(() => {
        // console.log('el formItemsState cambio!')
    }, [formItemsState]);

    useEffect(() => {
        // console.log('el counter cambio!')
    }, [counter]);

    // useEffect para actualizar el total cada vez que cambian los ítems
    useEffect(() => {
        setTotal(calculateTotal(items)); // Calcular y actualizar el total
        // console.log('el items cambio!')
    }, [items]);

    // Manejar cambios en los inputs del formulario
    // Se desestructura el atributo target para obtener sus propiedades
    const onInputChange = ({ target: { name, value } }) => {
        // console.log(name);
        // console.log(value);

        setFormItemsState({
            ...formItemsState,
            // Variable dinamica, name es el valor definido en la propiedad name del elemento input y value es el valor de value del mismo elemento 
            // Actualizar el valor correspondiente en el estado del formulario
            [name]: value
        });
    }

    // Manejar el envío del formulario de ítems
    const onInvoiceItemsSubmit = (event) => {
        // Prevenir el comportamiento por defecto del formulario
        event.preventDefault();

        // Validaciones de los campos del formulario
        if (product.trim().length <= 1) return;

        // El operador or || ejecuta el bloque de la izquierda si es verdadero, de lo contrario ejecuta el bloque de la derecha
        if (price.trim().length <= 1 || isNaN(price.trim())) {
            alert('Error: El precio debe ser un número');
            return;
        }
        if (quantity < 1 || isNaN(quantity.trim())) {
            alert('Error: La cantidad debe ser un número mayor a 0');
            return;
        }

        // Agregar nuevo ítem a la lista de ítems
        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: parseInt(quantity.trim(), 10)
        }]);

        // Reiniciar los valores del formulario
        setFormItemsState({
            product: '',
            price: '',
            quantity: '',
        });

        // Incrementar el contador para el siguiente ítem
        setCounter(counter + 1);
    }

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                        {/* Mostrar la vista de la factura */}
                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">
                                {/* Mostrar la vista del cliente */}
                                <ClientView title="Datos del cliente" client={client} />
                            </div>

                            <div className="col">
                                {/* Mostrar la vista de la empresa */}
                                <CompanyView title="Datos de la empresa" company={company} />
                            </div>
                        </div>

                        {/* Mostrar la lista de ítems y el total */}
                        <ListItemsView title="Productos de la factura" items={items} />
                        <TotalView total={total} />

                        {/* Formulario para agregar nuevos ítems */}
                        <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
                            <input
                                type="text"
                                // El valor de name debe coincidir con el value para que funcione la variable dinamica
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
                    </div>
                </div>
            </div>
        </>
    );
}