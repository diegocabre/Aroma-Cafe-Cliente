import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* import PrivateRoute from "./routes/PrivateRoute"; */
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
/* import Administrator from "./views/private/Adminitrator";
import CartClient from "./views/private/CartClient";
import Client from "./views/private/Client"; */

const App = () => {
  return (
    <Router>
      <div>
        <CartProvider>
          <ProductProvider>
            <Header />
            <Routes>
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
   {/*            <PrivateRoute
                exact
                path="/login/admin"
                component={Administrator}
                isAuthenticated={isAuthenticated}
              />
              <PrivateRoute
                exact
                path="/login/client"
                component={Client}
                isAuthenticated={isAuthenticated}
              />
              <PrivateRoute
                exact
                path="/login/client/cart"
                component={CartClient}
                isAuthenticated={isAuthenticated}
              /> */}
              <Route exact path="/cart" element={<CartPage />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/register" element={<RegisterPage />} />
            </Routes>
          </ProductProvider>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
