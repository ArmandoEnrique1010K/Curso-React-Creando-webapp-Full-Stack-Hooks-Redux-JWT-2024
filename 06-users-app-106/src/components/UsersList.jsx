import PropTypes from "prop-types";
import { UserRow } from "./UserRow";

// Componente que muestra la lista de usuarios en una tabla, la prop users contiene un arreglo vacio como un valor por defecto
export const UsersList = ({ users = [] }) => {

    return (
        <table className="table table-hover table-striped">
            {/* Encabezado de la tabla que define las columnas */}
            <thead>
                <tr>
                    <th>#</th>
                    <th>username</th>
                    <th>email</th>
                    <th>update</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {/* Mapeo de la lista de usuarios para generar una fila por cada usuario */}
                {
                    users.map(({ id, username, email }) => (
                        <UserRow
                            key={id} // Propiedad clave única para ayudar a React a identificar cada fila
                            id={id}
                            username={username}
                            email={email}
                        />
                    ))
                }
            </tbody>
        </table>
    );
};

UsersList.propTypes = {
    users: PropTypes.array.isRequired,
}