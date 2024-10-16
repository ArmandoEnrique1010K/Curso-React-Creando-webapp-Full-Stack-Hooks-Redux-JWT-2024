// Define el componente funcional UserDetails
export const UserDetails = ({ user, id }) => (
    <div>
        {/* Renderiza un saludo que incluye el nombre y apellido del usuario, junto con su ID */}
        que tal! {user.name} {user.lastName} con el id {id}
    </div>
);
