// Importamos la función findInvoiceById del módulo invoices
import { findInvoiceById } from "./data/invoices";

// Llamamos a la función findInvoiceById con el ID de la factura que queremos buscar (en este caso imprimira el mensaje de error porque no existe la factura con el id 6)
/*
findInvoiceById(6)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
*/

// Se puede simplificar los métodos eliminando el parametro y el argumento que se envia de la siguiente manera:
findInvoiceById(3)
  .then(console.log) // Si la promesa se resuelve, mostramos el resultado en la consola
  .catch(console.error); // Si hay un error, mostramos el error en la consola
