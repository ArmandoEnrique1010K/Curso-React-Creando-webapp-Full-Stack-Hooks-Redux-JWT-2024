// Importamos el módulo de facturas y funciones específicas del archivo invoices.js
import invoices, { invoiceByClientName, papper } from "./data/invoices";

// Buscamos una factura específica por su ID
const invoiceById = invoices.find((i) => i.id === 2);
console.log(invoiceById); // Mostramos la factura con ID 2

// Mostramos un mensaje antes de buscar por nombre de cliente
console.log("Buscar por nombre de cliente");
console.log(invoiceByClientName("Pepe")); // Buscamos y mostramos la factura del cliente 'Pepe'

// Filtramos las facturas para encontrar aquellas que incluyen el producto 'papper'
const invoiceFilter2 = invoices.filter((i) => i.items.includes(papper));
console.log(invoiceFilter2); // Mostramos las facturas que incluyen el producto 'papper'
