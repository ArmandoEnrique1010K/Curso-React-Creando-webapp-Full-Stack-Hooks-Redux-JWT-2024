import PropTypes from "prop-types";
import { UserRow } from "./UserRow";

// Componente que muestra la lista de usuarios en una tabla
export const UsersList = ({ users = [], handlerRemoveUser, handlerUserSelectedForm }) => {
    return (
        <table className="table table-hover table-striped">
            {/* Encabezado de la tabla que define las columnas */}
            <thead>
                <tr>
                    {/* Número de usuario */}
                    <th>#</th>
                    {/* Nombre de usuario */}
                    <th>username</th>
                    {/* Correo electrónico */}
                    <th>email</th>
                    {/* Columna para la acción de actualización */}
                    <th>update</th>
                    {/* Columna para la acción de acutalización por medio de una pagina embebida */}
                    <th>update route</th>
                    {/* Columna para la acción de eliminación */}
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {/* Mapeo de la lista de usuarios para generar una fila por cada usuario */}
                {
                    // Se quita la propiedad password y se pasa a UserRow, también se pasan las funciones
                    users.map(({ id, username, email }) => (
                        <UserRow
                            key={id} // Propiedad clave única para ayudar a React a identificar cada fila
                            id={id} // ID del usuario
                            username={username} // Nombre de usuario
                            email={email} // Correo electrónico del usuario
                            // No se pasa la prop password
                            // Se pasan las funciones para manejar eliminación y selección
                            handlerRemoveUser={handlerRemoveUser}
                            handlerUserSelectedForm={handlerUserSelectedForm}
                        />
                    ))
                }
            </tbody>
        </table>
    );
};

UsersList.propTypes = {
    users: PropTypes.array.isRequired,
    handlerRemoveUser: PropTypes.func.isRequired,
    handlerUserSelectedForm: PropTypes.func.isRequired
}