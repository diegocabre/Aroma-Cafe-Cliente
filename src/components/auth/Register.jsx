import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/Register.css";
import config from "../../config/config";

function Register() {
  const [validated, setValidated] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfir: "",
  });

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
      alert(data);
    } catch (error) {
      alert.error(error);
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
          ya tienes una cuenta?{" "}
          <a href={config.apiUrl + "/login"}>Login</a>
        </p>
      </Form>
    </div>
  );
}

export default Register;
