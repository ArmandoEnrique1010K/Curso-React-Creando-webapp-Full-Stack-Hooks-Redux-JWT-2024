# Curso-React-Creando-webapp-Full-Stack-Hooks-Redux-JWT-2024

Este repositorio contiene los proyectos con comentarios explicativos que se desarrollaron a lo largo del curso de Udemy React & Spring Boot: Creando Webapp Full Stack 2024, que tiene una duración de 39,5 horas.

Algunos de estos proyectos pueden ser complejos, es por ello que se han divivido en fases de desarrollo, el cual lleva la siguiente sintaxis para el nombre: "(numero)-(nombre)-(hasta el video)".

## Introducción a  JavaScript

`01-intro-js`

Aplica la sintaxis actualizada de JavaScript ES6, incluye los conceptos fundamentales y tecnicas que se aplicaran en el desarrollo web con React:

- Variables, constantes, funciones de flecha, objetos que incluyen métodos propios y arreglos.

- Operador Spread en objetos y arreglos, operador Optional Chaining y operador Ternario para las condiciones.

- Métodos principales en arreglos: map, find, filter, includes y some.

- Importar y exportar módulos y exportación por defecto.

- Promesas y funciones asincronas con async y await.

- Función global fetch para obtener datos de una API externa.

- Manipulación del DOM (Document Object Model).

|                 | Archivos                                                                                          |
| --------------- |:-------------------------------------------------------------------------------------------------:|
| Creados (16)    | main.js, invoices.js, 01-variables-const.js, 02-function.js, 03-objetos.js, ... , 15-fetch-api.js |
| Modificados (2) | index.html                                                                                        |

## Introducción a React

`02-intro-react`

- Creación de elementos HTML utilizando React.createElement y de forma directa en un archivo jsx.

- Renderizar un componente.

- El uso de las propiedades (props) que se pasan entre componentes.

- Definición del tipo de dato de las props utilizando la libreria prop-types.

- Definición del valor por defecto de las props utilizando default-props.

- Aplicación de la técnica de composición de componentes.

|                 | Archivos                                                              |
| --------------- |:---------------------------------------------------------------------:|
| Creados (5)     | 02-main.jsx, HelloWorldApp.jsx, Title.jsx, UserDetails.jsx y Book.jsx |
| Modificados (2) | index.html, main.jsx                                                  |

Instalar desde la consola: prop-types

## El estado de React

`03-counter-app`

- Definición de una variable de estado y su función para modificarla utilizando useState.

- Manejo de un evento onClick para ejecutar una función al hacer clic en un botón.

- Actualización de la variable de estado en el navegador.

|                 | Archivos             |
| --------------- |:--------------------:|
| Creados (5)     | CounterApp.jsx       |
| Modificados (2) | index.html, main.jsx |

Instalar desde la consola: prop-types

Una variación de la aplicación de prueba que se genera por defecto en React, explica como se implementa el hook useState y como el valor de una variable de estado se actualiza con un clic en la aplicación web.

## Aplicación factura

`04-invoice-app-55`

Separa los componentes de la aplicación: data, service y components, además utiliza datos estaticos para maquetarlos en la aplicación web y se aplican estilos con Bootstrap.

---

`04-invoice-app-61`

Aplica un nuevo servicio para calcular el total utilizando los datos, la composición de componentes para dividir el componente principal en subcomponentes y prop-types para los tipos de props que se pasan entre componentes.

| Archivos    |                                                                                                       |
|:-----------:|:-----------------------------------------------------------------------------------------------------:|
| Creados     | ClientView.jsx, CompanyView.jsx, InvoiceView.jsx, ListItemsView.jsx, RowItemView.jsx y TotalView.jsx. |
| Modificados | getInvoice.js, InvoiceApp.jsx                                                                         |

Archivos creados: ClientView.jsx, CompanyView.jsx, InvoiceView.jsx, ListItemsView.jsx, RowItemView.jsx, TotalView.jsx.

Archivos modificados: getInvoice.js, InvoiceApp.jsx

Archivos eliminados:

`04-invoice-app-67`

Se modifica el componente principal para incluir un formulario en la aplicación web para agregar un nuevo producto, implica el uso de useState, eventos que llaman funciones, validaciones de campos de formularios y actualizaciones de estados.

| Archivos    |                |
|:-----------:|:--------------:|
| Modificados | InvoiceApp.jsx |

Archivos creados: 

Archivos modificados: InvoiceApp.jsx,

Archivos eliminados:

`04-invoice-app-71`

Introduce el hook useEffect para ejecutar una función cuando se renderiza el componente principal y cuando cambia el valor de los estados, se utiliza un solo useState para todos los campos del formulario, por otro lado se modifica el servicio para calcular el total para que funcione con el hook useEffect.

| Archivos    |                               |
|:-----------:|:-----------------------------:|
| Modificados | getInvoice.js, InvoiceApp.jsx |

Archivos creados:

Archivos modificados: InvoiceApp.jsx, getInvoice.js, 

Archivos eliminados:

`04-invoice-app-75`

Separa el formulario en un nuevo componente, eso incluye las funciones asociadas en el formulario, añade un boton para mostrar u ocultar el formulario y un boton para eliminar un producto de la factura. además se agregan prop-types para funciones.

