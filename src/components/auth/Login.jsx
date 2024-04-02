import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/Login.css";

function Login() {
  return (
    <div className="form-container">
      <h1>Inicia Sesión</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Correo Electrónico" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Inicia Sesión
        </Button>
        <p>
          No tienes cuenta? <a href="/register">Registrate</a>
        </p>
      </Form>
    </div>
  );
}
export default Login;
