// Se crea un objeto 'user' que contiene información sobre un usuario.
const user = {
  username: "andres", // Nombre de usuario
  email: "correo@google.com", // Correo electrónico
  age: 20, // Edad del usuario
  ranking: 9, // Clasificación del usuario
};

// Se define una función 'detail' que toma un objeto como argumento.
// Dentro de los paréntesis de la función, se utiliza desestructuración para extraer las propiedades 'username' y 'email' del objeto recibido.
const detail = ({ username, email }) => {
  // Se imprime un mensaje que incluye el nombre de usuario y su correo electrónico.
  console.log(`El detalle del usuario ${username} con correo ${email}`);
};

// Se llama a la función 'detail' pasando el objeto 'user' como argumento.
// Las propiedades 'username' y 'email' del objeto 'user' serán extraídas y utilizadas en la función.
detail(user); // Salida: 'El detalle del usuario andres con correo correo@google.com'
