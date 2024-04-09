import React from "react";
import "../../components/css/Client.css"; // Asegúrate de importar los estilos necesarios
import ProfilePicture from "../../../public/imgs/perfil.jpg"; // Importa la foto de perfil
import { NavLink } from "react-router-dom"; // Importa NavLink para el enlace al carrito de compras
import { useCart } from "../context/CartContext"; // Importa el contexto del carrito de compras
import ProductCard from "../../components/common/ProductCard";

const Client = () => {
  const { cart } = useCart(); // Obtiene el carrito de compras del contexto

  return (
    <section>
      {/* Estructura de la barra superior con la foto de perfil y el carrito de compras */}
      <div className="top-bar">
        <div className="profile">
          <img src={ProfilePicture} alt="Profile" />
          {/* Aquí podrías mostrar el nombre de usuario, etc. */}
        </div>
        <div className="cart">
          {/* Enlace al carrito de compras */}
          <NavLink to="/cart">
            <i className="carrito fas fa-shopping-cart"></i>
            {/* Muestra el número de elementos en el carrito si hay productos */}
            {cart.length > 0 && (
              <span className="cart-count">{cart.length}</span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Estructura para mostrar todos los productos */}
      <div className="products">
        {/* Aquí puedes repetir el componente ProductCard para cada producto */}
        <ProductCard />
        <ProductCard />
        {/* Repite según la cantidad de productos disponibles */}
      </div>
    </section>
  );
};

export default Client;
