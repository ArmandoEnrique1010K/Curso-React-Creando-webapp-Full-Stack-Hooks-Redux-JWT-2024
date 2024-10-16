// Se define una constante 'average' que contiene el valor promedio.
const average = 5.9;

// Se declara una variable 'status2' para almacenar el estado del promedio.
let status2 = "";

// Se utiliza el operador ternario para evaluar si el promedio es mayor o igual a 5.5.
// Si la condición es verdadera, se asigna 'Aprobado' a 'status2', de lo contrario, se asigna 'Rechazado'.
status2 = average >= 5.5 ? "Aprobado" : "Rechazado";

// Código equivalente usando una estructura 'if-else' (comentado para referencia).
// if (average >= 5.5) {
//     status2 = 'Aprobado';
// } else {
//     status2 = 'Rechazado';
// }

// Se imprime el resultado del estado basado en el promedio.
console.log(`Resultado: ${status2}`); // Salida: 'Resultado: Aprobado'

// Se declara una variable 'max' para almacenar el número mayor.
let max = 0;

// Se definen tres constantes 'a', 'b' y 'c' con valores numéricos.
const a = 5;
const b = 8;
const c = 12;

// Se utiliza el operador ternario para encontrar el número mayor entre 'a' y 'b'.
// Si 'a' es mayor que 'b', se asigna 'a' a 'max', de lo contrario, se asigna 'b'.
max = a > b ? a : b;

// Se compara el valor actual de 'max' con 'c' para encontrar el número mayor definitivo.
// Si 'max' es mayor que 'c', se mantiene el valor de 'max', de lo contrario, se asigna el valor de 'c' a 'max'.
max = max > c ? max : c;

// Se imprime el número mayor encontrado.
console.log(`El número mayor es ${max}`); // Salida: 'El número mayor es 12'
