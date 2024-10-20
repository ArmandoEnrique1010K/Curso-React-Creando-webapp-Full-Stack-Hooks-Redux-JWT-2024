// Las aplicaciones de React contiene componentes que se pueden repetir en todas las paginas web definidas, todo esos componentes se encuentran dentro de layout

// Layout funcional Navbar
export const Navbar = ({ login, handlerLogout }) => {
    return (
        // Se utilizan estilos de Bootstrap para definir la barra de navegación
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/* Nombre de la barra de navegación */}
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    {/* Icono para alternar la navegación en pantallas pequeñas */}
                    <span className="navbar-toggler-icon"></span>
                </button>
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