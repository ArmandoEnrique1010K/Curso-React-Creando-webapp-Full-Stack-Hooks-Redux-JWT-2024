# Curso-React-Creando-webapp-Full-Stack-Hooks-Redux-JWT-2024

Este repositorio contiene los proyectos con comentarios explicativos que se desarrollaron a lo largo del curso de Udemy React & Spring Boot: Creando Webapp Full Stack 2024, que tiene una duración de 39,5 horas.

Algunos de estos proyectos pueden ser complejos, es por ello que se han divivido en fases de desarrollo, el cual lleva la siguiente sintaxis para el nombre: "(numero)-(nombre)-(hasta el video)".

---

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

---

## Introducción a  JavaScript ⭐

Aplica la sintaxis actualizada de JavaScript ES6, incluye los conceptos fundamentales y tecnicas que se aplicaran en el desarrollo web con React.

**Proyecto**: `01-intro-js`

- Variables, constantes, funciones de flecha, objetos que incluyen métodos propios y arreglos.

- Operador Spread en objetos y arreglos, operador Optional Chaining y operador Ternario para las condiciones.

- Desestructuración de objetos y arreglos, desestructuración de objetos en una función.

- Métodos para manipular arreglos: concat, forEach, map, find, filter, includes y some.

- Como importar y exportar módulos y como aplicar la exportación por defecto.

- Promesas y funciones asincronas con async y await.

- Función global fetch para obtener datos de una API externa.

- Introducción a la manipulación del DOM (Document Object Model).

|                        | Archivos                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| **➕ Creados (17)**     | `main.js`, `01-variables-constantes.js`, `02-funcion.js`, `03-objetos.js`, `04-objetos-spread-clonar.js`, `05-optional-chaning.js`, `06-operador-ternario.js`, `07-arreglos.js`, `08-arregles-spread.js`, `09-objetos-destructuring.js`, `10-objetos-destructuring2.js`, `11-arreglos-destructuring.js`, `12-arreglos-funciones.js`, `invoices.js`, `13-importar-exportar.js`, `14-promesas.js` y `15-fetch-api.js` |
| **🔃 Modificados (1)** | `index.html`                                                                                                                                                                                                                                                                                                                                                                                                        |
| **🗑️ Eliminados (4)** | `index.css`, `app.css`, `main.jsx`, `app.jsx`                                                                                                                                                                                                                                                                                                                                                                       |

---

## Introducción a React ⭐

Aplica los conceptos fundamentales de React como el uso de componentes propios y la estructura de componentes de una aplicación web de prueba con React.

**Proyecto**: `02-intro-react`

- Demostración de la creación de elementos HTML por detras de React utilizando `React.createElement` y de forma directa en un archivo `jsx`.

- Instanciar un componente funcional y renderizarlo en el navegador.

- Pasar propiedades (props) entre un componente padre a un componente hijo.

- Definición del tipo de dato asignado a una prop mediante el uso de la libreria `prop-types`.

- Asignación del valor por defecto de una prop utilizando default props. 

- Aplicación de la técnica de composición de componentes.

- Lista de comandos para instalar librerias externas: `npm install prop-types`

|                        | Archivos                                                                        |
| ---------------------- |:-------------------------------------------------------------------------------:|
| ➕ **Creados (5)**      | `02-main.jsx`, `HelloWorldApp.jsx`, `Title.jsx`, `UserDetails.jsx` y `Book.jsx` |
| 🔃 **Modificados (2)** | `index.html` y `main.jsx`                                                       |
| 🗑️ **Eliminados (3)** | `index.css`, `app.css` y `app.jsx`                                              |

Lista de comandos para instalar librerias externas:

```powershell
npm install prop-types
```

---

## Aplicación contador ⭐

Una variación de la aplicación de prueba que se genera por defecto en React, explica como se implementa el hook useState y como el valor de una variable de estado se actualiza con un clic en la aplicación web.

**Proyecto**: `03-counter-app`

- Definición de una variable de estado y su función para modificarla utilizando useState.

- Manejo de un evento onClick para ejecutar una función al hacer clic en un botón.

- Actualización de la variable de estado en el navegador.

|                        | Archivos                           |
| ---------------------- |:----------------------------------:|
| **➕ Creados (1)**      | `CounterApp.jsx`                   |
| **🔃 Modificados (2)** | `index.html` y `main.jsx`          |
| **🗑️ Eliminados (3)** | `index.css`, `app.css` y `app.jsx` |

Lista de comandos para instalar librerias externas:

```powershell
npm install prop-types
```

---

## Aplicación factura ⭐⭐

Proyecto de una aplicación de tipo factura, en el que se aplican todos los conceptos estudiados hasta el momento, además de otros nuevos como la maquetación de datos estaticos, aplicación de estilos con Bootstrap, método reduce para arreglos, manejo de un formulario para agregar un producto, variables de estado para el formulario, el hook useEffect, etc.

Este es un proyecto que consta de 5 fases:

### Fase 1

**Proyecto**: `04-invoice-app-55`

- Estructura de componentes de una aplicación web con React (data, service y components).

- Definición de datos estaticos de la aplicación web.

