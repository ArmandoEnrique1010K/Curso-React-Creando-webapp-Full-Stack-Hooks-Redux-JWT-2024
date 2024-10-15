// Se crea un objeto 'invoice' que representa una factura, con propiedades como 'client' (cliente) y 'items' (productos).
const invoice = {
  id: 10,
  name: "Compras de oficina",
  date: new Date(),
  client: {
    id: 2,
    name: "Jhon",
    lastName: "Doe",
    age: 20,
  },
  items: [
    {
      producto: "keyboard",
      price: 399,
      quantity: 2,
    },
    {
      producto: "mouse",
      price: 200,
      quantity: 1,
    },
    {
      producto: "paper",
      price: 100,
      quantity: 10,
    },
  ],
  // Método que calcula el total de la factura sumando el precio de cada producto multiplicado por su cantidad.
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  // Método que devuelve un saludo personalizado utilizando el nombre del cliente.
  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

// Uso del operador de encadenamiento opcional (?.) para acceder a propiedades que pueden no existir.
// Se intenta acceder a 'company.name'. Si 'company' no existe, no se lanzará un error y el valor será 'undefined'.
console.log(invoice.company?.name); // Salida: undefined (ya que 'company' no está definido en el objeto 'invoice')

// Se intenta acceder a una propiedad más profunda 'address.street' dentro del cliente.
// Como 'address' no existe en 'client', el operador de encadenamiento opcional devuelve 'undefined' sin errores.
console.log(invoice.client?.address?.street); // Salida: undefined (ya que 'address' no está definido en 'client')

// Verifica si 'company.name' existe usando el operador de encadenamiento opcional.
// Si existe, imprime 'perfecto!!!', de lo contrario, imprime 'no viene la empresa'.
if (invoice.company?.name) {
  console.log("perfecto!!!"); // No se ejecuta porque 'company' no existe.
} else {
  console.log("no viene la empresa"); // Salida: 'no viene la empresa'
}
