// Hacemos una solicitud HTTP GET a la API de usuarios de JSONPlaceholder
const httpClient = fetch("https://jsonplaceholder.typicode.com/users");

// httpClient.then(response => {
//     // console.log(response)
//     response.json().then(data => {
//         console.log(data)
//     });
// });

// Usamos el método then para manejar la respuesta de la solicitud
httpClient
  .then((response) => response.json()) // Convertimos la respuesta en formato JSON
  .then((data) => console.log(data)); // Mostramos los datos obtenidos en la consola

// Esta línea se ejecuta inmediatamente después de que se inicia la solicitud, sin esperar la respuesta
console.log("Hola que tal!");
