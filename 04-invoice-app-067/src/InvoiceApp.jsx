import { useState } from "react";
import { getInvoice } from "./services/getInvoice";
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
    // Obtenemos los datos de la factura y los elementos iniciales
    // items se renombra a itemsInitial
    const { total, id, name, client, company, items: itemsInitial } = getInvoice();

    // Estado para los valores de los <input> del producto, precio y cantidad (Los valores por defecto son Strings vacios)
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');

    // Estado para los ítems de la factura
    const [items, setItems] = useState(itemsInitial);

    // Contador para los IDs de nuevos productos
    // Se inicializa en 4, porque hay 3 productos iniciales en la factura
    const [counter, setCounter] = useState(4);

    // Recuerda que puedes ver el valor que se guarda en la variable de estado desde las herramientas de desarrollo de Chrome, seccion "components"

    // Función para manejar el cambio en el input del producto
    // La propiedad "target" (se obtiene del objeto "event" que representa el evento) sirve para obtener el elemento HTML donde ocurrio el evento
    const onProductChange = ({ target }) => {
        // la propiedad value representa el valor introducido en el <input> desde el navegador

        // Descomentar esto si se quiere imprimir en la consola el elemento HTML luego de introducir un valor en el campo
        // console.log(target);

        console.log(target.value);

        // Establece en el estado productValue el valor introducido
        setProductValue(target.value);
    };

    // Función para manejar el cambio en el input del precio
    const onPriceChange = ({ target }) => {
        console.log(target.value);
        setPriceValue(target.value);
    };

    // Función para manejar el cambio en el input de la cantidad
    const onQuantityChange = ({ target }) => {
        console.log(target.value);
        setQuantityValue(target.value);
    };

    // Función para manejar el envío del formulario de productos
    const onInvoiceItemsSubmit = (event) => {
        // Previene el comportamiento por defecto del formulario (muestra los nombres de los campos y datos introducidos en la barra del navegador y redirige a una pagina que no esta definida)
        event.preventDefault();

        // Validaciones para los campos del formulario
        // Siguen este patrón: si se cumple la condición, no retorna nada y detiene la ejecución de la función

        // Evalua la cantidad de caracteres introducidos

        // El metodo global trim sirve para eliminar los espacios en blanco introducidos que estan por demás
        // La propiedad length sirve para obtener la cantidad de caracteres
        if (productValue.trim().length <= 1) {
            // La función global alert muestra un cuadro de dialogo en el navegador
            alert('Error: el nombre del producto debe tener más de un caracter');
            return;
        }

        if (priceValue.trim().length <= 1) {
            alert('Error: el precio debe tener 2 digitos');
            return;
        }

        // Evalua si es un número introducido (se realiza esta validación, porque de lo contrario si se introduce un texto, en el navegador muestra un NaN en la lista de items)

        // La función global inNaN valida que se haya introducido un número (se realiza esta validación, porque de lo contrario si se introduce un texto, en el navegador muestra un NaN en la lista de items)
        if (isNaN(priceValue.trim())) {
            alert('Error: el precio no es un número');
            return;
        }

        if (isNaN(quantityValue.trim())) {
            alert('Error: la cantidad no es un número');
            return;
        }

        // Evalua el valor introducido
        if (quantityValue < 1) {
            alert('Error: la cantidad tiene que ser mayor a 0');
            return;
        }

        // Actualizamos la lista de items con el nuevo producto
        // Recordar que con el operador Spread se crea una copia de los elementos del arreglo items
        setItems([...items, {
            // El nuevo item es un objeto que contiene los valores introducidos en el formulario.
            // Recuerda que si es el primer elemento introducido, se asigna 4 al id (valor por defecto)
            id: counter,

            // Recuerda que trim sirve para eliminar los espacios en blanco introducidos que estan por demás
            product: productValue.trim(),

            // Existen 2 formas de convertir un String a un number: operador unario (+) y parseInt (como argumento se pasa la cadena de texto y la base 10)
            price: +priceValue.trim(),
            quantity: parseInt(quantityValue.trim(), 10)
        }]);

        // Reiniciamos los campos del formulario
        setProductValue('');
        setPriceValue('');
        setQuantityValue('');

        // Incrementamos el contador para el próximo item
        setCounter(counter + 1);
    };

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                        {/* Vistas de la factura, cliente y empresa */}
                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">
                                <ClientView title="Datos del cliente" client={client} />
                            </div>

                            <div className="col">
                                <CompanyView title="Datos de la empresa" company={company} />
                            </div>
                        </div>

                        {/* Vista de los productos y total */}
                        <ListItemsView title="Productos de la factura" items={items} />
                        <TotalView total={total} />

                        {/* Formulario para agregar nuevos items */}
                        {/* onSubmit es un evento que se activa cuando se envia el formulario, en este caso se llama a la función */}
                        {/* La clase w-50 establece el ancho a un 50% del contenedor padre */}
                        <form className="w-50" onSubmit={onInvoiceItemsSubmit}>
                            <input
                                type="text"
                                name="product"
                                value={productValue}
                                // placeholder muestra un mensaje inicial en el campo del formulario
                                placeholder="Producto"
                                // Aplica estilos para el campo del formulario
                                className="form-control m-3"
                                // onChange es un evento que se activa cuando cambia el valor introducido en el campo (valor en el atributo value)
                                onChange={onProductChange} />
                            <input
                                type="text"
                                name="price"
                                value={priceValue}
                                placeholder="Precio"
                                className="form-control m-3"
                                // Es una opción para llamar a la función, pero se recomienda omitir el parametro si se pasa al llamado de la función como argumento
                                onChange={(event) => onPriceChange(event)} />
                            <input
                                type="text"
                                name="quantity"
                                value={quantityValue}
                                placeholder="Cantidad"
                                className="form-control m-3"
                                onChange={onQuantityChange} />

                            {/* Botón para enviar el formulario, se aplica los estilos de Bootstrap */}
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
};
