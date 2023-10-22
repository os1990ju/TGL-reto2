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

      
      <Card registrations={registrations}/>
    </div>

    </div>
  );
}

export default App;

{/* <Card registrations={registrations}/> */}