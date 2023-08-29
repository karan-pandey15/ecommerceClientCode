import React from "react";

import "./card.css";

const Card = ({ price, productName, image }) => {
  return (
    <div className="card">
      <img className="image" src={image} alt="Not found..." />
      <p className="small-text">From ${price}</p>
      <p className="big-text">{productName}</p>
    </div>
  );
};

export default Card;
