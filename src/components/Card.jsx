import PropTypes from "prop-types";

function Card({ registrations }) {
  
  return (

    <>
      {registrations.map((registration) => {
        const { name, age, gender, owner, date } = registration;
        return (
          <div className="card" key={`${name}${owner}${date}`}>
            <h2><em>Paciente</em></h2>
            <hr />
            <h3>Nombre: {name}</h3>
            <h3>Edad: {age}</h3>
            <h3>Género: {gender}</h3>
            <h3>Fecha de la cita: {date.toLocaleDateString()}</h3>
            <h4>Propietario: {owner}</h4>
          </div>
        );
      })}
    </>
  );
}

Card.propTypes = {
  registrations: PropTypes.array.isRequired,
};

export default Card;
