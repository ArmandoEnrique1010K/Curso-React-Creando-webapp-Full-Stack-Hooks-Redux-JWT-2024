import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import {
  AddProductCart,
  DeleteProductCart,
  UpdateQuantityProductCart,
} from "../reducer/itemsActions";

// Inicializa los artículos del carrito a partir de sessionStorage o como un array vacío
const inititalCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const useItemsCart = () => {
  // Usa el hook useReducer para manejar el estado del carrito
  const [cartItems, dispatch] = useReducer(itemsReducer, inititalCartItems);

  // Efecto para guardar los artículos del carrito en sessionStorage cada vez que cambie
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Función para agregar un producto al carrito
  const handlerAddProductCart = (product) => {
    // Verifica si el producto ya está en el carrito
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      // Si el producto ya existe, despacha la acción para actualizar la cantidad
      dispatch({
        type: UpdateQuantityProductCart,
        payload: product,
      });
    } else {
      // Si el producto no existe, despacha la acción para agregarlo al carrito
      dispatch({
        type: AddProductCart,
        payload: product,
      });
    }
  };

  // Función para eliminar un producto del carrito
  const handlerDeleteProductCart = (id) => {
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
