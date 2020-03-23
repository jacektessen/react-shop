import React from "react";

const ProductDetail = ({ location }) => {
  const { title, price, description, img } = location.state.product;

  return (
    <div className="container">
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <img src={img} alt="" />
    </div>
  );
};

export default ProductDetail;
