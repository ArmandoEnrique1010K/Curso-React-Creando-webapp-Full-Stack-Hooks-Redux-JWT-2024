// Se declara una variable 'firstname' usando let y se le asigna el valor 'Pepe'.
let firstname = "Pepe";

// Se reasigna la variable 'firstname' con un nuevo valor 'andres'.
firstname = "andres";

// Se declara una constante 'lastname' usando const y se le asigna el valor 'Doe'.
// Al ser una constante, no se puede reasignar un nuevo valor a esta variable.
const lastname = "Doe";

// Intentar reasignar un valor a una constante provocaría un error.
// Por eso, la siguiente línea está comentada:
// lastname = 'Roe';

// Se declara una constante 'condicion' con un valor booleano 'true'.
const condicion = true;

// Se inicia un bloque condicional que se ejecutará si 'condicion' es verdadera.
if (condicion) {
  // Dentro del bloque if, se declara una nueva constante 'lastname' con el valor 'Ale'.
  // Esta constante es diferente a la que se declaró fuera del bloque if debido al alcance del bloque.
  const lastname = "Ale";
  // Se imprime en la consola el valor de la constante 'lastname' definida dentro del bloque if.
  console.log(lastname); // Salida: 'Ale'
}

// Se imprime en la consola un mensaje que incluye el valor de 'firstname' y 'lastname'.
// Se utiliza una plantilla de cadena (template literal) para insertar las variables en el mensaje.
console.log(`Hola mundo!!!! ${firstname} - ${lastname}`); // Salida: 'Hola mundo!!!! andres - Doe'
