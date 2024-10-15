// Se define una función flecha 'sayHello' que acepta dos parámetros: 'name' y 'age'.
// Ambos parámetros tienen valores predeterminados: 'Pepe' para 'name' y 0 para 'age'.
// La función devuelve una cadena formateada utilizando un template literal.
const sayHello = (name = "Pepe", age = 0) =>
  `Hola mundo function! ${name} edad ${age}`;

// Se define una función flecha 'add' que acepta dos parámetros: 'a' y 'b'.
// Ambos parámetros tienen un valor predeterminado de 0.
// La función devuelve la suma de 'a' y 'b'.
const add = (a = 0, b = 0) => a + b;

// Se llama a la función 'sayHello' con los argumentos 'Andres' y 10.
// El resultado de la función se almacena en la variable 'result'.
const result = sayHello("Andres", 10);

// Se imprime en la consola el valor de 'result', que contiene el resultado de la llamada a 'sayHello'.
// Salida: 'Hola mundo function! Andres edad 10'
console.log(result);

// Se llama a la función 'add' con los valores 10 y 5 y se imprime el resultado en la consola.
// Salida: 15
console.log(add(10, 5));
