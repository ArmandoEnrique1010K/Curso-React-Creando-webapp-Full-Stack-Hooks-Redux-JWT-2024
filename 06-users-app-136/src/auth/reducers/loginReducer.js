// Exportar la función reductora que manejará el estado de login
export const loginReducer = (state = {}, action) => {
  // Evaluar el tipo de acción utilizando una declaración switch
  switch (action.type) {
    // Caso para iniciar sesión
    case "login":
      // Retornar un nuevo estado con isAuth en true y el usuario desde action.payload
      return {
        isAuth: true, // Indica que el usuario está autenticado
        user: action.payload, // Almacena los datos del usuario obtenidos de la acción
      };

    // Caso para cerrar sesión
    case "logout":
      // Retornar un nuevo estado con isAuth en false (no hay un payload)
      return {
        isAuth: false, // Indica que el usuario no está autenticado
      };

    // Caso por defecto si la acción no coincide con ninguna de las definidas
    default:
      // Retornar el estado actual sin cambios
      return state; // Retorna el estado existente sin alteraciones
  }
};