| Archivos    |                                                                        |
|:-----------:|:----------------------------------------------------------------------:|
| Creados     | FormItemsView.jsx                                                      |
| Modificados | InvoiceApp.jsx, ListItemsView.jsx, RowItemView.jsx y TotalItemView.jsx |

Archivos creados: FormItemsView.jsx,

Archivos modificados: InvoiceApp.jsx, ListItemsView.jsx, RowItemView.jsx, TotalItemView.jsx

Archivos eliminados:

## Aplicación carro de compras

`05-cart-app-82`

Comienza definiendo los datos iniciales del catalogo de producto y luego los maqueta en la aplicación web, además utiliza estilos de Bootstrap y se utiliza un useEffect para obtener los datos.

`05-cart-app-86`

Divide el componente principal de la aplicación en subcomponentes, además añade un  estado para el carro de compras y un evento onclick en cada botón del producto para agregarlo al carro, de tal manera que actualice su estado.

Archivos creados: CartView, CatalogView, ProductCardView

Archivos modificados: CartApp

`05-cart-app-90`

Al agregar un producto 2 veces en el carro de compras, se actualiza la cantidad; tambien se implementa un botón para eliminar un producto y un servicio para actualizar el precio total del carro de compras. Por otro lado, los datos de los productos del carrito se guardan en un sessionStorage.

Archivos modificados: productService.js, CartApp, CartView,

`05-cart-app-95`

Se introduce el hook useReducer y las función reducer, para manejar las actualizaciones de estado: agregar producto, actualizar cantidad y eliminar producto. 

Tambien se traslada toda la logica de JavaScript del componente principal en un hook personalizado.

Archivos modificados: CartApp.jsx,

Archivos agregados: itemsActions, itemsReducer, useItemsCart, CartView

`05-cart-app-100`

Se introduce React Router para el manejo de rutas en la aplicación web,  el hook useNavigate para las navegación mediante un botón, se implementa un componente para la barra de navegación y se divide la logica de la definición de rutas en un nuevo componente.

Archivos modificados: main.jsx, CartApp, CartView, productCardView,

Archivos creados: Navbar, CartRoutes

## Aplicación usuarios y login

106

- Define la estructura de la aplicación, compuesta por 4 componentes, 

- Se introduce unos datos de prueba

- El estado formulario se maneja de forma interna, para los campos y el boton para subir el formulario nada más imprime los datos del formulario en la consola.

112

- Implementa las funcionalidades de agregar, editar y eliminar usuario.

- Además operadores ternarios para mostrar el texto del boton, un mensaje si no hay usuarios

- Se implementa useReducer

- Componentes modificados: UserForm, UserRow, UsersList, UsersApp

- Componentes creados: usersReducer

- Para editar un usuario, se requiere que introduzca la contraseña del usuario (esto se corregira en la siguiente sección)

- ARCHIVOS CREADOS: usersReducer

- ARCHIVOS MODIFICADOS: usersApp, usersList, userRow, userForm, 

117

- Se omite el campo password al momento de editar un usuario

- Mensajes con Sweetalert en lugar de Alert

- Hook personalizado

- Funciones para mostrar u ocultar el formulario

- Componentes modificados: UserForm, UserRow, UsersList, usersReducer, UsersApp

- Componentes creados useUsers.

123

- Ventana modal en lugar de un formulario en la misma pagina web
- Estilos para una ventana modal, se separa la ventana modal en un nuevo componente
- Se define un componente de tipo pagina web para contener la pagina de login en una capa auth/pages
- Paginas web para iniciar sesión y mostrar la lista de usuarios.
- Puedes elegir entre rederizar el formulario de inicio de sesión o la lista de usuarios para pruebas
- COMPONENTES CREADOS: LoginPage, UserModalForm, UsersPage, styles.css
- COMPONENTES MODIFICADOS: UserApp,  main.jsx

129

- Utiliza useReducer para manejar el estado de login

- sessionStorage para almacenar las credenciales del usuario (datos estaticos de un unico usuario)

- logica para iniciar y cerrar sesión en la aplicación web

- Navbar que se muestra si el usuario ha iniciado sesión

- Hook personalizado para la logica para el login

- Servicio que contiene las credenciales del usuario estatico

- Inicia sesión con las credenciales "admin" y "12345"

- Archivos creados: loginReducer, Navbar, useAuth, authService

- Archivos modificados: UsersApp, LoginPage, 

## Rutas en la aplicación usuarios

- Se define las rutas para la aplicación usuarios:

- Se agrega un componente para el registro de usuarios por medio de un formulario (no una ventana modal)

- Validación del campo email

- Ruta dinamica por el id

- Archivos creados: RegisterPage, UsersPage, UserRoutes

- Archivos modificados: useAuth, Navbar, UserForm, UserRow, UsersList, useUsers, main,UsersApp

## Contexto de React en la aplicación usuarios

140

143

## API REST carro de compras

162

## API REST usuarios

174

## Comunicación entre frontend y backend carro de compras

178

## Comunicación entre frontend y backend usuarios

183

## Validaciones en API REST usuarios

185

## Integrando validación desde el backend al frontend usuarios

191

## Spring Security y JWT en API REST usuarios

-

## Integrando JWT desde el backend al frontend usuarios

-

## Redux en aplicación usuarios

-

## Paginación en aplicación usuarios