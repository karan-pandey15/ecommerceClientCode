import React from "react";
import productData from "./homedata.json";
import Card from "../CardComponent/Card";
import "./product.css";

const Products = () => {
  return (
    <div className="products-container">
      {productData.map((item, index) => {
        return (
          <Card
            key={index}
            price={item.price}
            productName={item.title}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default Products;
