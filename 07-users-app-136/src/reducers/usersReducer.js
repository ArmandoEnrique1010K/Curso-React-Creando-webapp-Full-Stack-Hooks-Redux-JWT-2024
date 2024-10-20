// Reducer que maneja las acciones relacionadas con la lista de usuarios
export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case "addUser":
      // Agrega un nuevo usuario al estado actual
      return [
        // Mantiene los usuarios actuales
        ...state,
        {
          // Agrega los datos del nuevo usuario
          ...action.payload,
          // Asigna un ID único basado en la marca de tiempo actual
          id: new Date().getTime(),
        },
      ];

    case "removeUser":
      // Filtra y elimina el usuario con el ID especificado en el payload
      return state.filter((user) => user.id !== action.payload);

    case "updateUser":
      // Actualiza la información de un usuario específico
      return state.map((u) => {
        if (u.id === action.payload.id) {
          return {
            // Reemplaza los datos del usuario con la nueva información del payload
            ...action.payload,
            // Se mantiene la propiedad password (para omitir ese campo, no se modifica el password)
            password: u.password,
          };
        }
        return u; // Retorna los usuarios que no coinciden con el ID sin cambios
      });

    default:
      // Retorna el estado actual si la acción no coincide con ningún caso
      return state;
  }
};
