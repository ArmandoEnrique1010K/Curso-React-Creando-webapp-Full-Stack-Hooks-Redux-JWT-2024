import { useReducer } from "react"; // Importa el hook useReducer de React
import { loginReducer } from "../reducers/loginReducer"; // Importa el reductor de login
import Swal from "sweetalert2"; // Importa SweetAlert2 para mostrar alertas

// No olvidar importar la función loginUser
// Importa la función para validar las credenciales de login
import { loginUser } from "../services/authService";

// Valores iniciales...
// Definir los valores iniciales para el estado de login
// Se utiliza un sessionStorage para almacenar las credenciales del usuario
// Recuerda que JSON.parse convierte un string a un objeto JSON
const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false, // Estado inicial de autenticación
  user: undefined, // Usuario no definido inicialmente
};

export const useAuth = () => {
  // Inicializar el estado de login usando useReducer con loginReducer y initialLogin
  const [login, dispach] = useReducer(loginReducer, initialLogin);

  // Función para manejar el login del usuario
  const handlerLogin = ({ username, password }) => {
    // Llama a la función loginUser del servicio de autenticación para validar las credenciales
    const isLogin = loginUser({ username, password }); // Verifica si el login es válido

    // Implementar un login simulado
    // En lugar de utilizar "username === "admin" && password === "12345"" en la condición, se utiliza isLogin para validar si las credenciales son validas
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
          // Por sintaxis, se utiliza la propiedad isAuth para establecer si el usuario esta autenticado o no en el sistema
          isAuth: true,
          user, // Información del usuario
        })
      );

      // Recuerda que para visualizar el objeto que se almacena en sessionStorage:
      // 1. Pulsa F12 en el navegador y ve a la sección 'Application' (en la barra de menu superior)
      // 2. En el panel izquierdo busca 'Session storage' y haz clic en la URL de la aplicación web
      // 3. Se obtendrá una lista de keys, busca el key 'login'
      // 4. Opcionalmente puedes borrar los datos almacenados haciendo clic derecho en el key deseado y selecciona 'delete'. Vuelve a cargar la pagina web para ver el cambio.
    } else {
      // Mostrar un mensaje de alerta si las credenciales son incorrectas
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
    // sessionStorage.removeItem remueve el objeto de login del sessionStorage
    sessionStorage.removeItem("login");
  };

  // Solamente retorna un objeto que contiene las funcionalidades que se van a requerir
  return {
    login,
    handlerLogin,
    handlerLogout,
  };
};
