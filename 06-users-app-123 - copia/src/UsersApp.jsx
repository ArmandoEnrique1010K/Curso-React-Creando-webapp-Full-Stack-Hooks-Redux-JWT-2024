// Se eliminan las importaciones que no se requieren
// import { UserForm } from "./components/UserForm";
// import { UserModalForm } from "./components/UserModalForm";
// import { UsersList } from "./components/UsersList";
// import { useUsers } from "./hooks/useUsers";
// import { UsersPage } from "./pages/UsersPage";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPage";

// Componente principal de la aplicación UsersApp
export const UsersApp = () => {

    // Dentro de unos fragmentos se renderiza el componente UsersPage para mostrar la lista de usuarios
    return (
        <>
            {/* La página web LoginPage será la página de inicio y el primer componente que se renderiza al acceder a la aplicación */}
            <LoginPage />

            {/* Para pruebas, puedes renderizar UsersPage en lugar de LoginPage como la página de inicio para ver la ventana modal */}
            {/* <UsersPage /> */}

            {/* Antes este componente contenia la logica de la lista de usuarios, todo el codigo se traslado a UsersPage */}
        </>
    )
};

