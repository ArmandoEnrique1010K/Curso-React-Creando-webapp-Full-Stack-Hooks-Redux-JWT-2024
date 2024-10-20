// Se define una función flecha 'sayHello' que acepta dos parámetros: 'name' y 'age'.
// Ambos parámetros tienen valores predeterminados: 'Pepe' para 'name' y 0 para 'age'.
// La función devuelve una cadena formateada utilizando un template literal.
const sayHello = (name = "Pepe", age = 0) =>
  `Hola mundo function! ${name} edad ${age}`;

// En la función, se omite el termino return, porque el cuerpo de la función ocupa 1 sola línea de código, de lo contrario se tendria que utilizar llaves y return.

// Se define una función flecha 'add' que acepta dos parámetros: 'a' y 'b'.
// Ambos parámetros tienen un valor predeterminado de 0.
// La función devuelve la suma de 'a' y 'b'.
const add = (a = 0, b = 0) => a + b;

// Se llama a la función 'sayHello' con los argumentos 'Andres' y 10 (el orden importa).
// El resultado de la función se almacena en la variable 'result'.
const result = sayHello("Andres", 10);

// Si se llama a una función sin pasarle argumentos requeridos, simplemente se pasa un undefined o los valores por defecto (si fueron definidos)

// Se imprime en la consola el valor de 'result', que contiene el resultado de la llamada a 'sayHello'.
// Salida: 'Hola mundo function! Andres edad 10'
console.log(result);

// Se llama a la función 'add' con los valores 10 y 5 y se imprime el resultado en la consola.
// Salida: 15
console.log(add(10, 5));
