// Definimos el objeto invoice que contiene toda la información relacionada con la factura
export const invoice = {
  // Identificador único de la factura
  id: 10,
  // Nombre o descripción general de la factura
  name: "Componentes PC",
  // Información del cliente que realiza la compra
  client: {
    name: "Pepe", // Nombre del cliente
    lastName: "Doe", // Apellido del cliente
    address: {
      // Dirección del cliente
      country: "USA", // País donde reside el cliente
      city: "Los Angeles", // Ciudad del cliente
      street: "One Street", // Calle del cliente
      number: 12, // Número de la calle
    },
  },
  // Información de la empresa que emite la factura
  company: {
    name: "New Egg", // Nombre de la empresa
    fiscalNumber: 1234567, // Número fiscal de la empresa
  },
  // Lista de productos incluidos en la factura
  items: [
    {
      id: 1, // Identificador único del producto
      product: "Cpu Intel i7", // Nombre del producto
      price: 499, // Precio del producto
      quantity: 1, // Cantidad comprada del producto
    },
    {
      id: 2, // Identificador único del producto
      product: "Corsair Keyboard Mecanico", // Nombre del producto
      price: 150, // Precio del producto
      quantity: 2, // Cantidad comprada del producto (cambio a 2)
    },
    {
      id: 3, // Identificador único del producto
      product: "Monitor Asus", // Nombre del producto
      price: 350, // Precio del producto
      quantity: 1, // Cantidad comprada del producto
    },
  ],
};
