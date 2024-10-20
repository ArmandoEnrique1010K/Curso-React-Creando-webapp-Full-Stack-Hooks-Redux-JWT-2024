// Las aplicaciones de React contiene componentes que se pueden repetir en todas las paginas web definidas, todo esos componentes se encuentran dentro de layout

import { NavLink } from "react-router-dom";

// Layout funcional Navbar
export const Navbar = ({ login, handlerLogout }) => {
    return (
        // Se utilizan estilos de Bootstrap para definir la barra de navegación
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Nombre de la barra de navegación, se define como una ruta a "/" */}
                <NavLink className="navbar-brand" to="/">
                    Usuarios
                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Contenido del Navbar colapsable, alineado por defecto a la izquierda */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/* Menú para navegar a "/users" */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">
                                Usuarios
                            </NavLink>
                        </li>

                        {/* Se define un enlace hacia la pagina de registrar usuario */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users/register">
                                Registrar usuario
                            </NavLink>
                        </li>
                    </ul>
                </div>


                {/* La clase justify-contend-end alinea todo el contenido a la derecha */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <span className="nav-item nav-link text-primary mx-3">
                        {
                            // Mostrar el nombre del usuario que ha iniciado sesion, se obtiene del estado login. 
                            // En el caso de que sea undefined no ocurrira un error grave porque se tiene el operador optional chaining
                            login.user?.username
                        }
                    </span>
                    <button
                        className="btn btn-outline-success"
                        // Manejador de evento al pulsar el boton, se invoca la función handlerLogout
                        onClick={handlerLogout}
                    >
                        logout
                    </button>
                </div>
            </div>
        </nav>
    );
}