import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

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

// Hook personalizado para manejar el estado de los usuarios
export const useUsers = () => {
  // useReducer para manejar la lista de usuarios, usando usersReducer y un estado inicial
  const [users, dispatch] = useReducer(usersReducer, initialUsers);

  // useState para manejar el usuario seleccionado en el formulario
  const [userSelected, setUserSelected] = useState(initialUserForm);

  // Estado para controlar la visibilidad del formulario
  const [visibleForm, setVisibleForm] = useState(false);

  // Función para agregar o actualizar un usuario
  const handlerAddUser = (user) => {
    // Primera forma
    // let type;

    // Si el usuario no tiene un ID, se añade como nuevo; si tiene ID, se actualiza
    // if (user.id === 0) {
    //   type = "addUser";
    // } else {
    //   type = "updateUser";
    // }

    // dispatch({
    //   type,
    //   payload: user, // Se envía el usuario como payload de la acción
    // });

    // Segunda forma
    // Determina si se va a agregar o actualizar un usuario dependiendo de si tiene ID
    dispatch({
      type: user.id === 0 ? "addUser" : "updateUser",
      payload: user, // Pasa el usuario como payload para el reducer
    });

    // Muestra una alerta utilizando SweetAlert para confirmar la acción realizada
    Swal.fire({
      // fire contiene un objeto con las propiedades title, text y icon
      title: user.id === 0 ? "Usuario Creado" : "Usuario Actualizado",
      text:
        user.id === 0
          ? "El usuario ha sido creado con éxito!"
          : "El usuario ha sido actualizado con éxito!",
      icon: "success",
    });

    handlerCloseForm(); // Cierra el formulario después de agregar o actualizar el usuario
  };

  // Función para eliminar un usuario
  const handlerRemoveUser = (id) => {
    // Muestra una alerta de confirmación antes de eliminar el usuario
    Swal.fire({
      title: "¿Está seguro de que desea eliminar?",
      text: "¡Cuidado, el usuario será eliminado!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
    }).then((result) => {
      // Si el usuario confirma la eliminación, se dispara la acción para eliminar el usuario
      if (result.isConfirmed) {
        dispatch({
          type: "removeUser",
          payload: id, // Pasa el ID del usuario a eliminar como payload para el reducer
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
    setVisibleForm(true); // Muestra el formulario
    setUserSelected({ ...user }); // Establece el usuario seleccionado en el estado del formulario
  };

  // Función para abrir el formulario y preparar para un nuevo usuario
  const handlerOpenForm = () => {
    setVisibleForm(true); // Muestra el formulario
  };

  // Función para cerrar el formulario y reiniciar el estado del usuario seleccionado
  const handlerCloseForm = () => {
    setVisibleForm(false); // Oculta el formulario
    setUserSelected(initialUserForm); // Reinicia el usuario seleccionado a su estado inicial
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
