import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/Register.css";
import config from "../../config/config";
import { NavLink } from "react-router-dom";

function Register() {
  const [validated, setValidated] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfir: "",
  });
  const [registerMessage, setRegisterMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValidated({ ...validated, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    try {
      const response = await fetch(config.apiUrl + "/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validated),
      });

      const data = await response.json();
      if (response.ok) {
        setRegisterMessage(data.msg);
        setTimeout(() => {
          setRegisterMessage("");
        }, 2000);
      } else {
        setRegisterMessage(data.msg || "Error en el servidor");
      }
    } catch (error) {
      console.error("Error:", error);
      setRegisterMessage("Error en el servidor");
    } finally {
      setValidated({
        name: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfir: "",
      });
    }

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
  };

  return (
    <div className="form-container">
      <h1>Registrate</h1>
      {registerMessage && <p className="error">{registerMessage}</p>}
      <Form onSubmit={handleSubmit}>
        {/* Formulario... */}
      </Form>
    </div>
  );
}

export default Register;

