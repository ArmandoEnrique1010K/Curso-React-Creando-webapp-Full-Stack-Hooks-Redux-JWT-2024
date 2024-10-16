import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
// Importa componente para el formulario de ítems
import { FormItemsView } from "./components/FormItemsView";

// Estado inicial de la factura
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
    items: [] // Inicialmente no hay ítems
};

// Componente principal de la aplicación de facturación
export const InvoiceApp = () => {

    // Estado para controlar la visibilidad del formulario
    const [activeForm, setActiveForm] = useState(false);

    // Estado para almacenar el total de la factura
    const [total, setTotal] = useState(0);

    // Contador para asignar IDs a los ítems
    const [counter, setCounter] = useState(4);

    // Estado para almacenar la información de la factura
    const [invoice, setInvoice] = useState(invoiceInitial);

    // Estado para almacenar los ítems de la factura
    const [items, setItems] = useState([]);

    // Desestructuración de los valores del estado de la factura
    const { id, name, client, company } = invoice;

    // Efecto para obtener la factura al montar el componente
    useEffect(() => {
        const data = getInvoice(); // Llama a la función para obtener los datos de la factura
        console.log(data); // Muestra los datos en la consola
        setInvoice(data); // Establece la factura con los datos obtenidos
        setItems(data.items); // Establece los ítems de la factura
    }, []); // Se ejecuta solo una vez al montar el componente

    // Efecto para monitorear cambios en el contador
    useEffect(() => {
        // console.log('el counter cambio!')
    }, [counter]);

    // Efecto para calcular el total cuando cambian los ítems
    useEffect(() => {
        setTotal(calculateTotal(items)); // Calcula el total basado en los ítems actuales
        // console.log('el items cambio!')
    }, [items]);

    // Manejador para agregar ítems a la factura
    const handlerAddItems = ({ product, price, quantity }) => {

        // Agrega un nuevo ítem a la lista de ítems
        setItems([...items, {
            id: counter, // Asigna un ID único al nuevo ítem
            product: product.trim(), // Elimina espacios en blanco alrededor del nombre del producto
            price: +price.trim(), // Convierte el precio a número
            quantity: parseInt(quantity.trim(), 10) // Convierte la cantidad a número entero
        }]);

        // Incrementa el contador para el próximo ítem
        setCounter(counter + 1);
    }

    // Manejador para eliminar un ítem de la factura
    const handlerDeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id)); // Filtra los ítems para eliminar el ítem con el ID especificado
    }

    // Manejador para activar o desactivar el formulario
    const onActiveForm = () => {
        setActiveForm(!activeForm); // Cambia el estado de visibilidad del formulario
    }

    // Renderiza la interfaz de la aplicación
    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">

                        {/* Muestra la vista de la factura */}
                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">
                                {/* Muestra los datos del cliente */}
                                <ClientView title="Datos del cliente" client={client} />
                            </div>

                            <div className="col">
                                {/* Muestra los datos de la empresa */}
                                <CompanyView title="Datos de la empresa" company={company} />
                            </div>
                        </div>

                        {/* Muestra la lista de ítems de la factura */}
                        <ListItemsView title="Productos de la factura" items={items} handlerDeleteItem={id => handlerDeleteItem(id)} />

                        {/* Muestra el total de la factura */}
                        <TotalView total={total} />

                        {/* Botón para activar/desactivar el formulario, el texto cambia segun el valor de activeForm */}
                        <button className="btn btn-secondary" onClick={onActiveForm}>
                            {!activeForm ? 'Agregar Item' : 'Cerrar Form'}
                        </button>

                        {/* Muestra el formulario si está activo, utiliza un operador || en lugar de un operador ternario */}
                        {!activeForm || <FormItemsView handler={handlerAddItems} />}
                    </div>
                </div>
            </div>
        </>
    )
}
