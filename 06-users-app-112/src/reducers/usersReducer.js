// Función reducer que maneja las acciones relacionadas con la lista de usuarios
// Ten en cuenta que se define el tipo de dato para el state
export const usersReducer = (state = [], action) => {
  // Evalua el tipo de acción utilizando una declaración switch
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

    // Recuerda que solamente se incluye solo los usuarios cuyo id no coincida con el id proporcionado en action.payload

    case "updateUser":
      // Actualiza la información de un usuario específico
      return state.map((u) => {
        // Verifica si el id del usuario actual coincide con el id del usuario en action.payload.id
        if (u.id === action.payload.id) {
          return {
            // Reemplaza los datos del usuario con la nueva información del payload
            ...action.payload,
          };
        }

        // Retorna los usuarios que no coinciden con el ID sin cambios
        return u;
      });

    default:
      // Retorna el estado actual si la acción no coincide con ningún caso
      return state;
  }
};
