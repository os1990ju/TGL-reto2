import { useState } from "react";
import Form from "./components/Form.jsx";
import Card from "./components/Card.jsx";
import "./styles.scss";

function App() {

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    date: null,
    owner: "",
  });

  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState();

  const handleInputChange = (e) => {

    e.preventDefault();
    const { name, value } = e.target;

    if (value.trim().length < 3) {
      setError('El nombre debe tener almenos 3 caracteres.');
    } else {
      setError('');
    }

    const newForm = {
      ...form,
      [name]: value,
    };

    setForm(newForm);
  };

  const handleDateChange = (date) => {
    const newForm = {
      ...form,
      date: date,
    };
    setForm(newForm);
  };

  const handleFormSubmit = (e)=>{

    e.preventDefault();
    setRegistrations([...registrations, form]);
    setForm({ name: "", owner: "", age:"", gender: "", date: null});
    
  }
  console.log(registrations);
  
  return (
    <div className="app">

      <Form
        form={form}
        handleInputChange={handleInputChange}
        handleDateChange={handleDateChange}
        handleFormSubmit={handleFormSubmit}
        error={error}
      />

    <div className="card-container">
    {/* {registrations.map((registration) => {
        const { name, age, gender, owner, date } = registration;
        return (
          <div className="card" key={`${name}${owner}${date}`}>
            <h2><em>Paciente</em></h2>
            <hr/>
            <h3>Nombre: {name}</h3>
            <h3>Edad: {age}</h3>
            <h3>Genero: {gender}</h3>
            <h3>Fecha cita: {date.toLocaleDateString()}</h3>
            <h4>Propietario: {owner}</h4>
          </div>
        );
      })} */}
      
      <Card registrations={registrations}/>
    </div>

    </div>
  );
}

export default App;

{/* <Card registrations={registrations}/> */}