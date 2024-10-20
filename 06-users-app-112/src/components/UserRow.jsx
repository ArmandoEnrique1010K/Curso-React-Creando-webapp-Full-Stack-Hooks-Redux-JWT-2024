import PropTypes from "prop-types";

// Componente que representa una fila en la tabla de usuarios
export const UserRow = ({ id, username, email, handlerRemoveUser, handlerUserSelectedForm, password }) => {

    // Función para llamar a la función de eliminar usuario por id
    const onRemoveUser = (id) => {
        handlerRemoveUser(id);
    }

    return (
        <tr>
            {/* Columna que muestra el ID del usuario */}
            <td>{id}</td>
            {/* Columna que muestra el nombre de usuario */}
            <td>{username}</td>
            {/* Columna que muestra el email del usuario */}
            <td>{email}</td>
            {/* Botón para actualizar la información del usuario */}
            <td>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    // Otra forma es llamar a la función recibida como prop de forma directa sin definir una función intermedia, en este caso la función para editar el usuario, pasando todas sus propiedades
                    onClick={() => handlerUserSelectedForm({ id, username, email, password })}
                >
                    update
                </button>
            </td>
            {/* Botón para eliminar al usuario */}
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    // Llama a la función cuando se hace clic en el botón (evento onClick)
                    onClick={() => onRemoveUser(id)}
                >
                    remove
                </button>
            </td>
        </tr>
    );
};

UserRow.propTypes = {
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    handlerRemoveUser: PropTypes.func.isRequired,
    handlerUserSelectedForm: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired
}