import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from "./itemsActions";

// Reducer para manejar el estado del carrito de compras
export const itemsReducer = (state = [], action) => {
  // Se utiliza un switch para manejar diferentes tipos de acciones
  switch (action.type) {
    // Acción para agregar un producto al carrito
    case AddProductCart:
      return [
        ...state, // Se mantiene el estado anterior
        {
          product: action.payload, // Se añade el nuevo producto
          quantity: 1, // Se inicializa la cantidad en 1
        },
      ];

    // Acción para actualizar la cantidad de un producto en el carrito
    case UpdateQuantityProductCart:
      return state.map((i) => {
        // Si el producto actual en el estado coincide con el ID del producto a actualizar
        if (i.product.id === action.payload.id) {
          return {
            ...i, // Se copia el producto actual
            quantity: i.quantity + 1, // Se incrementa la cantidad en 1
          };
        }
        return i; // Si no coincide, se devuelve el producto sin cambios
      });

    // Acción para eliminar un producto del carrito
    case DeleteProductCart:
      return state.filter((i) => i.product.id !== action.payload); // Se filtran los productos que no coinciden con el ID proporcionado

    // Si la acción no coincide con ninguna de las anteriores, se devuelve el estado actual sin cambios
    default:
      return state;
  }
};
