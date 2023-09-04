import React from "react";
import { checkout } from "../services/checkout";

const Product = ({ image, name, description, price, priceId }) => {
  return (
    <li className="product-grid-item">
      <div className="product-image-container">
        <img src={image} alt={name} width="564" height="846" />
      </div>
      <div className="product-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <button className="product-button" onClick={() => checkout(priceId)}>
          Buy now for <strong>NZ{price}</strong>
        </button>
      </div>
    </li>
  );
};

export default Product;
