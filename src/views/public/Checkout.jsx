import React from "react";
import { useCart } from "../../components/context/CartContext";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../../components/css/Checkout.css";

const CheckoutPage = () => {
  const { cart } = useCart();

  const calculateSubtotal = () => {
    return cart.reduce(
      (subtotal, product) => subtotal + product.price * product.quantity,
      0
    );
  };

  const handleCheckout = () => {};

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-form">
        <h2>Resumen del Pedido</h2>
        {cart.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: {product.quantity}</p>
          </div>
        ))}
        <p>Subtotal: ${calculateSubtotal()}</p>
        <Form>
          <Form.Group controlId="cardNumber">
            <Form.Label>Número de Tarjeta</Form.Label>
            <Form.Control
              type="text"
              placeholder="1234 5678 9012 3456"
              required
            />
          </Form.Group>
          <Form.Group controlId="cardExpiry">
            <Form.Label>Vencimiento</Form.Label>
            <Form.Control
              type="text"
              placeholder="MM/AA"
              required
              pattern="\d{2}/\d{2}"
            />
          </Form.Group>
          <Form.Group controlId="cardCVC">
            <Form.Label>CVC</Form.Label>
            <Form.Control
              type="text"
              placeholder="123"
              required
              pattern="\d{3}"
            />
          </Form.Group>
          <Form.Group controlId="cardName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              required
              pattern="[a-zA-Z\s]+"
            />
          </Form.Group>
          <Form.Group controlId="cardEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="2mL0K@example.com"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
          </Form.Group>
          <Form.Group controlId="cardPhone">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="tel"
              placeholder="123-456-7890"
              required
              pattern="\d{3}-\d{3}-\d{4}"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleCheckout}>
            Procesar Pago
          </Button>
        </Form>
        <Button variant="primary" as={Link} to="/cart">
          Volver al Carrito
        </Button>
      </div>
    </div>
  );
};

export default CheckoutPage;