- Maquetación de los datos en la vista de una aplicación web.

- Aplicación de estilos con Bootstrap como contenedores, filas, columnas, tarjetas, listas y tablas.

|                        | Archivos                                         |
| ---------------------- |:------------------------------------------------:|
| **➕ Creados (3)**      | `invoice.js`, `getInvoice.js` e `InvoiceApp.jsx` |
| **🔃 Modificados (2)** | `index.html` y `main.jsx`                        |
| **🗑️ Eliminados (3)** | `index.css`, `app.css` y `app.jsx`               |

### Fase 2

**Proyecto**: `04-invoice-app-61`

- Definición de un servicio para calcular el total utilizando los datos estáticos con el método reduce.

- Manipulación de los elementos de tipo objeto que contiene un arreglo con el método map, que representa los items de la factura.

- Aplicación de la composición de componentes para dividir el componente principal en subcomponentes.

- Definición de un componente que se renderizara por cada producto de la factura, además se hace uso del atributo key para asignar un id al producto.

- La implementación de prop-types para definir el tipo de dato.

|                        | Archivos                                                                                                          |
|:----------------------:|:-----------------------------------------------------------------------------------------------------------------:|
| **➕ Creados (3)**      | `ClientView.jsx`, `CompanyView.jsx`, `InvoiceView.jsx`, `ListItemsView.jsx`, `RowItemView.jsx` y `TotalView.jsx`. |
| **🔃 Modificados (2)** | `getInvoice.js` y `InvoiceApp.jsx`                                                                                |

Lista de comandos para instalar librerias externas:

```powershell
npm install prop-types
```

### Fase 3

**Proyecto**: `04-invoice-app-67`

- Definición de un formulario en el componente principal para agregar un nuevo producto.

- Definición de variables de estados para cada campo del formulario (producto, precio y cantidad), un estado para la lista de items y un contador.

- Definición de funciones para manejar los eventos `onChange` y `onSubmit` en el formulario.

- Validaciones para los valores introducidos en los campos del formulario.

- Manejo de la lógica para agregar un nuevo item a la factura y mostrarlo en la aplicación web.

|                        | Archivos         |
|:----------------------:|:----------------:|
| **🔃 Modificados (1)** | `InvoiceApp.jsx` |

### Fase 4

**Proyecto**: `04-invoice-app-71`

- Se separa en una nueva función la lógica para calcular el total de los items de la factura

- Se utiliza un solo estado para agrupar los 3 estados de los campos del formulario, además se hace uso de una variable computada para simplificar el código.

- Definición de objeto inicial para asignarle al estado de la factura.

- El uso del hook useEffect para cargar los datos iniciales de la factura cuando se renderiza en el navegador el componente principal y para recalcular el total de los items de la factura.

|                        | Archivos                           |
|:----------------------:|:----------------------------------:|
| **🔃 Modificados (2)** | `getInvoice.js` e `InvoiceApp.jsx` |

### Fase 5

**Proyecto**: `04-invoice-app-75`

- Se traslada todo el formulario en un nuevo componente, incluyendo las funciones asociadas en el formulario.

- Se envia una función de un componente hijo a un componente padre para agregar un producto a la factura, las funciones asociadas a la lista de items se queda en el componente principal.

- Añade un botón para mostrar u ocultar el formulario en la aplicación web.

- Añade un botón para eliminar un producto de la factura por su id.

- Se añade las prop-types en todos los componentes que hace falta.

| Archivos               |                                                                                |
|:----------------------:|:------------------------------------------------------------------------------:|
| **➕ Creados (1)**      | `FormItemsView.jsx`                                                            |
| **🔃 Modificados (4)** | `InvoiceApp.jsx`, `ListItemsView.jsx`, `RowItemView.jsx` y `TotalItemView.jsx` |

---

## Aplicación carro de compras⭐⭐

Proyecto de una aplicación de tipo carro de compras, se aplica la lógica para añadir un producto del catalogo por su id al carrito. Por otro lado se aplican otros conceptos de React como la función reducer y el hook useReducer, la creación de un hook personalizado en el que se almacena toda la parte JavaScript de un componente y la definición de las rutas con React Router.

La parte del frontend de este proyecto consta de 5 fases:

### Fase 1

**Proyecto**: `05-cart-app-82`

- Definición de los datos estaticos para el catalogo de producto.

- Combinación de los hooks useState y useEffect para obtener los datos iniciales.

- Maquetación de los productos en la vista del usuario.

- Implementación de Bootstrap para definir los estilos.

|                        | Archivos                                          |
| ---------------------- |:-------------------------------------------------:|
| **➕ Creados(3)**       | `products.js`, `productService.js`, `CartApp.jsx` |
| **🔃 Modificados (2)** | `index.html`, `main.jsx`                          |
| **🗑️ Eliminados (3)** | `index.css`, `app.css` y `app.jsx`                |

### Fase 2

**Proyecto**: `05-cart-app-86`

- Aplica la composición de componentes para dividir en subcomponentes el componente principal.

- Añade un estado para almacenar los productos que se encuentran dentro del carrito.

