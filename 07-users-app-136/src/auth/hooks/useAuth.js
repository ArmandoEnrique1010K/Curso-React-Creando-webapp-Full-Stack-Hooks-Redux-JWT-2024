import { useReducer } from "react"; // Importa el hook useReducer de React
import { loginReducer } from "../reducers/loginReducer"; // Importa el reductor de login
import Swal from "sweetalert2"; // Importa SweetAlert2 para mostrar alertas
import { loginUser } from "../services/authService"; // Importa la función para validar las credenciales de login
import { useNavigate } from "react-router";

// Definir los valores iniciales para el estado de login
const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false, // Estado inicial de autenticación
  user: undefined, // Usuario no definido inicialmente
};

export const useAuth = () => {
  // Inicializar el estado de login usando useReducer con loginReducer y initialLogin
  const [login, dispach] = useReducer(loginReducer, initialLogin);

  // Define navigate para redireccionar a otras rutas
  const navigate = useNavigate();

  // Función para manejar el login del usuario
  const handlerLogin = ({ username, password }) => {
    // Llama a la función loginUser del servicio de autenticación para validar las credenciales
    const isLogin = loginUser({ username, password }); // Verifica si el login es válido

    // Implementar un login simulado
    if (isLogin) {
      // Crear un objeto de usuario simulado (solamente se utiliza el username)
      const user = { username: "admin" };

      // Despachar la acción de login con el payload del usuario
      dispach({
        type: "login",
        payload: user, // Payload con la información del usuario
      });

      // Guarda el estado de login en sessionStorage
      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true, // Autentica al usuario en el sistema
          user, // Información del usuario
        })
      );

      // Redirige a la pagina de usuarios después de un login exitoso
      navigate("/users");
    } else {
      // Mostrar un mensaje de alerta si las credenciales son incorrectas
      Swal.fire({
        title: "Error Login", // Título del mensaje de error
        text: "Username o Password inválidos", // Mensaje del error
        icon: "error", // Icono del error
      });
    }
  };

  // Función para manejar el logout del usuario
  const handlerLogout = () => {
    // Dispara la acción de logout sin payload
    dispach({
      type: "logout",
    });

    // Elimina las credenciales almacenadas en el navegador
    sessionStorage.removeItem("login");
  };

  // Solamente retorna un objeto que contiene las funcionalidades que se van a requerir
  return {
    login,
    handlerLogin,
    handlerLogout,
  };
};
