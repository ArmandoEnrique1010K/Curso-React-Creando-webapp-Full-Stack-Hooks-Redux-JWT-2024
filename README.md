# Curso-React-Creando-webapp-Full-Stack-Hooks-Redux-JWT-2024

Este repositorio contiene los proyectos con comentarios explicativos que se desarrollaron a lo largo del curso de Udemy React & Spring Boot: Creando Webapp Full Stack 2024, que tiene una duración de 39,5 horas.

Algunos de estos proyectos pueden ser complejos, es por ello que se han divivido en fases de desarrollo, el cual lleva la siguiente sintaxis para el nombre: "(numero)-(nombre)-(hasta el video)".

## Introducción a  JavaScript

`01-intro-js`

Detalla la sintaxis actualizada de JavaScript ES6, incluye los conceptos fundamentales y tecnicas que se aplicaran en el desarrollo web con React como por ejemplo: el uso de funciones de flecha, desestructuración y promesas en JavaScript.

## Introducción a React

`02-intro-react`

Aplica la composición de componentes, una de las tecnicas más utilizadas hoy en dia en React en una página web, tambien utiliza la biblioteca prop-types para especificar los tipos de datos de las propiedades (Props) que se pasan entren los componentes.

## El estado de React

`03-counter-app`

Una variación de la aplicación de prueba que se genera por defecto en React, explica como se implementa el hook useState y como el valor de una variable de estado se actualiza con un clic en la aplicación web.

## Aplicación factura

`04-invoice-app-55`

Separa los componentes de la aplicación: data, service y components, además utiliza datos estaticos para maquetarlos en la aplicación web y se aplican estilos con Bootstrap.

---

`04-invoice-app-61`

Aplica un nuevo servicio para calcular el total utilizando los datos, la composición de componentes para dividir el componente principal en subcomponentes y prop-types para los tipos de props que se pasan entre componentes.

Archivos creados: ClientView.jsx, CompanyView.jsx, InvoiceView.jsx, ListItemsView.jsx, RowItemView.jsx, TotalView.jsx.

Archivos modificados: getInvoice.js, InvoiceApp.jsx

Archivos eliminados:

`04-invoice-app-67`

Se modifica el componente principal para incluir un formulario en la aplicación web para agregar un nuevo producto, implica el uso de useState, eventos que llaman funciones, validaciones de campos de formularios y actualizaciones de estados.

Archivos creados: 

Archivos modificados: InvoiceApp.jsx,

Archivos eliminados:

`04-invoice-app-71`

Introduce el hook useEffect para ejecutar una función cuando se renderiza el componente principal y cuando cambia el valor de los estados, se utiliza un solo useState para todos los campos del formulario, por otro lado se modifica el servicio para calcular el total para que funcione con el hook useEffect.

Archivos creados:

Archivos modificados: InvoiceApp.jsx, getInvoice.js, 

Archivos eliminados:

`04-invoice-app-75`

Separa el formulario en un nuevo componente, eso incluye las funciones asociadas en el formulario, añade un boton para mostrar u ocultar el formulario y un boton para eliminar un producto de la factura. además se agregan prop-types para funciones.

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

-

## Rutas en la aplicación usuarios

-

## Contexto de React en la aplicación usuarios

-

## API REST carro de compras

-

## API REST usuarios

-

## Comunicación entre frontend y backend carro de compras

-

## Comunicación entre frontend y backend usuarios

-

## Validaciones en API REST usuarios

-

## Integrando validación desde el backend al frontend usuarios

-

## Spring Security y JWT en API REST usuarios

-

## Integrando JWT desde el backend al frontend usuarios

-

## Redux en aplicación usuarios

-

## Paginación en aplicación usuarios