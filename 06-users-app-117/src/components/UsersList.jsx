import { UserRow } from "./UserRow";

// Componente que muestra la lista de usuarios en una tabla
export const UsersList = ({ users = [], handlerRemoveUser, handlerUserSelectedForm }) => {

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
                    // Se agrega la propiedad password y se pasa a UserRow, tambien se pasan las funciones
                    users.map(({ id, username, email, password }) => (
                        <UserRow
                            key={id} // Propiedad clave única para ayudar a React a identificar cada fila
                            id={id}
                            username={username}
                            email={email}
                            password={password}
                            handlerRemoveUser={handlerRemoveUser}
                            handlerUserSelectedForm={handlerUserSelectedForm}
                        />
                    ))
                }
            </tbody>
        </table>
    );
};
