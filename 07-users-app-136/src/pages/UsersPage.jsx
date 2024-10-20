
import { UserModalForm } from "../components/UserModalForm";
import { UsersList } from "../components/UsersList";
// import { useUsers } from "../hooks/useUsers";

// Ahora este componente recibe las propiedades que se pasan desde UserRoutes
export const UsersPage = (
    {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm
    }
) => {

    // La llamada del hook useUsers se traslada al componente UserRoutes

    return (
        // Utilizamos un fragmento vacío para contener la ventana modal y el contenedor principal de la página
        <>
            {
                // Renderiza el componente UserModalForm pasando las propiedades asociadas al formulario de registro de usuario.
                // La ventana modal solo se mostrará si visibleForm es true.
                !visibleForm ||
                <UserModalForm userSelected={userSelected} initialUserForm={initialUserForm}
                    handlerAddUser={handlerAddUser} handlerCloseForm={handlerCloseForm} />
            }


            {/* Se traslada aqui el contenedor principal de la aplicación web */}
            <div className="container my-4">
                {/* Título de la aplicación */}
                <h2>Users App</h2>
                <div className="row">
                    {/* Comentamos la sección del formulario embebido, porque ahora la ventana modal se encargará de mostrar el formulario */}
                    {/* 
                        {
                            !visibleForm || (
                                <div className="col">
                                    <UserForm
                                        handlerAddUser={handlerAddUser}
                                        initialUserForm={initialUserForm}
                                        userSelected={userSelected}
                                        handlerCloseForm={handlerCloseForm}
                                    />
                                </div>)
                        } 
                    */}

                    {/* Columna que contiene la lista de usuarios */}
                    <div className="col">
                        {
                            // Si el formulario no es visible (visibleForm es false), muestra el botón para abrirlo
                            visibleForm || (
                                <button className="btn btn-primary my-2" type="button" onClick={handlerOpenForm}>
                                    Nuevo usuario
                                </button>
                            )
                        }
                        {
                            // Condición ternaria para mostrar un mensaje si no hay usuarios o renderizar <UsersList> con la lista de usuarios
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
        </>
    );
}