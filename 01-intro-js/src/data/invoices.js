// Definición del objeto 'papper', que representa un producto
const papper = {
  producto: "papper", // Nombre del producto
  price: 100, // Precio del producto
  quantity: 10, // Cantidad del producto disponible
};

// Definición de un arreglo de facturas (invoices)
const invoices = [
  {
    id: 1, // Identificador único de la factura
    name: "Compras de oficina", // Nombre de la factura
    client: {
      // Información del cliente
      name: "Maria", // Nombre del cliente
      lastName: "Doe", // Apellido del cliente
    },
    items: [
      // Artículos incluidos en la factura
      {
        producto: "keyboard", // Nombre del producto
        price: 399, // Precio del producto
        quantity: 2, // Cantidad del producto
      },
      {
        producto: "mouse", // Nombre del producto
        price: 200, // Precio del producto
        quantity: 1, // Cantidad del producto
      },
      papper, // Incluye el objeto 'papper' definido anteriormente
    ],
  },
  {
    id: 2, // Identificador único de la factura
    name: "Compras de computacion", // Nombre de la factura
    client: {
      // Información del cliente
      name: "Pepe", // Nombre del cliente
      lastName: "Doe", // Apellido del cliente
    },
    items: [
      // Artículos incluidos en la factura
      {
        producto: "keyboard", // Nombre del producto
        price: 399, // Precio del producto
        quantity: 2, // Cantidad del producto
      },
      {
        producto: "screen 17", // Nombre del producto
        price: 800, // Precio del producto
        quantity: 1, // Cantidad del producto
      },
      {
        producto: "cpu intel", // Nombre del producto
        price: 1000, // Precio del producto
        quantity: 10, // Cantidad del producto
      },
    ],
  },
  {
    id: 3, // Identificador único de la factura
    name: "Compras papeleria", // Nombre de la factura
    client: {
      // Información del cliente
      name: "Jhon", // Nombre del cliente
      lastName: "Doe", // Apellido del cliente
    },
    items: [
      // Artículos incluidos en la factura
      {
        producto: "pencil", // Nombre del producto
        price: 50, // Precio del producto
        quantity: 1, // Cantidad del producto
      },
      papper, // Incluye el objeto 'papper' definido anteriormente
    ],
  },
];

// Función para buscar una factura por el nombre del cliente
const invoiceByClientName = (clientName) => {
  return invoices.find((i) => i.client.name === clientName); // Devuelve la primera factura que coincida con el nombre del cliente
};

// Función para buscar una factura por ID
const invoiceById = (id) => {
  return invoices.find((i) => i.id === id); // Devuelve la primera factura que coincida con el ID
};

// Función para encontrar una factura por ID de forma asíncrona usando promesas
const findInvoiceById = (id) => {
  // Retorna una promesa
  const promise = new Promise((resolve, reject) => {
    // Simulación de una operación asíncrona con setTimeout
    setTimeout(() => {
      const result = invoiceById(id); // Busca la factura por ID

      // Si se encuentra la factura, se resuelve la promesa
      if (result) {
        resolve(result);
      } else {
        // Si no se encuentra, se rechaza la promesa con un mensaje de error
        reject("error: no existe la factura por el id!");
      }
    }, 2500); // Espera 2500 milisegundos antes de ejecutar la búsqueda
  });

  return promise; // Devuelve la promesa
};

// Exporta el objeto 'papper' y las funciones para ser usadas en otros módulos
export {
  papper,
  invoices as default, // Exporta 'invoices' como exportación por defecto
  invoiceByClientName,
  invoiceById,
  findInvoiceById,
};
