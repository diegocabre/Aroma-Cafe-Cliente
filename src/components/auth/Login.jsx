import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Navigate } from "react-router-dom";
import "../css/Login.css";
import config from "../../config/config";

function Login() {
  const [validated, setValidated] = useState({
    email: "",
    password: "",
  });
  const [loginMessage, setLoginMessage] = useState("");

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
      const response = await fetch(config.apiUrl + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validated),
      });
      const data = await response.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        setLoginMessage("¡Inicio de sesión exitoso!");
        setTimeout(() => {
          setLoginMessage("");
          // Redirige a la ruta deseada utilizando Navigate
          return <Navigate to="/client" />;
        }, 2000);
      } else {
        setLoginMessage("Credenciales incorrectas");
      }
    } finally {
      setValidated({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="form-container">
      <h1>Inicia Sesión</h1>
      {loginMessage && <p>{loginMessage}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            onChange={handleChange}
            value={validated.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            value={validated.password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Inicia Sesión
        </Button>
        <p>
          ¿No tienes cuenta? <a href="/register">Regístrate</a>
        </p>
      </Form>
    </div>
  );
}

export default Login;
