// JSONPlaceholder posee una API pública a de usuarios, representada por un arreglo de objetos que contiene como propiedades: id, name, username, email, etc, por cada usuario de la lista.

// Hacemos una solicitud HTTP GET a la API pública de usuarios de JSONPlaceholder con la función pública fetch
const httpClient = fetch("https://jsonplaceholder.typicode.com/users");

// El método then sirve para llamar a una función asincrona
httpClient.then((response) => {
  // Imprime el objeto response en la consola
  console.log(response);
});

// El objeto Response que se obtiene en la consola contiene toda la información de la respuesta HTTP incluyendo el status (200 indica que la solicitud fue exitosa) y el body (cuerpo de la respuesta, es un ReadableStream que necesita ser convertido a un formato JSON)

// Convierte la respuesta del objeto response a JSON y luego se anida un metodo then para pasar la respuesta
// httpClient.then(response => {
//     response.json().then(data => {
//         console.log(data)
//     });
// });

// Forma simplificada
// Usamos el método then para manejar la respuesta de la solicitud
httpClient
  .then((response) => response.json()) // Convertimos la respuesta en formato JSON
  .then((data) => console.log(data)); // Mostramos los datos obtenidos en la consola

// Esta línea se ejecuta inmediatamente después de que se inicia la solicitud, sin esperar la respuesta
console.log("Hola que tal!");

// Como resultado, primero se imprime el mensaje "Hola que tal!" y luego la lista de usuarios. Las operaciones asincronas no bloquean la ejecución del código.
