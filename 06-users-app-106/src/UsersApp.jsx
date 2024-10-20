import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";

// Componente principal de la aplicación UsersApp
export const UsersApp = () => {

    // Datos iniciales de usuarios que se utilizarán en la aplicación
    const initialUsers = [
        {
            id: 1,
            username: 'pepe',
            password: '12345',
            email: 'pepe@correo.com'
        },
    ];

    return (
        <div className="container my-4">
            {/* Título de la aplicación */}
            <h2>Users App</h2>
            <div className="row">
                {/* Columna que contiene el formulario para agregar usuarios */}
                <div className="col">
                    <UserForm />
                </div>
                {/* Columna que contiene la lista de usuarios */}
                <div className="col">
                    {/* Pasa los usuarios iniciales en la prop users */}
                    <UsersList users={initialUsers} />
                </div>
            </div>
        </div>
    );
}

// Por el momento, la aplicación web imprime los datos introducidos en el formulario 