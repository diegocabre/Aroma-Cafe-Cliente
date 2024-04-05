import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import productsData from "../../productos.json";
import { Card, Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import "../css/ProductCard.css";

const SouvenirCard = ({ productId }) => {
  const { addToCart } = useCart();
  const product = productsData.find((product) => product.id === productId);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
    alert("Producto agregado al carrito");
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1 && value <= product.countInStock) {
      setQuantity(value);
    }
  };

  if (!product) {
    return <div>No se encontró el producto.</div>;
  }

  return (
    <Card className="product-card d-flex flex-column h-100" key={product.id}>
      <NavLink to={`/souvenirs/${product.id}`} className="product-card-link">
        <Card.Img className="product-image" variant="top" src={product.image} />
      </NavLink>
      <Card.Body>
        <Card.Title className="product-title">{product.name}</Card.Title>
        <Card.Text className="product-price">${product.price}</Card.Text>
        <Card.Text className="product-category">
          Categoría: {product.category}
        </Card.Text>
        <Card.Text className="product-brand">Marca: {product.brand}</Card.Text>
        <Card.Text className="product-stock">
          Stock: {product.countInStock}
        </Card.Text>
        <Form.Group controlId="quantity">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            className="product-quantity"
            type="number"
            min="1"
            max={product.countInStock}
            value={quantity}
            onChange={handleQuantityChange}
          />
        </Form.Group>
      </Card.Body>
      <Card.Footer className="mt-auto">
        <Button className="btn-add-to-cart w-100" onClick={handleAddToCart}>
          Agregar al carrito
        </Button>
      </Card.Footer>
    </Card>
  );
};

SouvenirCard.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default SouvenirCard;
