import { useReducer } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
];

// Componente principal de la aplicación UsersApp
export const UsersApp = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers)

    const handlerAddUser = (user) => {
        dispatch({
            type: 'addUser',
            payload: user,
        })
    }

    return (
        <div className="container my-4">
            {/* Título de la aplicación */}
            <h2>Users App</h2>
            <div className="row">
                {/* Columna que contiene el formulario para agregar usuarios */}
                <div className="col">
                    <UserForm handlerAddUser={handlerAddUser} />
                </div>
                {/* Columna que contiene la lista de usuarios */}
                <div className="col">
                    <UsersList users={users} />
                </div>
            </div>
        </div>
    );
}
