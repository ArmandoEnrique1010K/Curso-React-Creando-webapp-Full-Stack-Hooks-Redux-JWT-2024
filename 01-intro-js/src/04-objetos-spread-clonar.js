// Se crea un objeto 'invoice' que representa una factura con varias propiedades, como cliente, artículos y métodos.
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
  total: function () {
    let total = 0;
    this.items.forEach((item) => {
      total = total + item.price * item.quantity;
    });
    return total;
  },
  greeting: function () {
    return `Hola ${this.client.name}`;
  },
};

// Se crea una nueva variable 'invoice2' que inicialmente apuntaba a 'invoice', creando una referencia al mismo objeto.
// Esto se comenta para evitar que 'invoice2' y 'invoice' sean el mismo objeto en memoria.
// const invoice2 = invoice;

// Se utiliza la sintaxis de propagación para crear una copia superficial del objeto 'invoice'.
// Esto crea un nuevo objeto 'invoice2' con las mismas propiedades que 'invoice', pero no una referencia al mismo objeto.
const invoice2 = { ...invoice };

// Se compara si 'invoice' y 'invoice2' son el mismo objeto en memoria.
// Dado que se usa la sintaxis de propagación, 'invoice2' es un nuevo objeto, por lo que la comparación será falsa.
const result = invoice === invoice2;

// Se utiliza una estructura condicional para imprimir si los objetos son iguales o no.
if (result) {
  console.log(result); // No se ejecutará porque 'result' es falso.
} else {
  console.log("no son iguales"); // Salida: 'no son iguales'
}

// Se modifica la propiedad 'id' del objeto 'invoice2'.
invoice2.id = 20;

// Se imprimen los valores de 'id' de ambos objetos para demostrar que son diferentes,
// ya que 'invoice2' es una copia de 'invoice' y no una referencia al mismo objeto.
console.log(invoice.id); // Salida: 10
console.log(invoice2.id); // Salida: 20
