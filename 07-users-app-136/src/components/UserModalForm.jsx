// Importa el componente UserForm para utilizarlo dentro de la ventana modal
import { UserForm } from "./UserForm";

// Este componente contiene la definición de la ventana modal y recibe las propiedades necesarias para manejar el formulario
export const UserModalForm = ({ userSelected, initialUserForm, handlerAddUser, handlerCloseForm }) => {
    // Es importante recordar usar `return` para devolver el contenido del componente, que se define utilizando JSX
    return (
        // Se define un contenedor con clases personalizadas para la animación y el estilo de la ventana modal.
        // El archivo CSS asociado (`index.css`) contiene las reglas de estilo para estas clases.
        <div className="abrir-modal animacion fadeIn">
            {/* La clase modal se utiliza para definir un contenedor que ocupa toda la pantalla */}
            {/* 
                'tabIndex' indica si un elemento puede ser enfocado y si participa en la navegación del teclado (usando la tecla Tab).
                Un valor negativo de `tabIndex` significa que el elemento puede ser enfocado, pero no se puede acceder a él mediante la tecla Tab.
            */}
            {/* 'style' se utiliza para aplicar un estilo inline específico al elemento.
                En React, los estilos se definen como objetos con pares clave-valor.
            */}

            <div className="modal" tabIndex={-1} style={{ display: "block" }}>
                {/* modal-dialog define el contenedor interno de la ventana modal */}
                <div className="modal-dialog" role="document">
                    {/* modal-content aplica el diseño de caja a la ventana modal */}
                    <div className="modal-content">
                        {/* Cabecera de la ventana modal */}
                        <div className="modal-header">
                            {/* Título de la ventana modal que cambia según si se está editando o creando un usuario */}
                            <div className="modal-title">
                                {/* Utiliza un operador ternario para mostrar 'Editar' si el usuario tiene un `id` mayor que 0, de lo contrario muestra 'Crear' */}
                                {userSelected.id > 0 ? 'Editar' : 'Crear'} Modal Usuarios
                            </div>
                        </div>

                        {/* Cuerpo de la ventana modal */}
                        <div className="modal-body">
                            {/* Renderiza el componente UserForm, pasando las propiedades necesarias para manejar el formulario */}
                            <UserForm initialUserForm={initialUserForm} userSelected={userSelected} handlerAddUser={handlerAddUser} handlerCloseForm={handlerCloseForm} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}