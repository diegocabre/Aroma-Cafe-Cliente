import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/Login.css";
import config from "../../config/config";

function Login() {
  const navigate = useNavigate();
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

    try {
      const response = await fetch(config.apiUrl + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validated),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.token) {
          localStorage.setItem("token", data.token);
          setLoginMessage("¡Inicio de sesión exitoso!");
          setTimeout(() => {
            setLoginMessage("");
            navigate("/private"); // Redirige al usuario a la página privada
          }, 2000);
        } else {
          setLoginMessage("Credenciales incorrectas");
        }
      } else if (response.status === 409) {
        setLoginMessage("Ya has iniciado sesión anteriormente");
      } else {
        const errorMessage = await response.text();
        setLoginMessage(
          errorMessage ||
            "Error en el servidor. Por favor, intenta nuevamente más tarde."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setLoginMessage(
        "Error en el servidor. Por favor, intenta nuevamente más tarde."
      );
    }

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
  };

  return (
    <div className="form-container">
      <h1>Inicia Sesión</h1>
      {loginMessage && (
        <p className={loginMessage.includes("exitoso") ? "success" : "error"}>
          {loginMessage}
        </p>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            onChange={handleChange}
            value={validated.email}
            required
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
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Inicia Sesión
        </Button>
        <p>
          ¿No tienes cuenta?{" "}
          <NavLink to="/register">
            <p>Regístrate</p>
          </NavLink>
        </p>
      </Form>
    </div>
  );
}

export default Login;
