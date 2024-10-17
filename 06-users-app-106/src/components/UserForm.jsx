import { useState } from "react"

// Estado inicial del formulario del usuario
const initialUserForm = {
    username: '',
    password: '',
    email: '',
}


export const UserForm = () => {

    // Hook de estado para manejar los valores del formulario de usuario
    const [userForm, setUserForm] = useState(initialUserForm);

    // Desestructuración del objeto userForm para facilitar el acceso a sus propiedades
    const { username, password, email } = userForm;

    // Función que se ejecuta cuando se cambia el valor de un campo del formulario
    const onInputChange = ({ target }) => {
        // console.log(target.value) // Imprime el valor introducido en el campo del formulario
        const { name, value } = target; // Obtiene el nombre y el valor del campo que ha cambiado

        setUserForm({
            ...userForm, // Copia el estado actual del formulario
            [name]: value, // Actualiza solo el campo que cambió usando el nombre del campo como clave
        });
    }

    // Función que se ejecuta cuando se envía el formulario
    const onSubmit = (event) => {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página
        // Validación: verifica que todos los campos estén completos
        if (!username || !password || !email) {
            alert('Debe completar los campos del formulario!');
            return; // Detiene la ejecución si algún campo está vacío
        }
        console.log(userForm); // Imprime en consola los datos del formulario

        // Aquí se podría agregar la lógica para guardar el usuario en la lista de usuarios

        // Reinicia el formulario a su estado inicial después de enviarlo
        setUserForm(initialUserForm);
    };

    return (
        <form onSubmit={onSubmit}>
            {/* Campo de entrada para el nombre de usuario */}
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
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
