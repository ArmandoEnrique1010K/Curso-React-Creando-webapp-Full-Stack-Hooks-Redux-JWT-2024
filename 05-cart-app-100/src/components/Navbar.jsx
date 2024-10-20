// Importamos NavLink desde react-router-dom para manejar la navegación
import { NavLink } from "react-router-dom";

// Este componente contiene la barra de navegación con estilos de Bootstrap (recuerda que es con className en lugar de class)
export const Navbar = () => {
    return (
        <>
            {/* Barra de navegación principal, se aplica un tema oscuro de Bootstrap */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* Nombre de la aplicación que aparece en la barra de navegación */}

                    {/* El componente <NavLink></NavLink> se utiliza en lugar de un elemento <a></a>, crea un enlace de navegación que no recarga la pagina */}
                    {/* A diferencia de <Link></Link>, <NavLink> proporciona capacidades integradas para aplicar estilos a los enlaces activos */}
                    {/* El atributo to sirve para definir el endpoint que fue definido en el componente que contiene todos los endpoints (CartRoutes) */}

                    {/* <a className="navbar-brand" href="#">CartApp</a> */}
                    <NavLink className={'navbar-brand'} to="/">CartApp</NavLink>

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
                                {/* Un detalle importante es que en el atributo to, el endpoint debe comenzar con un slash y luego el nombre del endpoint que fue definido */}
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
