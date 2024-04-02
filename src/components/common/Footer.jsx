import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "../css/Footer.css";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Formulario enviado correctamente");
    handleCloseModal();
  };

  return (
    <footer>
      <div className="footer">
        <div className="contacto">
          <Button className="boton" variant="light" onClick={handleShowModal}>
            <h2>Contacto</h2>
          </Button>
        </div>
        <div className="redes">
          <a href="">
            <i className="fa-brands fa-facebook fa-2x"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram fa-2x"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-whatsapp fa-2x"></i>
          </a>
        </div>
        <div className="direccion">
          <p>Calle falsa 123</p>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese su correo electrónico"
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese su mensaje"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </footer>
  );
};

export default Footer;
