// Se crea un array 'products' con una lista inicial de productos.
const products = ["mesa", "silla", "notebook", "teclado"];

// Se utiliza el método 'concat' para crear un nuevo array 'products2',
// que combina los elementos del array 'products' con nuevos elementos.
const products2 = products.concat(["pantalla lcd", "sony tv"]);

// Se crea un nuevo array 'fruits' con una lista de frutas.
const fruits = ["peras", "manzanas", "sandias", "frutillas"];

// Se crea un array 'mercado' utilizando el operador de propagación (...).
// Recuerda que Spread permite obtener todos los elementos iterables de un arreglo
// const mercado = [...products]

// Esto permite combinar los elementos de 'products2', 'fruits' y otros elementos adicionales en un solo array.
const mercado = [...products2, ...fruits, "lechuga", "papas", "uvas"];

// Se crea un array 'mercado2' utilizando el método 'concat' de forma encadenada.
// Se combina 'products2', 'fruits' y los elementos adicionales en un solo array.
const mercado2 = products2.concat(fruits).concat("lechuga", "papas", "uvas");

// Se imprime el array 'products2' que contiene los productos combinados.
console.log(products2); // Salida: ['mesa', 'silla', 'notebook', 'teclado', 'pantalla lcd', 'sony tv']

// Se imprime el array 'mercado2' que contiene todos los elementos combinados.
console.log(mercado2); // Salida: ['mesa', 'silla', 'notebook', 'teclado', 'pantalla lcd', 'sony tv', 'peras', 'manzanas', 'sandias', 'frutillas', 'lechuga', 'papas', 'uvas']
