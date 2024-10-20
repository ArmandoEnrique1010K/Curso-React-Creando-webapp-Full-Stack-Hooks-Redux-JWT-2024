import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from "../reducer/itemsActions";

// Se traslada la inicialización de los artículos del carrito a partir de sessionStorage o como un array vacío
const inititalCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

// Este componente representa un hook personalizado, contiene toda la logica JavaScript que deberia tener un componente principal
export const useItemsCart = () => {
  // El hook useReducer es una alternativa a useState para manejar estados complejos en los componentes, se utiliza cuando la logica del estado implica multiples subvalores o varias acciones que modifican el estado

  // Sintaxis básica de useReducer
  // const [state, dispatch] = useReducer(reducer, initialArg, initFunc*)

  // state: variable de estado
  // dispatch: función que envía acciones para actualizar el estado
  // reducer: el nombre de una función definida, que centraliza todos los cambios en el estado del objeto
  // initialArg: argumento o valor por defecto para la variable de estado
  // initFunc*: función opcional de inicialización

  // En lugar de utilizar un useState para manejar el estado de cartItems
  // const [cartItems, setCartItems] = useState(inititalCartItems);

  // Se usa el hook useReducer para manejar el estado del carrito
  const [cartItems, dispatch] = useReducer(itemsReducer, inititalCartItems);

  // Se define un efecto para guardar los artículos del carrito en sessionStorage cada vez que cambie cartItems
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar un producto al carrito
  const handlerAddProductCart = (product) => {
    // Verifica si el producto ya está en el carrito
    const hasItem = cartItems.find((i) => i.product.id === product.id);

    if (hasItem) {
      // En lugar de actualizar el estado de cartItems para actualizar la cantidad, se llama a la función dispatch
      // setCartItems(
      //   cartItems.map((i) => {
      //     if (i.product.id === product.id) {
      //       i.quantity = i.quantity + 1;
      //     }
      //     return i;
      //   })
      // );

      // Si el producto ya existe, despacha la acción para actualizar la cantidad
      dispatch({
        type: UpdateQuantityProductCart,
        payload: product,
      });
    } else {
      // Se realiza el mismo procedimiento con el caso para agregar un producto si el producto no esta en el carrito
      // setCartItems([
      //   ...cartItems,
      //   {
      //     product,
      //     quantity: 1,
      //   },
      // ]);

      // Si el producto no existe, despacha la acción para agregarlo al carrito
      dispatch({
        type: AddProductCart,
        payload: product,
      });
    }
  };

  // Función para eliminar un producto del carrito
  const handlerDeleteProductCart = (id) => {
    // Se realiza el mismo procedimiento con el caso para eliminar un producto
    // setCartItems([...cartItems.filter((i) => i.product.id !== id)]);

    dispatch({
      type: DeleteProductCart,
      payload: id,
    });
  };

  // Retorna el estado del carrito y las funciones para manipularlo
  return {
    cartItems,
    handlerAddProductCart,
    handlerDeleteProductCart,
  };
};
