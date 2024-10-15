// Se crea un objeto 'user' que contiene información sobre un usuario.
const user = {
  username: "andres", // Nombre de usuario
  email: "correo@google.com", // Correo electrónico
  age: 20, // Edad del usuario
  ranking: 9, // Clasificación del usuario
};

// Comentarios sobre la forma tradicional de acceder a las propiedades del objeto.
// const username = user.username; // Asignación del nombre de usuario a una variable
// const ranking = user.ranking;   // Asignación del ranking a una variable
// const age = user.age;           // Asignación de la edad a una variable

// Se utiliza la desestructuración de objetos para extraer propiedades específicas del objeto 'user'.
// Esto permite asignar las propiedades directamente a variables con el mismo nombre.
const { username, ranking, age } = user;

// Se imprime un mensaje que incluye el nombre de usuario y su edad.
console.log(`${username} tiene ${age} de edad`); // Salida: 'andres tiene 20 de edad'

// Se imprime el ranking del usuario.
console.log(ranking); // Salida: 9
