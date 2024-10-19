// Importamos los datos de la factura desde el archivo correspondiente.
import { invoice } from "../data/invoice";

export const getInvoice = () => {
  // Calculamos el total de la factura sumando el precio de cada item multiplicado por su cantidad.

  // Descomentar esta sección si se prefiere usar un bucle forEach para calcular el total.
  // let total = 0;
  // invoice.items.forEach(item => {
  //     total = total + item.price * item.quantity;
  // });

  // El método reduce en JavaScript se utiliza para reducir un arreglo a un solo valor, aplicando una función que acumula cada elemento del arreglo y un valor inicial para el acumulador.
  // La función requiere 2 parametros: accumulator (el acumulador de valores o elementos del arreglo) y currentValue (el valor actual)
  // Por lo general se utiliza sumar números, concatenar cadenas, u otras operaciones que necesiten acumular un resultado a partir de un arreglo.
 
  // Utilizamos map para crear un nuevo arreglo con los totales de cada producto
  // y luego usamos reduce para sumar todos los totales.
  const total = invoice.items
    .map((item) => item.price * item.quantity) // Multiplicamos el precio por la cantidad para cada item.
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sumamos todos los valores del arreglo resultante.

  // Devolvemos la factura original con el total calculado agregado como una nueva propiedad.
  // Si se pasa la propiedad total y su valor esta contenido en una variable es el mismo nombre que la propiedad, se puede simplificar de la siguiente manera:
  // "total: total" se simplifica a "total"
  return { ...invoice, total };
};
