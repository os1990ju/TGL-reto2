import DynamicButton from "./button.jsx";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import logo from "../assets/perro.png";

const Form = ({
  handleInputChange,
  handleDateChange,
  handleFormSubmit,
  form,
  register,
  handleSubmit,
  errors,
}) => {
  const msg = "es obligatorio."
  
  const messages = {
    req: "Este campo es obligatorio ojo",
    name: typeof errors.name ==='undefined'?"":`El campo nombre ${msg}`,
    age: typeof errors.age ==='undefined'?"":`El campo edad ${msg}`,
    gender: typeof errors.gender ==='undefined'?"":`El campo genero ${msg}`,
    date: typeof errors.date ==='undefined'?"":`El campo fecha de cita ${msg}`,
    owner: typeof errors.owner ==='undefined'?"":`El campo propietario ${msg}`,
    //futuros mensajes personalizados.
  };

  return (
    <div>
      <form className="form-card" onSubmit={handleSubmit(handleFormSubmit)}>
        <img src={logo} />
        <h1>Citas Animal vet</h1>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Ingresa nombre del paciente."
            value={form.name}
            {...register("name", { required: messages.req })}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error">{messages.name}</p>}
          <input
            type="string"
            name="age"
            placeholder="Ingresa su edad."
            value={form.age}
            {...register("age", { required: messages.req })}
            onChange={handleInputChange}
          />
          {errors.age && <p className="error">{messages.age}</p>}
          <input
            type="text"
            name="gender"
            placeholder="Ingresa su genero."
            value={form.gender}
            {...register("gender", { required: messages.req })}
            onChange={handleInputChange}
          />
          {errors.gender && <p className="error">{messages.gender}</p>}
          <DatePicker
            name="date"
            placeholderText="Ingrese la fecha."
            selected={form.date}
            onChange={handleDateChange}
            required
          />
          {errors.date && <p className="error">{messages.date}</p>}
          <input
            type="text"
            name="owner"
            placeholder="Nombre del propietario."
            value={form.owner}
            {...register("owner", { required: messages.req })}
            onChange={handleInputChange}
          />
          {errors.owner && <p className="error">{messages.owner}</p>}
          <DynamicButton buttonText="Enviar" type="submit" name="envio" />
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
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.object,
    age: PropTypes.object,
    owner: PropTypes.object,
    gender: PropTypes.object,
    date: PropTypes.object,
  }),
};

export default Form;
