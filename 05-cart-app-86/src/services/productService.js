// Importamos el array de productos desde el archivo donde está definido
import { products } from "../data/products";

// Definición de una función para obtener la lista de productos
export const getProducts = () => {
  // Retorna el array de productos que contiene todos los productos disponibles
  return products;
};
