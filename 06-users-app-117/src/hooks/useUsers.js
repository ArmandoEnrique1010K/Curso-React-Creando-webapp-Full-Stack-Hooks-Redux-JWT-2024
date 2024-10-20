import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

// Se traslada los estados iniciales

// Estado inicial para la lista de usuarios
const initialUsers = [
  {
    id: 1,
    username: "pepe",
    password: "12345",
    email: "pepe@correo.com",
  },
];

// Estado inicial para el formulario del usuario
const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

// Hook personalizado para manejar el estado de los usuarios, toda la logica definida en UsersApp se traslada aqui
export const useUsers = () => {
  // useReducer para manejar la lista de usuarios, usando usersReducer y un estado inicial
  const [users, dispatch] = useReducer(usersReducer, initialUsers);

  // useState para manejar el usuario seleccionado en el formulario
  const [userSelected, setUserSelected] = useState(initialUserForm);

  // Se define un estado para controlar la visibilidad del formulario
  const [visibleForm, setVisibleForm] = useState(false);

  // Función para agregar o actualizar un usuario
  const handlerAddUser = (user) => {
    // Primera forma
    // Variable para determinar el tipo de acción
    // let type;

    // Si el usuario no tiene un ID, se añade como nuevo; si tiene ID, se actualiza
    // if (user.id === 0) {
    //   type = "addUser";
    // } else {
    //   type = "updateUser";
    // }

    // Dispara la acción correspondiente con los datos del usuario
    // dispatch({
    //   type,
    //   payload: user, // Se envía el usuario como payload de la acción
    // });

    // Segunda forma
    // Determina si se va a agregar o actualizar un usuario dependiendo de si el usuario tiene ID
    dispatch({
      type: user.id === 0 ? "addUser" : "updateUser",
      payload: user, // Pasa el usuario como payload para el reducer
    });

    // Muestra una alerta utilizando SweetAlert para confirmar la acción realizada
    // Importa SweetAlert con el comando "npm install sweetalert2"
    Swal.fire({
      // fire contiene un objeto con las propiedades title (titulo), text (texto) y icon (tipo de icono)
      // Se utiliza un operador ternario para verificar si el usuario tiene ID y mostrar un mensaje de creación o actualización
      title: user.id === 0 ? "Usuario Creado" : "Usuario Actualizado",
      text:
        user.id === 0
          ? "El usuario ha sido creado con éxito!"
          : "El usuario ha sido actualizado con éxito!",
      icon: "success",
    });

    // Cierra el formulario después de agregar o actualizar el usuario
    handlerCloseForm();
  };

  // Función para eliminar un usuario
  const handlerRemoveUser = (id) => {
    // Muestra una alerta de confirmación antes de eliminar el usuario
    Swal.fire({
      // Estructura de propiedades para un cuadro de alerta de tipo confirmación
      title: "¿Está seguro de que desea eliminar?",
      text: "¡Cuidado, el usuario será eliminado!",
      icon: "warning",
      showCancelButton: true, // Mostrar botón cancelar
      confirmButtonColor: "#3085d6", // Color del botón confirmar
      cancelButtonColor: "#d33", // Color del botón cancelar
      confirmButtonText: "Sí, eliminar", // Texto del botón de confirmación
    }).then((result) => {
      // Si el usuario confirma la eliminación...
      if (result.isConfirmed) {
        // Dispara la acción para eliminar el usuario
        dispatch({
          type: "removeUser",
          // Pasa el ID del usuario a eliminar como payload para el reducer
          payload: id,
        });

        // Muestra una alerta de confirmación de eliminación exitosa
        Swal.fire({
          title: "Usuario Eliminado",
          text: "¡El usuario ha sido eliminado con éxito!",
          icon: "success",
        });
      }
    });
  };

  // Función para seleccionar un usuario y cargar sus datos en el formulario
  const handlerUserSelectedForm = (user) => {
    // Muestra el formulario
    setVisibleForm(true);

    // Establece el usuario seleccionado en el estado del formulario
    setUserSelected({ ...user });
  };

  // Función para abrir el formulario y preparar para un nuevo usuario
  const handlerOpenForm = () => {
    // Muestra el formulario
    setVisibleForm(true);
  };

  // Función para cerrar el formulario y reiniciar el estado del usuario seleccionado
  const handlerCloseForm = () => {
    // Oculta el formulario
    setVisibleForm(false);

    // Limpia los campos del formulario reseteando el usuario seleccionado
    setUserSelected(initialUserForm);
  };

  // Retorna todas las propiedades y funciones necesarias para manejar el estado de usuarios y el formulario
  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
  };
};
