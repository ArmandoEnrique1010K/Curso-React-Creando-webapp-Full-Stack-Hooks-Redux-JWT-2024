import { invoice } from "../data/invoice";

// Función para obtener la factura y calcular el total de los items
export const getInvoice = () => {
  // console.log(invoice);

  // let total = 0;
  // invoice.items.forEach(item => {
  //     total = total + item.price * item.quantity;
  // });

  // Calcula el total usando la función calculateTotal
  const total = calculateTotal(invoice.items);

  // Retorna la factura original junto con el total calculado
  return { ...invoice, total };
};

// Función para calcular el total de los items, requiere un argumento de tipo arreglo (los items)
export const calculateTotal = (items = []) => {
  return items
    .map((item) => item.price * item.quantity) // Multiplica el precio por la cantidad
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Suma todos los totales
};
