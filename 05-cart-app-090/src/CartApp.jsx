import { useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"

// En lugar de mostrar un arreglo vacio como los items en el carrito de compras se utiliza sessionStorage para obtener los items almacenados en el navegador.
// const initialCartItems = [];

// Se tiene el metodo JSON.parse, el cual convierte un String JSON a un objeto (recuerda que un arreglo es un tipo especial de objeto)

// Inicializa el estado del carrito de compras a partir de sessionStorage (key 'cart') o un array vacío mediante el operador ||.
const inititalCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

// Se utiliza un arreglo vacio porque se evita el error cuando se intenta acceder a initialCartItems cuando es null debido a que no hay ningun producto en el sessionStorage, puedes decomentar esta linea de codigo y comentar la anterior linea para visualizar el error
// const inititalCartItems = JSON.parse(sessionStorage.getItem('cart'));

// Puedes hacer uso de las herramientas de desarrollo de Chrome para visualizar el objeto que contiene el sessionStorage
// 1. Pulsa F12 en el navegador y ve a la sección 'Application' (en la barra de menu superior)
// 3. En el panel izquierdo busca 'Session storage' y haz clic en la URL de la aplicación web
// 3. Se obtendrá una lista de keys

export const CartApp = () => {

    // Decomenta esto para mostrar los items que se encuentran en el carrito de compras, si no hay ninguno, imprime null
    // console.log(inititalCartItems)

    // Estado para almacenar los elementos del carrito de compras.
    const [cartItems, setCartItems] = useState(inititalCartItems);

    // Manejador para añadir un producto al carrito.
    const handlerAddProductCart = (product) => {
        // Recordar que al utilizar el metodo find en un arreglo, se obtiene solamente un elemento que cumpla con la condición que cumpla dentro de la función definida

        // Verifica si el producto ya está en el carrito.
        const hasItem = cartItems.find((i) => i.product.id === product.id);

        // Se comenta esto para imprimir el producto que ya existe en el carrito, si no existiera, se imprime undefined
        // console.log(hasItem);

        if (hasItem) {
            // Si el producto ya existe, incrementa su cantidad.

            // Actualiza el estado de CartItems, excluyendo el item que ya existe en el carrito

            // Puedes decomentar esta forma de actualizar setCartItems para observar el resultado
            // setCartItems([
            //     ...cartItems.filter((i) => i.product.id !== product.id),
            //     {
            //         product,
            //         quantity: hasItem.quantity + 1,
            //     }
            // ])

            // Se utiliza el metodo map en lugar de un filter, porque alteraria el orden de los items en el que se agrega al carrito
            setCartItems(
                cartItems.map((i) => {
                    // Si el producto por su id, existe, solamente su cantidad aumentaria en 1
                    if (i.product.id === product.id) {
                        i.quantity = i.quantity + 1;
                    }
                    return i; // Devuelve el objeto actualizado.
                })
            );
        } else {
            // Si no existe, añade el nuevo producto con cantidad 1 mediante la actualización de CartItems.
            setCartItems([
                // Spread se utiliza para obtener una copia de los elementos que contiene cartItems hasta el momento
                ...cartItems,
                // Un objeto que contiene el nuevo producto
                {
                    product,
                    quantity: 1, // Inicializa la cantidad en 1.
                }
            ]);
        }
    }

    // Manejador para eliminar un producto del carrito.
    const handlerDeleteProductCart = (id) => {
        // Filtra el carrito para eliminar el producto cuyo id coincida.
        setCartItems([
            ...cartItems.filter((i) => i.product.id !== id)
        ]);
    }

    return (
        <>
            {/* Se aplica un margen vertical de 4 unidades al contenedor principal */}
            <div className="container my-4">
                <h3>Cart App</h3>
                {/* Renderiza la vista del catálogo y pasa el manejador de añadir productos */}
                <CatalogView handler={handlerAddProductCart} />

                {/* Solo renderiza el carrito si hay productos en él */}
                {/* El operador or || sigue la siguiente logica: Si la cantidad de elementos de cartItems es menor o igual a 0 (length es una propiedad que podria no existir si no hubiera elementos en el arreglo) no se renderiza el elemento <div> que contiene <CartView> */}
                {cartItems?.length <= 0 || (
                    <div className="my-4 w-50">
                        {/* Renderiza la vista del carrito y pasa el manejador de eliminar productos */}
                        <CartView items={cartItems} handlerDelete={handlerDeleteProductCart} />
                    </div>
                )}
            </div>
        </>
    )
}

// La aplicación web puede almacenar los productos que el usuario ha agregado en el carrito y no se pierden al cargar la pagina web
// Pero aun hay un error que se debe solucionar: si no hay items en el carrito y se vuelve a cargar la pagina web, el ultimo producto eliminado del carrito se añade al carrito