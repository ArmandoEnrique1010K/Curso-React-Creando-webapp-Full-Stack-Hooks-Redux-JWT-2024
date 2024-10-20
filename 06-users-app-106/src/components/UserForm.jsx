import { useState } from "react"

// Estado inicial del formulario del usuario
const initialUserForm = {
    username: '',
    password: '',
    email: '',
}

// Puedes utilizar esto para establecer datos iniciales en el formulario
// const initialUserForm = {
//     username: 'texto',
//     password: '12345',
//     email: 'correo@example.com',
// }

export const UserForm = () => {

    // Hook de estado para manejar los valores del formulario de usuario
    const [userForm, setUserForm] = useState(initialUserForm);

    // Desestructuración del objeto userForm para facilitar el acceso a sus propiedades
    const { username, password, email } = userForm;

    // Función que se ejecuta cuando se cambia el valor de un campo del formulario

    // Se desestructura la propiedad target del objeto event (target hace referencia al elemento <input> luego de renderizarlo en el navegador)
    const onInputChange = ({ target }) => {
        // Imprime el valor introducido en el campo del formulario
        // console.log(target.value)

        // Obtiene el nombre y el valor del campo que ha cambiado
        const { name, value } = target;

        setUserForm({
            ...userForm, // Copia el estado actual del formulario
            [name]: value, // Variable computada, actualiza solo el campo que cambió usando el nombre del campo como clave
        });
    }

    // Función que se ejecuta cuando se envía el formulario
    const onSubmit = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página
        // Validación: verifica que todos los campos estén completos
        if (!username || !password || !email) {
            // Muestra un mensaje de alerta si algun campo esta vacio
            alert('Debe completar los campos del formulario!');
            return; // Detiene la ejecución
        }
        console.log(userForm); // Imprime en consola los datos del formulario

        // Aquí se podría agregar la lógica para guardar el usuario en la lista de usuarios

        // Reinicia el formulario a su estado inicial después de enviarlo
        setUserForm(initialUserForm);
    };

    return (
        <form
            // Manejador de evento para el envio del formulario
            onSubmit={onSubmit}>
            {/* Campo de entrada para el nombre de usuario */}
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                // Valor del campo vinculado al estado
                value={username}
                // Manejador de cambio para actualizar el estado
                onChange={onInputChange}
            />
            {/* Campo de entrada para la contraseña */}
            <input
                className="form-control my-3 w-75"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            {/* Campo de entrada para el email */}
            <input
                className="form-control my-3 w-75"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {/* Botón para enviar el formulario */}
            <button
                className="btn btn-primary"
                type="submit">
                Crear
            </button>
        </form>
    );
};
