// Importamos NavLink desde react-router-dom para manejar la navegación
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            {/* Barra de navegación principal */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* Nombre de la aplicación que aparece en la barra de navegación */}
                    <a className="navbar-brand" href="#">CartApp</a>
                    {/* Botón para colapsar la barra de navegación en dispositivos móviles */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Contenido de la barra de navegación colapsable */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* Enlace a la página de inicio */}
                            <li className="nav-item">
                                <NavLink className={'nav-link'} to="/">Home</NavLink>
                            </li>
                            {/* Enlace al catálogo de productos */}
                            <li className="nav-item">
                                <NavLink className={'nav-link'} to="/catalog">Catalog</NavLink>
                            </li>
                            {/* Enlace al carrito de compras */}
                            <li className="nav-item">
                                <NavLink className={'nav-link'} to="/cart">Cart</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
