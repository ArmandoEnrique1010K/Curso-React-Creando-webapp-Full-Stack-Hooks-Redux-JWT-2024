// Se crea un objeto 'invoice' que representa una factura, con varias propiedades.
const invoice = {
  // Propiedad 'id' que almacena el identificador de la factura.
  id: 10,

  // Propiedad 'name' que describe el nombre de la factura.
  name: "Compras de oficina",

  // Propiedad 'date' que almacena la fecha actual usando el constructor 'new Date()'.
  date: new Date(),

  // Objeto 'client' que representa al cliente asociado con la factura.
  client: {
    // Identificador del cliente.
    id: 2,
    // Nombre del cliente.
    name: "Jhon",
    // Apellido del cliente.
    lastName: "Doe",
    // Edad del cliente.
    age: 20,
  },

  // Arreglo 'items' que contiene los productos comprados en la factura.
  items: [
    {
      // Primer producto en el arreglo, un teclado.
      producto: "keyboard",
      price: 399, // Precio del teclado.
      quantity: 2, // Cantidad comprada.
    },
    {
      // Segundo producto en el arreglo, un ratón.
      producto: "mouse",
      price: 200, // Precio del ratón.
      quantity: 1, // Cantidad comprada.
    },
    {
      // Tercer producto en el arreglo, papel.
      producto: "paper",
      price: 100, // Precio del papel.
      quantity: 10, // Cantidad comprada.
    },
  ],

  // Método 'total' que calcula el costo total de los productos en la factura.
  total: function () {
    let total = 0; // Variable para almacenar el total de la factura.
    // Se recorre cada elemento en el arreglo 'items' y se suma al total el precio multiplicado por la cantidad.
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total; // Se devuelve el total calculado.
  },

  // Método 'greeting' que devuelve un saludo personalizado para el cliente.
  greeting: function () {
    return `Hola ${this.client.name}`; // Saludo usando el nombre del cliente.
  },
};

// Las siguientes líneas están comentadas porque cambiar el nombre del cliente y asignar un nuevo valor al total podría ser incorrecto:
// invoice.client.name = 'Pepe';
// invoice.total = 5000;

// Se imprime en la consola el objeto 'invoice' completo.
console.log(invoice);

// Se llama al método 'greeting' del objeto 'invoice' y se almacena el resultado en la variable 'greeting'.
const greeting = invoice.greeting();
console.log(greeting); // Se imprime el saludo en la consola: 'Hola Jhon'

// Se llama al método 'total' del objeto 'invoice' y se imprime el total de la factura en la consola.
console.log("Total: " + invoice.total()); // Salida: 'Total: 1498'
