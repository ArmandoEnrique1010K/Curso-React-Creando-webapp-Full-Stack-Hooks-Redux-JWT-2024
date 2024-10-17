import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hooks/useUsers";

// Componente principal de la aplicación UsersApp
export const UsersApp = () => {

    // Desestructura el estado y las funciones del hook useUsers
    const {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
    } = useUsers();

    return (
        <div className="container my-4">
            {/* Título de la aplicación */}
            <h2>Users App</h2>
            <div className="row">
                {/* Columna que contiene el formulario para agregar o actualizar usuarios */}
                {
                    !visibleForm || ( // Muestra el formulario solamente si visibleForm es true
                        <div className="col">
                            <UserForm
                                handlerAddUser={handlerAddUser} // Función para agregar o actualizar un usuario
                                initialUserForm={initialUserForm} // Estado inicial del formulario
                                userSelected={userSelected} // Usuario seleccionado para editar
                                handlerCloseForm={handlerCloseForm} // Función para cerrar el formulario
                            />
                        </div>)

                }

                {/* Columna que contiene la lista de usuarios */}
                <div className="col">
                    {
                        visibleForm || ( // Si el formulario no es visible, muestra el botón para abrirlo
                            <button className="btn btn-primary my-2" type="button" onClick={handlerOpenForm}>
                                Nuevo usuario
                            </button>
                        )
                    }

                    {
                        // Condición ternaria para renderizar un mensaje o <UsersList> según la cantidad de usuarios
                        users.length === 0 ? (
                            <div className="alert alert-warning">
                                No hay usuarios en el sistema!
                            </div>
                        ) : (
                            <UsersList
                                users={users} // Lista de usuarios
                                handlerRemoveUser={handlerRemoveUser} // Función para eliminar un usuario
                                handlerUserSelectedForm={handlerUserSelectedForm} // Función para seleccionar un usuario para editar
                                userSelected={userSelected} // Usuario actualmente seleccionado
                            />
                        )
                    }
                </div>
            </div>
        </div>
    );
};
