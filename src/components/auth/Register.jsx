import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/Register.css";
function Register() {
  return (
    <div className="form-container">
      <h1>Registrate</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="name" placeholder="Tu Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" name="lastName" placeholder="Tu Apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="tu Correo Electrónico"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="tu Contraseña"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirmar Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="tu Contraseña de nuevo"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrate
        </Button>
        <p>
          ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
        </p>
      </Form>
    </div>
  );
}

export default Register;
