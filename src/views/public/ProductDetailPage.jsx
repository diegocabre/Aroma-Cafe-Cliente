import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import productsData from "../../components/imgs/productos.json";
import ProductCard from "../../components/common/ProductCard";
import "../../components/css/ProductDetailPage.css";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === parseInt(id));
  return (
    <div>
      <Link to="/products" className="back-button">
        <Button variant="primary">Volver</Button>
      </Link>
      {product ? (
        <ProductCard productId={product.id} />
      ) : (
        <div>No se encontró el producto.</div>
      )}
    </div>
  );
};

export default ProductDetailPage;
