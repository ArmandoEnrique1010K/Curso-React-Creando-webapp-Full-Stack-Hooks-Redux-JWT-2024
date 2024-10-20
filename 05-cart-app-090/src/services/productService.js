import { products } from "../data/products";

// Esta función obtiene la lista de productos disponibles desde el archivo de datos.
export const getProducts = () => {
  return products; // Devuelve el array de productos.
};

// Esta función calcula el total del carrito de compras.
export const calculateTotal = (items) => {
  // Recordar que el metodo reduce asociado a un arreglo, sirve para reducir un arreglo a un solo valor, aplica una función que acumula cada elemento del arreglo
  return items.reduce(
    (accumulator, item) => accumulator + item.product.price * item.quantity, // Suma el precio de cada producto multiplicado por su cantidad al acumulador.
    0 // Valor inicial del acumulador es 0.
  );
};
