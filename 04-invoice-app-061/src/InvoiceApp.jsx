// Importamos la función que obtiene la factura.
import { getInvoice } from "./services/getInvoice";
// Importamos el componente que muestra los datos del cliente.
import { ClientView } from "./components/ClientView";
// Importamos el componente que muestra los datos de la empresa.
import { CompanyView } from "./components/CompanyView";
// Importamos el componente que muestra el ID y el nombre de la factura.
import { InvoiceView } from "./components/InvoiceView";
// Importamos el componente que muestra la lista de productos.
import { ListItemsView } from "./components/ListItemsView";
// Importamos el componente que muestra el total de la factura.
import { TotalView } from "./components/TotalView";

export const InvoiceApp = () => {
    // Desestructuramos los datos de la factura obtenidos de la función getInvoice.
    const { total, id, name, client, company, items } = getInvoice();

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                        {/* Componente que muestra el ID y el nombre de la factura */}
                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">
                            <div className="col">
                                {/* Componente que muestra los datos del cliente */}
                                <ClientView title="Datos del cliente" client={client} />
                            </div>

                            <div className="col">
                                {/* Componente que muestra los datos de la empresa */}
                                <CompanyView title="Datos de la empresa" company={company} />
                            </div>
                        </div>

                        {/* Componente que muestra la lista de productos de la factura */}
                        <ListItemsView title="Productos de la factura" items={items} />
                        {/* Componente que muestra el total de la factura */}
                        <TotalView total={total} />
                    </div>
                </div>
            </div>
        </>
    );
};
