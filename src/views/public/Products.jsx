import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "../../components/common/ProductCard";
import productsData from "../../components/imgs/productos.json";
import "../../components/css/Products.css";

const Products = () => {
  return (
    <div className="products">
      <Row xs={1} md={3} lg={5} className=" d-flex g-3">
        {productsData.map((product) => (
          <Col key={product.id}>
            <ProductCard productId={product.id} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
