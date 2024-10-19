import { useEffect, useState } from "react";
// Importa las funciones del servicio
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
    items: [] // para items, se establece un arreglo vacio (se desconoce que tipo de dato va a contener)
};

export const InvoiceApp = () => {
    // Normalmente en un componente de React, las variables de estado siempre se definen primero, luego la desestructuración de objetos y luego los efectos secundarios.

    // Se define un estado para la factura, el estado inicial es el objeto que contiene los datos iniciales
    const [invoice, setInvoice] = useState(invoiceInitial);

    // Se modifica el valor inicial de items, que es un arreglo vacio
    const [items, setItems] = useState([]);

    // Contador para los IDs de nuevos productos
    const [counter, setCounter] = useState(4);

    // Se define un nuevo estado para el total, el valor por defecto es 0
    const [total, setTotal] = useState(0);

    // En lugar de definir varios estados para cada uno de los campos del formulario, se define un unico estado, que contendrá como valor inicial un objeto cuyas propiedades llevan el nombre del campo del formulario (atributo name) y Strings vacios como los valores de las propiedades
    /*
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    */

    // Otro detalle, se renombra productValue por product, se realiza el mismo procedimiento con las demás variables de estado
    // pulsa CTRL + H en Visual Studio Code y procede a reemplazar

    // Estado para manejar los valores del formulario de ítems
    const [formItemsState, setFormItemsState] = useState({
        product: '',
        price: '',
        quantity: '',
    });

    // Desestructuración de los datos de la factura
    // Se elimina la propiedad items y su nombre asignado itemsInitial
    const { id, name, client, company } = invoice;

    // Desestructuración del objeto formItemsState para obtener sus propiedades
    const { product, price, quantity } = formItemsState;

    // useEffect para cargar la factura inicial cuando el componente se monta
    useEffect(() => {
        const data = getInvoice(); // Obtener los datos de la factura
        console.log(data); // Mostrar los datos en consola
        setInvoice(data); // Guardar los datos de la factura en el estado
        setItems(data.items); // Guardar los ítems en el estado
    }, []);

    // Es importante optimizar la aplicación cuando se conecta a una API remota para evitar retrasos.

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
        // console.log('los items cambiaron!')
    }, [items]);

    // Manejar cambios en los <input> del formulario
    // En lugar de definir funciones para cada uno de los campos, como se habia hecho previamente, se define una unica función para realizar las mismas acciones
    /*
    const onProductChange = ({ target }) => {
        console.log(target.value);
        setProductValue(target.value);
    };

    const onPriceChange = ({ target }) => {
        console.log(target.value);
        setPriceValue(target.value);
    };

    const onQuantityChange = ({ target }) => {
        console.log(target.value);
        setQuantityValue(target.value);
    };
    */

    // Se desestructura la propiedad target para obtener sus propiedades como variables
    const onInputChange = ({ target: { name, value } }) => {
        // Descomenta esto para imprimir en la consola el nombre del campo y el valor introducido hasta el momento
        // console.log(name);
        // console.log(value);

        setFormItemsState({
            // Crea una nueva instancia de los valores introducidos en el formulario hasta el momento
            ...formItemsState,

            // Variable computada, name toma el valor definido en la propiedad name del elemento <input> y value es el valor de value del mismo elemento 
            // Actualizar el valor correspondiente en el estado del formulario
            [name]: value,

            // En el caso de que no se desestructure la propiedad target, se tendria que utilizar:
            // [target.name]: [target.value],
        });
    }

    // Manejar el envío del formulario de ítems
    const onInvoiceItemsSubmit = (event) => {
        // Prevenir el comportamiento por defecto del formulario
        event.preventDefault();

        // Validaciones de los campos del formulario
        if (product.trim().length <= 1) {
            alert('Error: el nombre del producto debe tener más de un caracter');
            return;
        };

        // El operador or || ejecuta el bloque de la izquierda si es verdadero, de lo contrario ejecuta el bloque de la derecha
        if (price.trim().length <= 1 || isNaN(price.trim())) {
            alert('Error: El precio debe tener más de 1 caracter y debe ser un número');
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

        // En lugar de limpiar los campos de texto mediante la actualización de los de estados inviduales se actualiza el estado formItemsState
        /*
        setProductValue('');
        setPriceValue('');
        setQuantityValue('');
        */

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

                        {/* Se utiliza el valor de la variable de estado total y se pasa como prop al componente TotalView */}
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
                                // Llama a una función directamente para encadenar el evento
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