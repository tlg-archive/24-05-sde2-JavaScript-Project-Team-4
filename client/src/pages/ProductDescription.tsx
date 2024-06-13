import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../utils/ProductService";
import "../assets/css/product.css";
import Navbar from "../components/Nabar";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";

interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  sellersName: string;
  sellersLocation: string;
}

const ProductDescription = (): React.ReactElement => {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    const getSingleProduct = async (id: string) => {
      const response = await ProductService.getSingleProduct(id);
      setProduct(response.product);
    };

    if (id) {
      getSingleProduct(id);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className="product-img">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-title">
          <h2>{product.name}</h2>
          <h3>{product.sellersName}</h3>
          <p>{product.sellersLocation}</p>
        </div>
        <div className="product-description">
          <p>{product.description}</p>
        </div>
        <div className="add-to-cart">
          <p>${product.price}</p>
          <Button variant="primary" className="product-button">
            Add to Cart
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDescription;
