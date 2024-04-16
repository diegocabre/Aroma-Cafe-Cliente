// Importa los módulos necesarios
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./views/public/Home";
import Products from "./views/public/Products";
import ProductDetailPage from "./views/public/ProductDetailPage";
import SouvenirDetailPage from "./views/public/SouvenirDetailPage";
import SouvenirPage from "./views/public/SouvenirPage";
import CartPage from "./views/public/CartPage";
import LoginPage from "./views/public/LoginPage";
import RegisterPage from "./views/public/RegisterPage";
import { ProductProvider } from "./components/context/ProductContext";
import { CartProvider } from "./components/context/CartContext";
import Checkout from "./views/public/Checkout";
import Client from "./views/public/ClientPages";

// Define el componente de la vista privada
const PrivateView = () => {
  // Verifica si el usuario está autenticado (por ejemplo, si existe un token en el almacenamiento local)
  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  // Redirecciona al usuario a la página de inicio de sesión si no está autenticado
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  // Si el usuario está autenticado, muestra la vista privada
  return (
    <Routes>
      {/* Define tus rutas privadas aquí */}
      <Route path="/private" element={<Client />} />
    </Routes>
  );
};

// Define el componente de la aplicación principal
const App = () => {
  return (
    <Router>
      <div>
        <CartProvider>
          <ProductProvider>
            <Header />
            <Routes>
              {/* Rutas públicas */}
              <Route exact path="/" element={<Home />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/souvenirs" element={<SouvenirPage />} />
              <Route
                exact
                path="/products/:id"
                element={<ProductDetailPage />}
              />
              <Route
                exact
                path="/souvenirs/:id"
                element={<SouvenirDetailPage />}
              />
              <Route exact path="/cart" element={<CartPage />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/register" element={<RegisterPage />} />
              {/* Ruta protegida */}
              <Route path="/*" element={<PrivateView />} />
            </Routes>
          </ProductProvider>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
