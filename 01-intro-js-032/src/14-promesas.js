// Importamos la función findInvoiceById del módulo invoices
import { findInvoiceById } from "./data/invoices";

// Llamamos a la función findInvoiceById con el ID de la factura que queremos buscar
findInvoiceById(3)
  .then(console.log) // Si la promesa se resuelve, mostramos el resultado en la consola
  .catch(console.error); // Si hay un error, mostramos el error en la consola
