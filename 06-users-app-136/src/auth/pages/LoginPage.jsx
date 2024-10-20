// En React una pagina web esta compuesta por varios componentes

import { useState } from "react";
import Swal from "sweetalert2";

// Valores iniciales para el formulario de login
const initialLoginForm = {
    username: '',
    password: '',
}

// Este componente representa una página web funcional LoginPage
// Recibe la propiedad handlerLogin
export const LoginPage = ({ handlerLogin }) => {

    // Estado local para el formulario de login, usando el hook useState
    const [loginForm, setLoginForm] = useState(initialLoginForm);

    // Desestructuración de los campos del formulario desde el estado
    const { username, password } = loginForm

    // Función para manejar cambios en los campos del formulario
    const onInputChange = ({ target }) => {
        // Extrae el nombre y el valor del campo de entrada
        const { name, value } = target;

        // Actualiza el estado del formulario con el nuevo valor
        setLoginForm({
            // Mantiene los valores existentes del formulario
            ...loginForm,
            // Actualiza el campo específico con su nuevo valor (recuerda la variable computada)
            [name]: value,
        });
    };

    // Función para manejar el envío del formulario
    const onSumbit = (event) => {
        // Prevenir la recarga de la página al enviar el formulario
        event.preventDefault();

        // Validar que todos los campos del formulario estén completos
        if (!username || !password) {
            // Mostrar un mensaje de alerta con SweetAlert si algún campo está vacío
            Swal.fire({
                title: "Error de validación",
                text: "Username y Password requeridos",
                icon: "error"
            });
        }

        // Recuerda que la función realiza una validación más, por lo cual no se valida aqui por el texto introducido en el campo
        // Se llama función handlerLogin para iniciar sesión
        handlerLogin({ username, password });

        // Reinicia el formulario a sus valores iniciales
        setLoginForm(initialLoginForm);
    }


    return (
        // Se aplican los estilos de Bootstrap para una ventana modal.
        // Solo se utiliza el estilo de la ventana modal, no se trata de mostrar y ocultar una ventana modal
        <div
            className="modal"
            tabIndex={-1}
            // El estilo display: 'block' hace que la ventana modal se visualice en el navegador
            style={{ display: 'block' }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Login Page</h5>
                    </div>
                    {/* Manejador de evento para el envío del formulario */}
                    <form onSubmit={onSumbit}>
                        {/* El formulario de login necesita 2 campos: username y password */}
                        <div className="modal-body">
                            <input
                                className="form-control my-3 w-75"
                                placeholder="Username"
                                name="username"
                                // Valor del campo vinculado al estado
                                value={username}
                                // Manejador de cambio para actualizar el estado
                                onChange={onInputChange}
                            />
                            <input
                                className="form-control my-3 w-75"
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="submit"
                                className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

