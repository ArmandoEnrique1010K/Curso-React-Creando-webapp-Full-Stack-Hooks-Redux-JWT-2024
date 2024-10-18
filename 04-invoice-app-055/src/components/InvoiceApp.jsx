// Importamos la función getInvoice desde el servicio que proporciona los datos de la factura
import { getInvoice } from "../services/getInvoice"

// Definimos el componente principal InvoiceApp
export const InvoiceApp = () => {

    // Obtenemos los datos de la factura llamando a la función getInvoice y desestructuramos sus propiedades
    const { id, name, client, company, items } = getInvoice();

    // Desestructuramos los datos del cliente para obtener su nombre, apellido y dirección
    const { name: nameClient, lastName, address } = client;

    // Desestructuramos la dirección del cliente para obtener detalles como país, ciudad, calle y número
    const { country, city, street, number } = address;

    // Renderizamos el componente utilizando JSX
    return (
        <>
            {/* Contenedor principal con una clase de Bootstrap para centrar y agregar márgenes */}
            <div className="container">
                {/* Tarjeta de Bootstrap que contiene la factura */}
                <div className="card my-3">
                    {/* El titulo de la tarjeta */}
                    <div className="card-header">
                        Ejemplo Factura
                    </div>

                    {/* Sección que muestra el ID y el nombre de la factura */}
                    {/* El cuerpo de la tarjeta */}
                    <div className="card-body">
                        {/* Contenedor de lista con clase de Bootstrap apra estilos */}
                        <ul className="list-group">
                            {/* Elementos de lista con clases de Bootstrap para estilos */}
                            <li className="list-group-item">Id: {id}</li>
                            <li className="list-group-item">Name: {name}</li>
                        </ul>

                        {/* Fila que contiene los datos del cliente y de la empresa */}
                        <div className="row my-3">
                            {/* Columna para los datos del cliente */}
                            <div className="col">
                                <h3>Datos del cliente</h3>
                                <ul className="list-group">
                                    {/* Elemento activo para resaltar el nombre del cliente */}
                                    <li className="list-group-item active">{nameClient} {lastName}</li>
                                    <li className="list-group-item">{country} / {city}</li>
                                    <li className="list-group-item">{street} {number}</li>
                                </ul>
                            </div>

                            {/* Columna para los datos de la empresa */}
                            <div className="col">
                                <h3>Datos de la empresa</h3>
                                <ul className="list-group">
                                    {/* Elemento activo para resaltar el nombre de la empresa */}
                                    <li className="list-group-item active">{company.name}</li>
                                    <li className="list-group-item">{company.fiscalNumber}</li>
                                </ul>
                            </div>
                        </div>

                        {/* Sección que muestra los productos de la factura */}
                        <h4>Productos de la factura</h4>
                        {/* Tabla de Bootstrap con estilos para filas alternas y efecto hover */}
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Iteramos sobre la lista de items y mostramos cada producto en una fila de la tabla */}
                                {/* Se aplica la desestructuración del elemento (objeto) para obtener sus propiedades como variables */}
                                {items.map(({ id, product, price, quantity }) => (
                                    <tr key={id}>
                                        <td>{product}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
