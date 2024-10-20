import { LoginPage } from "./auth/pages/LoginPage"; // Importa el componente de la página de inicio de sesión
import { UsersPage } from "./pages/UsersPage"; // Importa el componente de la página de usuarios
import { Navbar } from "./components/layout/Navbar"; // Importa el componente de la barra de navegación
import { useAuth } from "./auth/hooks/useAuth"; // Importa el hook personalizado para la autenticación

// Componente principal de la aplicación UsersApp
export const UsersApp = () => {

    // En lugar de definir aqui la logica para el login, se utiliza un hook personalizado para que contenga toda esa logica

    // Desestructuración del objeto retornado por el hook useAuth
    // Obtiene el estado de login y las funciones para manejar el login y logout
    const { login, handlerLogin, handlerLogout } = useAuth()

    // Dentro de unos fragmentos se renderiza el componente UsersPage para mostrar la lista de usuarios
    return (
        <>
            {
                // Renderizar Navbar y UsersPage si el usuario está autenticado (se utiliza un fragmento), de lo contrario, renderizar LoginPage pasando la propiedad handlerLogin
                login.isAuth
                    ? (
                        <>
                            {/* Muestra la barra de navegación con el estado de login y la función de logout */}
                            <Navbar login={login} handlerLogout={handlerLogout} />
                            {/* Muestra la página de usuarios */}
                            <UsersPage />

                        </>
                    )
                    :
                    // Muestra la pagina de login si no esta autenticado
                    <LoginPage handlerLogin={handlerLogin} />
            }
        </>
    )
};

