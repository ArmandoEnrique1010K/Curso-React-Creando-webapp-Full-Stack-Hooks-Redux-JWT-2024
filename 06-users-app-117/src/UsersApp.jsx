import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

// Estado inicial para la lista de usuarios
const initialUsers = [
    {
        id: 1,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    },
];

// Estado inicial para el formulario del usuario (se traslada aqui) 
const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: '',
}

// Componente principal de la aplicación UsersApp
export const UsersApp = () => {

    // Hook useReducer para manejar el estado de los usuarios con el usersReducer
    const [users, dispatch] = useReducer(usersReducer, initialUsers);

    // Hook useState para manejar el usuario seleccionado en el formulario
    const [userSelected, setUserSelected] = useState(initialUserForm);

    // Función para agregar o actualizar un usuario
    const handlerAddUser = (user) => {
        let type;

        // Si el usuario no tiene un ID, se añade como nuevo; si tiene ID, se actualiza
        if (user.id === 0) {
            type = 'addUser';
        } else {
            type = 'updateUser';
        }

        dispatch({
            // Simplifica type: type
            type,
            payload: user, // Se envía el usuario como payload de la acción
        });
    }

    // Función para eliminar un usuario
    const handlerRemoveUser = (id) => {
        dispatch({
            type: "removeUser",
            payload: id, // Se envía el ID del usuario a eliminar como payload
        });
    }

    // Función para seleccionar un usuario y cargar sus datos en el formulario
    const handlerUserSelectedForm = (user) => {
        setUserSelected({ ...user }); // Se establece el usuario seleccionado en el estado del formulario
    }

    return (
        <div className="container my-4">
            {/* Título de la aplicación */}
            <h2>Users App</h2>
            <div className="row">
                {/* Columna que contiene el formulario para agregar o actualizar usuarios */}
                <div className="col">
                    <UserForm
                        handlerAddUser={handlerAddUser}
                        initialUserForm={initialUserForm}
                        userSelected={userSelected}
                    />
                </div>
                {/* Columna que contiene la lista de usuarios */}
                <div className="col">
                    {
                        // Condición ternaria para renderizar un mensaje o <UsersList> si la cantidad de usuarios es 0
                        users.length === 0 ?
                            <div className="alert alert-warning">
                                No hay usuarios en el sistema!
                            </div> :
                            <UsersList
                                users={users}
                                // Pasa las funciones y el usuario seleccionado al componente como prop
                                handlerRemoveUser={handlerRemoveUser}
                                handlerUserSelectedForm={handlerUserSelectedForm}
                                userSelected={userSelected}
                            />
                    }
                </div>
            </div>
        </div>
    );
};
