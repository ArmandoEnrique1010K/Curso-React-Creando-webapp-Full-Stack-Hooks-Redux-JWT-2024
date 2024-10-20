import PropTypes from "prop-types";
import { useEffect, useState } from "react"
import Swal from "sweetalert2";

export const UserForm = ({ handlerAddUser, initialUserForm, userSelected, handlerCloseForm }) => {

    // Hook de estado para manejar los valores del formulario de usuario
    const [userForm, setUserForm] = useState(initialUserForm);

    // Desestructuración del objeto userForm para facilitar el acceso a sus propiedades
    const { id, username, password, email } = userForm;

    // useEffect que actualiza el formulario cuando el usuario seleccionado cambia
    useEffect(() => {
        setUserForm({
            ...userSelected, // Copia los valores del usuario seleccionado
            password: '' // Resetea el campo password por seguridad (requiere ser rellando ese campo)
        });
    }, [userSelected]);

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
        // Aplica para el campo password si el id es igual a 0, recordar que || ejecuta la operación de izquierda a derecha si es verdadero
        if (!username || (!password && id === 0) || !email) {
            // Muestra un mensaje de alerta si algun campo esta vacio
            Swal.fire({
                title: "Error de validación",
                text: "¡Debe completar los campos del formulario!",
                icon: "error"
            });
            // Detiene la ejecución si algún campo está vacío
            return;
        }

        // Nueva validación para que el campo email incluya el caracter '@'
        if (!email.includes('@')) {
            Swal.fire({
                title: "Error de validación de email",
                text: "El email debe ser valido, incluir un @!",
                icon: "error"
            });
            return;
        }

        // Llama a la función para agregar o actualizar el usuario
        handlerAddUser(userForm);

        // Reinicia el formulario a su estado inicial después de enviarlo
        setUserForm(initialUserForm);
    };

    // Función para cerrar el formulario y reiniciar su estado
    const onCloseForm = () => {
        // Llama a la función para cerrar el formulario
        handlerCloseForm();

        // Reinicia el formulario a su estado inicial
        setUserForm(initialUserForm);
    }

    return (
        <form onSubmit={onSubmit}>
            {/* Campo oculto para el ID del usuario */}
            <input
                type="hidden"
                name="id"
                value={id}
            />
            {/* Campo de entrada para el nombre de usuario */}
            <input
                className="form-control my-3 w-75"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            {/* Campo de entrada para la contraseña, solo visible si el ID es 0 (nuevo usuario) */}
            {
                id > 0 || (
                    <input
                        className="form-control my-3 w-75"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                )
            }

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
                {
                    id > 0 ? 'Editar' : 'Crear' // Cambia el texto del botón dependiendo del estado del usuario
                }
            </button>

            {/* Botón para cerrar el formulario, si el valor de la prop handlerCloseForm es undefined, no se mostrara el botón cerrar */}
            {
                !handlerCloseForm || <button
                    className="btn btn-primary mx-2"
                    type="button"
                    onClick={onCloseForm}>
                    Cerrar</button>
            }
        </form>
    );
};

UserForm.propTypes = {
    handlerAddUser: PropTypes.func.isRequired,
    initialUserForm: PropTypes.object.isRequired,
    userSelected: PropTypes.object.isRequired,
}