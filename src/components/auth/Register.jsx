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
  const [registrationMessage, setRegistrationMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValidated({ ...validated, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    try {
      const response = await fetch(config.apiUrl + "/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validated),
      });

      const data = await response.json();
      setRegistrationMessage(data.message); // Establece el mensaje de registro exitoso
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setValidated({
        name: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfir: "",
      });
    }
  };

  return (
    <div className="form-container">
      <h1>Registrate</h1>
      {registrationMessage && <p>{registrationMessage}</p>}{" "}
      {/* Muestra el mensaje de registro exitoso */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Tu Nombre"
            onChange={handleChange}
            value={validated.name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Tu Apellido"
            onChange={handleChange}
            value={validated.lastName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="tu Correo Electrónico"
            onChange={handleChange}
            value={validated.email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="tu Contraseña"
            onChange={handleChange}
            value={validated.password}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="passwordConfir"
            placeholder="tu Contraseña de nuevo"
            onChange={handleChange}
            value={validated.passwordConfir}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrate
        </Button>
        <p>
          ¿Ya tienes una cuenta?{" "}
          <NavLink to="/login">
            <p>Inicia Sesión</p>
          </NavLink>
        </p>
      </Form>
    </div>
  );
}

export default Register;
