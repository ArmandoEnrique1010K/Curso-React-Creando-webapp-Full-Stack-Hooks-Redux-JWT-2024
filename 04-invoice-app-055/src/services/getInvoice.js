// Importamos el objeto invoice desde el archivo de datos que contiene la información de la factura
import { invoice } from "../data/invoice";

// Definimos la función getInvoice que se encargará de devolver los datos de la factura
export const getInvoice = () => {
  // Mostramos en la consola el contenido de la factura para fines de depuración
  console.log(invoice);

  // Devolvemos el objeto invoice
  return invoice;
};
