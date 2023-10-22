
import DynamicButton from "./button.jsx";
import PropTypes from 'prop-types'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from '../assets/perro.png';

const Form = ({ handleInputChange, handleDateChange, handleFormSubmit, form}) => {
  return (
    <div>
      <form className="form-card" onSubmit={handleFormSubmit}>
        <img src={logo} />
        <h1>Citas Animal vet</h1>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Ingresa nombre del paciente."
            value={form.name}
            onChange={handleInputChange}
          />
          
          <input
            type="string"
            name="age"
            placeholder="Ingresa su edad."
            value={form.age}
            onChange={handleInputChange}
          />

          <input
            type="text"
            name="gender"
            placeholder="Ingresa su genero."
            value={form.gender}
            onChange={handleInputChange}
          />
          
          <DatePicker
            name="date"
            placeholderText="Ingrese la fecha."
            selected={form.date}
            onChange={handleDateChange}
            required
          />

          <input
            type="text"
            name="owner"
            placeholder="Nombre del propietario."
            value={form.owner}
            onChange={handleInputChange}
          />
          
          <DynamicButton buttonText="Enviar" type="submit" name="envio"/>


        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  form: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    date: PropTypes.object,
}),
  
}

export default Form;
