// Se importa los nombres de las acciones definidas en constantes
import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from "./itemsActions";

// Ejemplo de una función de tipo reducer y su uso con el hook useReducer en un mismo componente
/*
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => 
        dispatch({type: 'decrement'})}>-</button>
      <button onClick={() =>
        dispatch({type: 'increment'})}>+</button>
    </>
  );
}
*/

// Función tipo reducer para manejar el estado del carrito de compras
// Ten en cuenta que se define el tipo de dato (no el valor inicial) para el state con un arreglo vacio
export const itemsReducer = (state = [], action) => {
  // Se utiliza un switch para manejar diferentes tipos de acciones
  switch (action.type) {
    // Acción para agregar un producto al carrito
    // En lugar de utilizar un String para el nombre de la acción se utiliza el nombre de la constante definida en itemsActions por cada uno de los casos
    // case "AddProductCart":
    case AddProductCart:
      // Se traslada la logica definida para agregar un producto (se encontraba antes en CartApp) y se realiza los siguientes cambios:
      // cartItems se reemplaza por state, ya que representa la variable de estado asociado al reducer
      // se asigna el valor action.payload a product, el payload es argumento que se envia a la función cuando se llama por medio de un dispatch

      // setCartItems([
      //   ...cartItems,
      //   {
      //     product,
      //     quantity: 1,
      //   },
      // ]);

      return [
        ...state, // Se mantiene el estado anterior
        {
          product: action.payload, // Se añade el nuevo producto (mediante la propiedad payload)
          quantity: 1, // Se inicializa la cantidad en 1
        },
      ];

    // Acción para actualizar la cantidad de un producto en el carrito
    case UpdateQuantityProductCart:
      // Se realiza el mismo procedimiento con la logica definida para la actualización de la cantidad de un producto
      // cartItems se reemplaza por state y product por action.payload

      // setCartItems(
      //   cartItems.map((i) => {
      //     if (i.product.id === product.id) {
      //       i.quantity = i.quantity + 1;
      //     }
      //     return i;
      //   })
      // );

      return state.map((i) => {
        // Si el producto actual en el estado coincide con el ID del producto a actualizar
        if (i.product.id === action.payload.id) {
          // Se realiza un cambio, en lugar de modificar la cantidad en el producto existente, se devuelve un nuevo objeto que tiene la misma estructura que el original, pero la cantidad se actualiza

          // Ten en cuenta que se modifica la cantidad debido a que se define 2 veces la propiedad quantity, una cuando se obtiene el producto por el id y la segunda vez cuando se modifica la cantidad
          return {
            ...i, // Se copia el producto actual
            quantity: i.quantity + 1, // Se incrementa la cantidad en 1
          };
        }
        return i; // Si no coincide, se devuelve el producto sin cambios
      });

    // Acción para eliminar un producto del carrito
    case DeleteProductCart:
      // Se realiza el mismo procedimiento con la logica definida para eliminar un producto por su id, pero con unos cambios

      // No se devuelve un arreglo que contenga una copia de los elementos de cartItems modificado con el metodo filter, sino que se devuelve directamente cartItems modificado con el metodo filter

      // Esto asegura que se devuelva una nueva instancia del arreglo sin el elemento eliminado. Esto soluciona el problema que ocurria cuando se eliminaban todos los productos del carrito de compras y se volvia a cargar la pagina, se agregaba el ultimo producto

      // cartItems se reemplaza por state y el id por action.payload
      // Recuerda que payload es un argumento que se envia cuando se llama a la función dispatch

      // setCartItems([...cartItems.filter((i) => i.product.id !== id)]);

      // Se filtran los productos que no coinciden con el ID proporcionado
      return state.filter((i) => i.product.id !== action.payload);

    // Si la acción no coincide con ninguna de las anteriores, se devuelve el estado actual sin cambios
    default:
      return state;
  }
};
