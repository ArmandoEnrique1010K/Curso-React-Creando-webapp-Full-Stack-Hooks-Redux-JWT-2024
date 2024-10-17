// Componente que representa una fila en la tabla de usuarios
export const UserRow = ({ id, username, email }) => {

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
                >
                    update
                </button>
            </td>
            {/* Botón para eliminar al usuario */}
            <td>
                <button
                    type="button"
                    className="btn btn-danger btn-sm"
                >
                    remove
                </button>
            </td>
        </tr>
    );
};
