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

        // Se utiliza un fragmento vacio para contener la ventana modal y el contenedor
        <>
            {
                // Solamente muestra la ventana modal si el estado de visibleForm es true

                // Se definen unos estilos personalizados para el contenedor externo. Ten en cuenta que hay un archivo index.css en el cual se definen todos los estilos que se aplicaran a todos los componentes que contengan los estilos definidos (en este caso solamente se aplicara para el <div> contenedor)
                !visibleForm || <div className="abrir-modal animacion fadeInt">
                    {/* la clase modal sirve para definir un contenedor que ocupara toda la pantalla */}

                    {/* tabIndex indica si un elemento puede ser enfocado y si participa en la navegación secuencial del teclado (con la tecla Tab), al colocar un valor negativo significa que el elemento debe ser enfocado pero no debe ser accesible a traves de la tecla Tab */}

                    {/* style sirve para aplicar un estilo interno al elemento, en React, los estilos se definen dentro de un objeto cuyas propiedades tienen pares de estilo y valor */}
                    <div className="modal" tabIndex={-1} style={{ display: "block" }}>
                        {/* modal-dialog define el contenedor interno de la ventana modal */}
                        <div className="modal-dialog" role="document">
                            {/* modal-content aplica el diseño de caja a la ventana modal */}
                            <div className="modal-content">
                                {/* Cabecera de la ventana modal */}
                                <div className="modal-header">
                                    {/* Titulo de la ventana modal */}
                                    <div className="modal-title">
                                        {/* Utiliza un operador ternario basado en el id del usuario seleccionado */}
                                        {userSelected.id > 0 ? 'Editar' : 'Crear'} Modal Usuarios
                                    </div>

                                </div>
                                {/* Cuerpo de la ventana modal */}
                                <div className="modal-body">

                                    {/* Se renderiza el componente UserForm con las mismas propiedades */}
                                    <UserForm initialUserForm={initialUserForm} userSelected={userSelected} handlerAddUser={handlerAddUser} handlerCloseForm={handlerCloseForm} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }


            {/* Se traslada el contenedor de la aplicación web */}
            <div className="container my-4">
                {/* Título de la aplicación */}
                <h2>Users App</h2>
                <div className="row">
                    {/* Todo esto queda comentado, porque ahora la ventana modal se encargara de mostrar el formulario */}
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

        </>

    );
};

