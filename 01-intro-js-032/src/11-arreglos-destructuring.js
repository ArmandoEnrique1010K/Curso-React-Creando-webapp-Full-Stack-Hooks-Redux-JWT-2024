// Se crea un arreglo 'users' que contiene una lista de nombres de usuarios.
const users = ["pepe", "ana", "maria", "juan", "sebastian", "carlos", "josefa"];

// Se utiliza la desestructuración de arreglos para asignar los primeros tres elementos
// del arreglo a variables individuales: 'pepe', 'ana' y 'maria'.
// El resto de los elementos del arreglo se almacenan en un nuevo arreglo llamado 'rest'.
const [pepe, ana, maria, ...rest] = users;

// Se imprimen los nombres de las tres primeras variables y el resto de los usuarios.
console.log(pepe, ana, maria, ...rest); // Salida: 'pepe ana maria juan sebastian carlos josefa'
