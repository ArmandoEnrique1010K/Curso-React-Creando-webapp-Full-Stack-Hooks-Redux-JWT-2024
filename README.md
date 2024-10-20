# Curso-React-Creando-webapp-Full-Stack-Hooks-Redux-JWT-2024

Este repositorio contiene los proyectos con comentarios explicativos que se desarrollaron a lo largo del curso de Udemy React & Spring Boot: Creando Webapp Full Stack 2024, que tiene una duración de 39,5 horas.

Algunos de estos proyectos pueden ser complejos, es por ello que se han divivido en fases de desarrollo, el cual lleva la siguiente sintaxis para el nombre: "(numero)-(nombre)-(hasta el video)".

## Crear un proyecto con vite

Para realizar esto, introduce en una terminal los siguientes comandos

```cmd
cd <<Ruta_de_la_carpeta_contenedora>>
npm create vite@latest
<<Nombre_del_proyecto>>
React
JavaScript
cd <<Nombre_del_proyecto>>
npm install
```

Reemplaza `<<Ruta_de_la_carpeta_contenedora>>` por la ruta de la carpeta que contiene la barra de direcciones del explorador de Windows y `<<Nombre_del_proyecto>>` por el nombre que llevará la carpeta del proyecto.

Opcionalmente puedes introducir el comando `ls` para verificar si en la carpeta del proyecto se encuentra el archivo `package.json`, este contiene la lista de dependencias que se van a instalar.

Por defecto, al crear un nuevo proyecto, se genera los archivos `index.html`, `app.css`, `app.jsx`, `index.css`, `main.jsx`, y la carpeta `assets`.

## Introducción a  JavaScript

**Proyecto**: `01-intro-js`

Aplica la sintaxis actualizada de JavaScript ES6, incluye los conceptos fundamentales y tecnicas que se aplicaran en el desarrollo web con React:

- Variables, constantes, funciones de flecha, objetos que incluyen métodos propios y arreglos.

- Operador Spread en objetos y arreglos, operador Optional Chaining y operador Ternario para las condiciones.

- Desestructuración de objetos y arreglos, desestructuración de objetos en una función.

- Métodos para manipular arreglos: concat, forEach, map, find, filter, includes y some.

- Como importar y exportar módulos y como aplicar la exportación por defecto.

- Promesas y funciones asincronas con async y await.

- Función global fetch para obtener datos de una API externa.

- Introducción a la manipulación del DOM (Document Object Model).

|                        | Archivos y carpetas*                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| **➕ Creados (17)**     | `main.js`, `01-variables-constantes.js`, `02-funcion.js`, `03-objetos.js`, `04-objetos-spread-clonar.js`, `05-optional-chaning.js`, `06-operador-ternario.js`, `07-arreglos.js`, `08-arregles-spread.js`, `09-objetos-destructuring.js`, `10-objetos-destructuring2.js`, `11-arreglos-destructuring.js`, `12-arreglos-funciones.js`, `invoices.js`, `13-importar-exportar.js`, `14-promesas.js` y `15-fetch-api.js` |
| **🔃 Modificados (1)** | `index.html`                                                                                                                                                                                                                                                                                                                                                                                                        |
| **🗑️ Eliminados (5)** | `assets`*, `index.css`, `app.css`, `main.jsx`, `app.jsx`                                                                                                                                                                                                                                                                                                                                                            |

## Introducción a React

**Proyecto**: `02-intro-react`

Aplica los conceptos fundamentales de React como el uso de componentes propios y la estructura de componentes de una aplicación web de prueba con React:

- Demostración de la creación de elementos HTML por detras de React utilizando `React.createElement` y de forma directa en un archivo `jsx`.

- Instanciar un componente funcional y renderizarlo en el navegador.

- Pasar propiedades (props) entre un componente padre a un componente hijo.

- Definición del tipo de dato asignado a una prop mediante el uso de la libreria `prop-types`.

- Asignación del valor por defecto de una prop utilizando default props. 

- Aplicación de la técnica de composición de componentes.

|                        | Archivos y carpetas*                                                            |
| ---------------------- |:-------------------------------------------------------------------------------:|
| ➕ **Creados (5)**      | `02-main.jsx`, `HelloWorldApp.jsx`, `Title.jsx`, `UserDetails.jsx` y `Book.jsx` |
| 🔃 **Modificados (2)** | `index.html` y `main.jsx`                                                       |
| 🗑️ **Eliminados (4)** | `assets`*, `index.css`, `app.css` y `app.jsx`                                   |

**Comandos para instalar librerias externas**:

```powershell
npm install prop-types
```

## Aplicación contador

**Proyecto**: `03-counter-app`

Una variación de la aplicación de prueba que se genera por defecto en React, explica como se implementa el hook useState y como el valor de una variable de estado se actualiza con un clic en la aplicación web.

- Definición de una variable de estado y su función para modificarla utilizando useState.

- Manejo de un evento onClick para ejecutar una función al hacer clic en un botón.

- Actualización de la variable de estado en el navegador.

|                        | Archivos                                      |
| ---------------------- |:---------------------------------------------:|
| **➕ Creados (1)**      | `CounterApp.jsx`                              |
| **🔃 Modificados (2)** | `index.html` y `main.jsx`                     |
| **🗑️ Eliminados (4)** | `assets`*, `index.css`, `app.css` y `app.jsx` |

**Comandos para instalar librerias externas**:

```powershell
npm install prop-types
```

## Aplicación factura

**Proyecto 1**: `04-invoice-app-55`

Proyecto de una aplicación de tipo factura, en el que se aplican todos los conceptos estudiados hasta el momento.

- Estructura de componentes de una aplicación web con React (data, service y components).

- Definición de datos estaticos de la aplicación web.

- Maquetación de los datos en la vista de una aplicación web.

- Aplicación de estilos con Bootstrap como contenedores, filas, columnas, tarjetas, listas y tablas.

|                        | Archivos                                         |
| ---------------------- |:------------------------------------------------:|
| **➕ Creados (3)**      | `invoice.js`, `getInvoice.js` e `InvoiceApp.jsx` |
| **🔃 Modificados (2)** | `index.html` y `main.jsx`                        |
| **🗑️ Eliminados (4)** | `assets`*, `index.css`, `app.css` y `app.jsx`    |

**Proyecto 2**: `04-invoice-app-61`

Aplica un nuevo servicio para calcular el total utilizando los datos, la composición de componentes para dividir el componente principal en subcomponentes y prop-types para los tipos de props que se pasan entre componentes.

| Archivos    |                                                                                                       |
|:-----------:|:-----------------------------------------------------------------------------------------------------:|
| Creados     | ClientView.jsx, CompanyView.jsx, InvoiceView.jsx, ListItemsView.jsx, RowItemView.jsx y TotalView.jsx. |
| Modificados | getInvoice.js, InvoiceApp.jsx                                                                         |

Archivos creados: ClientView.jsx, CompanyView.jsx, InvoiceView.jsx, ListItemsView.jsx, RowItemView.jsx, TotalView.jsx.

Archivos modificados: getInvoice.js, InvoiceApp.jsx

Archivos eliminados:

|                        | Archivos             |
| ---------------------- |:--------------------:|
| **➕ Creados (17)**     | CounterApp.jsx       |
| **🔃 Modificados (1)** | index.html, main.jsx |
| **🗑️ Eliminados (5)** |                      |









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

- FALTA COMENTARIOS

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