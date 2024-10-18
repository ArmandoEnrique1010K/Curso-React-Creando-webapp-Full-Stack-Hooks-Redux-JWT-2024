import PropTypes from "prop-types";

// Define el componente funcional UserDetails
export const UserDetails = ({ user, id }) => (
    <div>
        {/* Renderiza un saludo que incluye el nombre y apellido del usuario, junto con su ID */}
        que tal! {user.name} {user.lastName} con el id {id + 10}

        {/* Recuerda que para acceder a las propiedades de un objeto (en este caso user) se utiliza la sintaxis de punto */}
        {/* Como el id es una propiedad de tipo number, se puede sumar su valor, si fuera un String, se concatena como un texto */}

        {/* El método JSON.stringify convierte un objeto JavaScript en una cadena de texto JSON */}
        {/* JSON.stringify(user) */}
    </div>
);

{/* Es necesario definir valores por defecto entre subcomponentes */ }
UserDetails.propTypes = {
    user: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
}