// ProductContext.js
import React, { createContext, useState } from "react";
import productsData from "../imgs/productos.json";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
