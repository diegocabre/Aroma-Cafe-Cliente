import React from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import productsData from "../../components/imgs/productos.json";
import SouvenirCard from "../../components/common/SouvenirCard";
import "../../components/css/ProductDetailPage.css";

const SouvenirDetailPage = () => {
  const { id } = useParams();

  const product = productsData.find((product) => product.id === parseInt(id));

  return (
    <div>
      <Link to="/souvenirs" className="back-button">
        <Button variant="primary">Volver</Button>
      </Link>
      {product ? (
        <SouvenirCard productId={product.id} />
      ) : (
        <div>No se encontró el producto.</div>
      )}
    </div>
  );
};

export default SouvenirDetailPage;
