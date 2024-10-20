import { LoginPage } from "./auth/pages/LoginPage"; // Importa el componente de la página de inicio de sesión
// import { UsersPage } from "./pages/UsersPage"; // Importa el componente de la página de usuarios
// import { Navbar } from "./components/layout/Navbar"; // Importa el componente de la barra de navegación
import { useAuth } from "./auth/hooks/useAuth"; // Importa el hook personalizado para la autenticación
// Importar los componentes de React Router
import { Navigate, Route, Routes } from "react-router";
import { UserRoutes } from "./routes/UserRoutes";

// Componente principal de la aplicación UsersApp
export const UsersApp = () => {

    // Desestructuración del objeto retornado por el hook useAuth
    const { login, handlerLogin, handlerLogout } = useAuth()

    return (
        // Definir las rutas de la aplicación usando Routes
        <Routes>
            {
                // En lugar de renderizar la barra de navegación y la lista de usuarios

                // Si el usuario está autenticado, renderizar las rutas privadas
                login.isAuth
                    ? (
                        // Ruta base para las rutas privadas
                        <Route path="/*" element={
                            // Renderizar UserRoutes pasando las propiedades login y handlerLogout
                            <UserRoutes login={login} handlerLogout={handlerLogout} />
                        } />
                    )
                    : (
                        // Si el usuario no está autenticado, renderizar las rutas públicas (recuerda que el uso de fragmento hace posible utilizar componentes de React que no se incluiran uno dentro del otro como <Route>)
                        <>
                            {/* Ruta para la página de login */}
                            <Route path="/login" element={
                                // Renderizar LoginPage pasando la propiedad handlerLogin
                                <LoginPage handlerLogin={handlerLogin} />
                            } />

                            {/* Ruta por defecto para redirigir a la página de login */}
                            <Route path="/*" element={
                                // Redirigir a /login si la ruta no está definida
                                <Navigate to="/login" />
                            } />
                        </>
                    )
            }
        </Routes >

    )
};

