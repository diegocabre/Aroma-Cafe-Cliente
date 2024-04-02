import React from "react";
import { useCart } from "../../components/context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../../components/css/CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const handleClearCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
    window.location.href = "/products";
  };

  return (
    <div className="cart-page-container">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <h2>{product.name}</h2>
              <p>Precio: {product.price}</p>
              <p>Cantidad: {product.quantity}</p>
              <div className="cart-item-buttons">
                <Button
                  variant="danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  Eliminar
                </Button>
                <Button
                  variant="success"
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </Button>
                <Button
                  variant="warning"
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </Button>
              </div>
            </div>
          ))}
          <div className="cart-buttons">
            <Button variant="primary" as={Link} to="/checkout">
              Proceder al Pago
            </Button>
            <Button variant="primary" onClick={handleClearCart}>
              Eliminar pedido
            </Button>
            <Button variant="primary" as={Link} to="/products">
              Seguir Comprando
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