- Añade un botón en cada producto para agregarlo al carrito.

- Se implementa la logica para agregar el producto al carrito, pero aun no se agrega la logica para actualizar la cantidad.

- Se añade prop-types para todos los componentes que reciben props.

|                        | Archivos                                                  |
| ---------------------- |:---------------------------------------------------------:|
| **➕ Creados(3)**       | `CartView.jsx`, `CatalogView.jsx` y `ProductCardView.jsx` |
| **🔃 Modificados (2)** | `CartApp.jsx`                                             |

Lista de comandos para instalar librerias externas:

```powershell
npm install prop-types
```

### Fase 3

**Proyecto**: `05-cart-app-90`

- Se implementa el servicio para calcular el precio total de los items en el carrito.

- Se utiliza un operador ternario para mostrar el carrito solamente si hay al menos un producto en el carrito.

- Se mejora la lógica para agregar un producto y se implementa la logica para actualizar la cantidad de un producto al agregar el mismo producto al carrito.

- Añade un botón para eliminar un producto del carrito.

- Los datos de los productos del carrito se guardan en un sessionStorage para que no se pierdan al recargar la pagina.

|                        | Archivos                                           |
| ---------------------- |:--------------------------------------------------:|
| **🔃 Modificados (3)** | `productService.js`, `CartApp.jsx`, `CartView.jsx` |

*Un error que falta solucionar es cuando se elimina todos los productos del carrito, al recargar la pagina, se añade automaticamente el ultimo producto que se encontraba en el carrito

### Fase 4

**Proyecto**: `05-cart-app-95`

- Se introduce la sintaxis de la función reducer

- El hook useReducer para manejar las actualizaciones de estado del carrito de compras: agregar producto, actualizar cantidad y eliminar producto.

- Toda la logica que habia sido definida en el componente principal, se traslado a un hook personalizado llamado `useItemsCart`.

Se introduce el hook useReducer y las función reducer, para manejar las actualizaciones de estado: agregar producto, actualizar cantidad y eliminar producto. 

Tambien se traslada toda la logica de JavaScript del componente principal en un hook personalizado.

|                        | Archivos                                              |
| ---------------------- |:-----------------------------------------------------:|
| **➕ Creados(3)**       | `itemsActions.js`, `itemsReducer.js` y `useItemsCart` |
| **🔃 Modificados (1)** | `CartApp.jsx`                                         |

### Fase 5

**Proyecto**: `05-cart-app-100`

- Se introduce las definiciones de rutas con React Router.

- El uso del hook useNavigate para manejar la redirección mediante un botón.

- Implementación de un nuevo componente para la barra de navegación.

- Toda la logica que contiene las rutas se define en un componente llamado CartRoutes.jsx.

- 

Se introduce React Router para el manejo de rutas en la aplicación web,  el hook useNavigate para las navegación mediante un botón, se implementa un componente para la barra de navegación y se divide la logica de la definición de rutas en un nuevo componente.

|                        | Archivos                                                         |
| ---------------------- |:----------------------------------------------------------------:|
| **➕ Creados (17)**     | `CartRoutes.jsx`, `Navbar.jsx`                                   |
| **🔃 Modificados (1)** | `main.jsx`, `CartApp.jsx`, `CartView.jsx`, `ProductCardView.jsx` |

Lista de comandos para instalar librerias externas:

```powershell
npm install react-router
npm install react-router-dom
```

---

## Aplicación usuarios y login ⭐⭐⭐

106

- Define la estructura de la aplicación, compuesta por 4 componentes, 

- Se introduce unos datos de prueba

- El estado formulario se maneja de forma interna, para los campos y el boton para subir el formulario nada más imprime los datos del formulario en la consola.

|                        | Archivos             |
| ---------------------- |:--------------------:|
| **➕ Creados (17)**     | CounterApp.jsx       |
| **🔃 Modificados (1)** | index.html, main.jsx |
| **🗑️ Eliminados (5)** |                      |



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

## Rutas en la aplicación usuarios ⭐⭐

- Se define las rutas para la aplicación usuarios:

- Se agrega un componente para el registro de usuarios por medio de un formulario (no una ventana modal)

- Validación del campo email

- Ruta dinamica por el id

- Archivos creados: RegisterPage, UsersPage, UserRoutes

- Archivos modificados: useAuth, Navbar, UserForm, UserRow, UsersList, useUsers, main,UsersApp

- FALTA COMENTARIOS

## Contexto de React en la aplicación usuarios ⭐⭐

140

143

## API REST carro de compras ⭐

162

## API REST usuarios ⭐⭐

174

## Comunicación entre frontend y backend carro de compras ⭐

178

## Comunicación entre frontend y backend usuarios ⭐⭐

183

## Validaciones en API REST usuarios ⭐

185

## Integrando validación desde el backend al frontend usuarios ⭐⭐

191

## Spring Security y JWT en API REST usuarios ⭐⭐⭐⭐⭐

-

## Integrando JWT desde el backend al frontend usuarios ⭐⭐⭐⭐

-

## Redux en aplicación usuarios⭐⭐

-

## Paginación en aplicación usuarios⭐⭐⭐