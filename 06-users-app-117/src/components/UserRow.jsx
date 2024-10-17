// Componente que representa una fila en la tabla de usuarios
export const UserRow = ({ id, username, email, handlerRemoveUser, handlerUserSelectedForm }) => {

    // Función para llamar a la función de eliminar usuario por id
    const onRemoveUser = (id) => {
        handlerRemoveUser(id); // Llama a la función proporcionada para eliminar el usuario
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
                    // Llama a la función de selección de usuario, pasando los datos del usuario seleccionado
                    onClick={() => handlerUserSelectedForm({ id, username, email })}
                >
                    update {/* Texto del botón para la acción de actualización */}
                </button>
            </td>
            {/* Botón para eliminar al usuario */}
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    // Llama a la función de eliminación cuando se hace clic en el botón
                    onClick={() => onRemoveUser(id)}
                >
                    remove {/* Texto del botón para la acción de eliminación */}
                </button>
            </td>
        </tr>
    );
};
