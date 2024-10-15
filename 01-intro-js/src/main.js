// httpClient
//     .then(response => response.json())
//     .then(data => console.log(data));

// Definimos una función asíncrona para obtener todos los usuarios
const findAllUsers = async () => {
  // Esperamos la respuesta de la solicitud HTTP GET a la API de usuarios
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Convertimos la respuesta en formato JSON
  const users = await response.json();

  // Creamos un elemento <ul> donde se agregarán los nombres de los usuarios
  const ul = document.createElement("ul");

  // Recorremos la lista de usuarios obtenidos
  users.forEach((user) => {
    // Creamos un nuevo elemento <li> para cada usuario
    const li = document.createElement("li");

    // Asignamos el nombre del usuario al texto del elemento <li>
    li.innerText = user.name;

    // Agregamos el elemento <li> al <ul>
    ul.append(li);

    // Mostramos el nombre del usuario en la consola
    console.log(user.name);
  });

  // Agregamos el elemento <ul> al elemento con ID 'root' en el DOM
  document.getElementById("root").append(ul);
};

// Llamamos a la función para obtener y mostrar los usuarios
findAllUsers();

// Esta línea se ejecuta inmediatamente después de la llamada a la función
console.log("Hola que tal!");
