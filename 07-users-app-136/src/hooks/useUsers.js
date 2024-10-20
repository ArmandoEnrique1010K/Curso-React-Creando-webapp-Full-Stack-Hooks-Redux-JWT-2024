import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

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

  // Define navigate para redireccionar a otras rutas
  const navigate = useNavigate();

  // Función para agregar o actualizar un usuario
  const handlerAddUser = (user) => {
    // Determina si se va a agregar o actualizar un usuario dependiendo de si el usuario tiene ID
    dispatch({
      type: user.id === 0 ? "addUser" : "updateUser",
      payload: user, // Pasa el usuario como payload para el reducer
    });

    // Muestra una alerta utilizando SweetAlert para confirmar la acción realizada
    Swal.fire({
      title: user.id === 0 ? "Usuario Creado" : "Usuario Actualizado",
      text:
        user.id === 0
          ? "El usuario ha sido creado con éxito!"
          : "El usuario ha sido actualizado con éxito!",
      icon: "success",
    });

    // Cierra el formulario después de agregar o actualizar el usuario
    handlerCloseForm();

    // Redirigir a la página de usuarios después de agregar o editar un usuario
    navigate("/users");
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
