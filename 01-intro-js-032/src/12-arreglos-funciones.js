// Se crea un objeto 'papper' que representa un producto.
const papper = {
  producto: "papper", // Nombre del producto
  price: 100, // Precio del producto
  quantity: 10, // Cantidad disponible del producto
};

// Se crea un arreglo 'invoices' que contiene varias facturas.
// Cada factura incluye información como el id, nombre, cliente y los artículos comprados.
const invoices = [
  {
    id: 1, // Identificador de la factura
    name: "Compras de oficina", // Nombre de la factura
    client: {
      name: "Maria", // Nombre del cliente
      lastName: "Doe", // Apellido del cliente
    },
    items: [
      // Lista de artículos comprados
      {
        producto: "keyboard", // Nombre del producto
        price: 399, // Precio del producto
        quantity: 2, // Cantidad comprada
      },
      {
        producto: "mouse",
        price: 200,
        quantity: 1,
      },
      papper, // Se incluye el objeto 'papper' en la lista de artículos
    ],
  },
  {
    id: 2,
    name: "Compras de computacion",
    client: {
      name: "Pepe",
      lastName: "Doe",
    },
    items: [
      {
        producto: "keyboard",
        price: 399,
        quantity: 2,
      },
      {
        producto: "screen 17",
        price: 800,
        quantity: 1,
      },
      {
        producto: "cpu intel",
        price: 1000,
        quantity: 10,
      },
    ],
  },
  {
    id: 3,
    name: "Compras papeleria",
    client: {
      name: "Jhon",
      lastName: "Doe",
    },
    items: [
      {
        producto: "pencil",
        price: 50,
        quantity: 1,
      },
      papper, // Se incluye el objeto 'papper' en la lista de artículos
    ],
  },
];

// Se utiliza el método 'map' para crear un nuevo arreglo que contiene solo los nombres de las facturas.
const invoicesName = invoices.map((i) => i.name);
console.log(invoices); // Imprime todas las facturas
console.log(invoicesName); // Imprime los nombres de las facturas

// Se utiliza el método 'map' para crear un nuevo arreglo que contiene solo los nombres de los clientes.
const invoicesClient = invoices.map((i) => i.client.name);
console.log(invoicesClient); // Imprime los nombres de los clientes

// Se utiliza el método 'find' para buscar la factura con el id igual a 2.
const invoiceById = invoices.find((i) => i.id === 2);
console.log(invoiceById); // Imprime la factura con id 2

// Se utiliza el método 'find' para buscar la factura cuyo cliente tiene el nombre 'Pepe'.
const invoiceByClientName = invoices.find((i) => i.client.name === "Pepe");
console.log(invoiceByClientName); // Imprime la factura del cliente 'Pepe'

// Se utiliza el método 'filter' para obtener un nuevo arreglo que contiene las facturas con id mayor a 1.
const invoiceFilter = invoices.filter((i) => i.id > 1);
console.log(invoiceFilter); // Imprime facturas con id mayor a 1

// Se utiliza el método 'filter' para obtener un nuevo arreglo que contiene las facturas que incluyen el producto 'papper', esto se logra con el método 'includes'.
const invoiceFilter2 = invoices.filter((i) => i.items.includes(papper));
console.log(invoiceFilter2); // Imprime facturas que incluyen el producto 'papper'

// Se utiliza el método 'some' para verificar si existe al menos una factura cuyo cliente tenga el nombre 'Pepe'.
const result = invoices.some((i) => i.client.name === "Pepe");
console.log(result); // Imprime 'true' si existe al menos una factura del cliente 'Pepe', de lo contrario 'false'

// Imprime un mensaje indicando que se está eliminando una factura
console.log("filter eliminar");
// Se utiliza el método 'filter' para obtener un nuevo arreglo que excluye la factura con id 2.
const invoiceDeleted = invoices.filter((i) => i.id !== 2);
console.log(invoiceDeleted); // Imprime facturas que no tienen id 2

// En este contexto, existen los operadores de desigualdad (!=) y desigualdad estricta (!==) para excluir elementos de un arreglo.
// La diferencia entre ellos es que el operador de desigualdad estricta (!==) excluye un elemento por valor y tipo de dato, mientras que el operdaor de desigualdad (!=) excluye solamente por valor.
const invoiceDeleted2 = invoices.filter((i) => i.id !== "2");
console.log(invoiceDeleted2); // Imprime facturas que no tienen id 2 (tipo String).
