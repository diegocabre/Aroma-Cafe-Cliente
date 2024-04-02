import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../imgs/productos.json";
import { Card, Button, Form } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import "../css/ProductCard.css";

const ProductCard = ({ productId }) => {
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

  if (product.category === "Cafe") {
    return (
      <Card className="product-card d-flex flex-column h-100" key={product.id}>
        <Link to={`/products/${product.id}`}>
          <Card.Img
            className="product-image"
            variant="top"
            src={product.image}
          />
        </Link>
        <Card.Body>
          <Card.Title className="product-title">{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text className="product-price">
            Precio: $ {product.price}
          </Card.Text>
          <Card.Text className="product-category">
            Categoría: {product.category}
          </Card.Text>
          <Card.Text className="product-brand">
            Marca: {product.brand}
          </Card.Text>
          <Card.Text className="product-stock">
            Stock: {product.countInStock}
          </Card.Text>
          <Form.Group controlId="quantity">
            <Form.Label>Cantidad:</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min={1}
              max={product.countInStock}
            />
          </Form.Group>
        </Card.Body>
        <Card.Footer>
          <Button
            className="btn-add-to-cart w-100"
            onClick={() => handleAddToCart()}
          >
            Añadir al carrito
          </Button>
        </Card.Footer>
      </Card>
    );
  }
};

export default ProductCard;
