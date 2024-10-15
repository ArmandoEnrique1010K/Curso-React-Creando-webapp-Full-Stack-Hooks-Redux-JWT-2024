// Se crea un array 'products' con una lista de productos iniciales.
const products = ["mesa", "silla", "notebook", "teclado"];

// Se agregan dos nuevos productos al array utilizando el método 'push'.
// 'push' añade elementos al final del array.
products.push("pantalla lcd", "sony tv");

// Se imprime el array actualizado con todos los productos.
console.log(products); // Salida: ['mesa', 'silla', 'notebook', 'teclado', 'pantalla lcd', 'sony tv']

// Se utiliza el método 'forEach' para iterar sobre cada elemento del array y se imprime cada producto.
// 'forEach' ejecuta una función para cada elemento del array.
products.forEach((el) => console.log(el));

// Se utiliza un bucle 'for...of' para iterar sobre cada elemento del array y se imprime cada producto.
// 'for...of' es una forma sencilla de recorrer los elementos de un array.
for (const prod of products) {
  console.log(prod);
}

// Se utiliza un bucle 'for' tradicional para recorrer el array mediante índices.
// Se accede a cada elemento usando el índice 'i' y se imprime el producto correspondiente.
for (let i = 0; i < products.length; i++) {
  const element = products[i];
  console.log(element);
}

// Se imprime el primer elemento del array accediendo a él mediante su índice [0].
console.log(products[0]); // Salida: 'mesa'
