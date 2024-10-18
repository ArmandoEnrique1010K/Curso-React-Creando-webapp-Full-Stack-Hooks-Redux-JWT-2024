// Forma simplificada para manejar la respuesta de la solicitud y mostrar los datos obtenidos en la consola
// const httpClient = fetch("https://jsonplaceholder.typicode.com/users");
// httpClient
//     .then(response => response.json())
//     .then(data => console.log(data));

// Los terminos async y await permiten manejar promesas de una manera más intuitiva y legible.
// async sirve para definir una función que siempre devuelve una promesa
// await se utiliza en funciones de tipo async para esperar que una promesa se resuelva

// Definimos una función asíncrona con async para obtener la respuesta en formato json
const findAllData = async () => {
  // await sirve para esperar a que se resuelva la función fetch para obtener la respuesta
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Esperamos a que se convierta la respuesta en formato JSON
  return await response.json();
};

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

// Esperamos a que llame a la función findAllData y se asigna el valor devuelto en la constante data
const data = await findAllData();

// Mostramos el valor obtenido en la consola (la lista de usuarios)
console.log(data);

// Llamamos a la función para obtener y mostrar los usuarios
findAllUsers();

// Esta línea se ejecuta inmediatamente después de la llamada a la función
console.log("Hola que tal!");

// El resultado es una lista de nombres de usuarios en el documento HTML, el codigo fuente generado se puede ver desde las herramientas de desarrollo (pulsa F12 en el navegador, sección Elements)
